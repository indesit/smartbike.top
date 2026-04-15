import requests
from bs4 import BeautifulSoup
import re
import json

base_url = "https://smartbike.top"

# Main pages to scrape
main_pages = [
    "/",
    "/about/",
    "/contact/",
    "/resources/",
    "/features/",
    "/velobicykly-pro-firmy/",
]

content = {}

for page in main_pages:
    url = base_url + page
    try:
        r = requests.get(url, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        # Get title
        title = soup.find('title')
        title = title.text if title else ""
        
        # Get main content
        main = soup.find('main') or soup.find('article') or soup.find('div', class_=lambda x: x and ('content' in x.lower() or 'main' in x.lower()))
        
        # Get all text
        text = soup.get_text(separator='\n', strip=True)
        
        # Get images
        images = []
        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src')
            if src and not src.startswith('data:'):
                if not src.startswith('http'):
                    src = base_url + src
                images.append(src)
        
        # Get links
        links = []
        for a in soup.find_all('a', href=True):
            href = a['href']
            if href.startswith('/'):
                href = base_url + href
            if base_url in href:
                links.append(href)
        
        content[page] = {
            'url': url,
            'title': title,
            'text': text[:5000],  # Limit text
            'images': images[:20],
            'links': list(set(links))[:30]
        }
        print(f"✓ {page}")
    except Exception as e:
        print(f"✗ {page}: {e}")

# Save to JSON
with open('/root/.openclaw/workspace/smartbike-scrape/content.json', 'w') as f:
    json.dump(content, f, indent=2, ensure_ascii=False)

# Extract unique images
all_images = set()
for page, data in content.items():
    for img in data.get('images', []):
        all_images.add(img)

with open('/root/.openclaw/workspace/smartbike-scrape/images.txt', 'w') as f:
    for img in sorted(all_images):
        f.write(img + '\n')

print(f"\nTotal unique images: {len(all_images)}")
print("Done!")
