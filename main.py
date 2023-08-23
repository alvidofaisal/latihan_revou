from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

def fetch_bbc_news():
    url = "http://feeds.bbci.co.uk/news/rss.xml"
    resp = requests.get(url)
    soup = BeautifulSoup(resp.content, features="xml")
    items = soup.findAll('item')
    news_items = []
    for item in items:
        news_item = {}
        news_item['title'] = item.title.text
        news_item['description'] = item.description.text
        news_item['link'] = item.link.text
        news_items.append(news_item)
    return news_items

@app.route('/')

def main():
    while True:
        choice = input("Would you like to know the news today? y/n: ")
        if choice == 'y':
            news_items = fetch_bbc_news()
            for news_item in news_items:
                print(news_item)
        else:
            break

if __name__ == "__main__":
    main()