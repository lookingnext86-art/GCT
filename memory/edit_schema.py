p='/app/frontend/public/index.html'; s=open(p).read()
import re
s=s.replace('"@type": "TravelAgency",\n          "@id"','"@type": ["Organization", "TravelAgency"],\n          "@id"')
for pat in [r'\n          "priceRange": [^\n]*', r'\n          "currenciesAccepted": [^\n]*', r'\n          "paymentAccepted": [^\n]*', r'\n          "knowsLanguage": [^\n]*', r',\n            "availableLanguage": [^\n]*']:
    s=re.sub(pat,'',s)
s=s.replace('"areaServed": ["Poland", "Czech Republic", "Austria", "Hungary", "Europe"]','"areaServed": ["Kraków", "Poland", "Central Europe"]')
s=re.sub(r'\n          "openingHoursSpecification": \{.*?\n          \},', '', s, flags=re.S)
open(p,'w').write(s); print('ok')
