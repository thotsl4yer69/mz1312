import re, io, sys

def strip(p):
    h = io.open(p, encoding='utf-8', errors='ignore').read()
    h = re.sub(r'<(script|style|svg|noscript)[^>]*>.*?</\1>', '', h, flags=re.S | re.I)
    h = re.sub(r'<(br|/p|/li|/h[1-6]|/tr|/div)[^>]*>', '\n', h, flags=re.I)
    h = re.sub(r'<[^>]+>', ' ', h)
    ents = {'quot': '"', 'amp': '&', '#x27': "'", '#39': "'", 'lt': '<', 'gt': '>', 'nbsp': ' ', '#160': ' ', 'mdash': '--', 'ndash': '-'}
    for k, v in ents.items():
        h = h.replace('&' + k + ';', v)
    h = re.sub(r'[ \t]+', ' ', h)
    h = re.sub(r'\n\s*\n+', '\n', h)
    return h

for f in sys.argv[1:]:
    t = strip(f + '.html')
    io.open(f + '.txt', 'w', encoding='utf-8').write(t)
    print(f, len(t))
