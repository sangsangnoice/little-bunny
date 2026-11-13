from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin
import re
root=Path(__file__).resolve().parents[1]
files=['index.html','style.css','bunny.svg','src/app.mjs','src/state.mjs','src/room.mjs','.nojekyll']
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.refs=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag in ['script','img'] and a.get('src'):self.refs.append(a['src'])
  if tag=='link' and a.get('href'):self.refs.append(a['href'])
p=Parser();p.feed((root/'index.html').read_text());p.feed((root/'src/room.mjs').read_text())
assert len(p.ids)==len(set(p.ids)), 'Duplicate DOM IDs'
base='https://example.github.io/little-bunny/'
for f in files:
 s=(root/f).read_text()
 refs=re.findall(r"(?:from\s+|import\s*)['\"]([^'\"]+)['\"]",s) if f.endswith('.mjs') else []
 if f=='index.html':refs+=p.refs
 for ref in refs:
  u=urljoin(base+f,ref);assert u.startswith(base) and u[len(base):] in files,(f,ref)
 assert not re.search(r'-----BEGIN .*PRIVATE KEY|ghp_[A-Za-z0-9]{30,}|AKIA[0-9A-Z]{16}|/Users/',s),f
assert not any('https://' in (root/f).read_text() for f in files if f.endswith(('.mjs','.css','.html'))),'Unexpected external request'
print('PASS 7 runtime files; relative GitHub Pages resources; unique DOM IDs; no external assets or common sensitive signatures')
