# SEO Setup Guide - .com som Primär Domän

## ✅ Gjorda Ändringar (automatiska)

1. **`_redirects`** - 301 redirect från .se → .com aktiverat
2. **`sitemap-se.xml`** - Separat sitemap för .se-domänen
3. **`robots.txt`** - Uppdaterat med korrekt sitemap-referens
4. **`index.html`** - Har redan canonical URL till .com och korrekt structured data

---

## 📋 Steg-för-Steg Checklista

### Steg 1: Deploy till Netlify
- [ ] Commit och pusha ändringarna till GitHub
- [ ] Netlify kommer automatiskt att deploya (om auto-deploy är aktivt)
- [ ] Vänta tills deployn är klar

### Steg 2: Konfigurera Domäner i Netlify

#### A. Lägg till båda domänerna:
1. Gå till Netlify Dashboard
2. Välj din site → **Domain settings** / **Domain management**
3. Klicka på **Add custom domain**
4. Lägg till: `emelielitwin.com`
5. Klicka på **Add custom domain** igen
6. Lägg till: `emelielitwin.se`

#### B. Sätt primär domän:
1. Under **Custom domains**, klicka på **Options** bredvid `emelielitwin.com`
2. Välj **Set as primary domain**
3. Detta säkerställer att .com är din huvuddomän

#### C. Aktivera HTTPS:
1. Under varje domän, verifiera att **HTTPS** är aktiverat
2. Om inte, klicka på **Verify DNS configuration** och följ instruktionerna
3. Vänta på att SSL-certifikaten provisionneras (kan ta upp till 24h)

### Steg 3: DNS-Konfiguration (hos din domänregistrar)

#### För emelielitwin.com:
```
Type: A
Name: @ (eller lämna tomt)
Value: [Netlifys IP-adress från domain settings]

Type: CNAME  
Name: www
Value: [din-site].netlify.app
```

#### För emelielitwin.se:
```
Type: A
Name: @ (eller lämna tomt)  
Value: [Netlifys IP-adress från domain settings]

Type: CNAME
Name: www
Value: [din-site].netlify.app
```

**Tips:** Netlifys aktuella IP-adresser hittar du i deras docs eller domain settings.

---

### Steg 4: Google Search Console

#### A. Verifiera emelielitwin.com (Primär):
1. Gå till [Google Search Console](https://search.google.com/search-console)
2. Klicka **Add property** → välj **URL prefix**
3. Ange: `https://emelielitwin.com`
4. Verifieringsmetod: **HTML file** (du har redan `google54bda279654e68ef.html`)
   - Eller skapa ny verifieringsfil
   - Eller använd HTML tag i `<head>`
5. Klicka **Verify**

#### B. Lägg till sitemap för .com:
1. I Search Console för emelielitwin.com
2. Gå till **Sitemaps** (vänster meny)
3. Lägg till: `https://emelielitwin.com/sitemap.xml`
4. Klicka **Submit**

#### C. Verifiera emelielitwin.se (Sekundär):
1. Lägg till ny property: `https://emelielitwin.se`
2. Verifiera med samma metod (kan behöva ny verifieringsfil för .se)
3. Lägg till sitemap: `https://emelielitwin.se/sitemap-se.xml`

#### D. Informera Google om domänbyte (valfritt):
1. I Search Console för .se
2. Gå till **Settings** → **Change of address**
3. Välj .com som ny adress
4. Detta hjälper Google att snabbare migrera signaler

---

### Steg 5: Testa Redirects

#### Använd verktyg:
- [HTTP Status Checker](https://httpstatus.io/)
- [Redirect Checker](https://www.redirect-checker.org/)

#### Testa dessa URLs:
- [ ] `http://emelielitwin.se` → ska ge **301** till `https://emelielitwin.com/`
- [ ] `https://emelielitwin.se` → ska ge **301** till `https://emelielitwin.com/`
- [ ] `http://emelielitwin.com` → ska ge **301** till `https://emelielitwin.com/`
- [ ] `https://emelielitwin.com` → ska ge **200 OK**

#### Manuellt test:
```bash
# Kör i terminal för att se redirect headers
curl -I https://emelielitwin.se
# Ska visa: HTTP/2 301
# Location: https://emelielitwin.com/
```

---

### Steg 6: Bing Webmaster Tools (valfritt men rekommenderat)

1. Gå till [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Lägg till och verifiera båda domänerna
3. Skicka in sitemaps
4. Använd **Site Move** tool för att informera om redirect från .se till .com

---

### Steg 7: Uppdatera Externa Länkar

- [ ] LinkedIn - Uppdatera URL till `https://emelielitwin.com`
- [ ] GitHub profil - Uppdatera website URL
- [ ] Twitter/X - Uppdatera bio/website
- [ ] Andra sociala medier
- [ ] Email-signatur
- [ ] CV/Portfolio dokument

---

## 🔍 Verifiering Efter 1-2 Veckor

### Google Search Console - Kontrollera:
1. **Coverage** - Att .com-sidor indexeras
2. **Core Web Vitals** - Prestanda
3. **Mobile Usability** - Mobilvänlighet
4. **Manual Actions** - Inga varningar
5. **Security Issues** - Inga problem

### Sökresultat:
```
Sök på Google:
- "site:emelielitwin.com" - Ska visa dina sidor
- "site:emelielitwin.se" - Ska visa färre/inga resultat över tid
```

---

## 📊 Förväntade Resultat

### Omedelbart (0-7 dagar):
- ✅ Redirects fungerar
- ✅ Besökare till .se hamnar automatiskt på .com
- ✅ Ingen innehållsduplicering

### Kort sikt (2-4 veckor):
- 📈 Google börjar indexera .com som primär
- 📉 .se försvinner gradvis från sökresultat
- 🔄 SEO-signaler börjar konsolideras till .com

### Lång sikt (1-3 månader):
- 🎯 All SEO-kraft koncentrerad till .com
- 📈 Förbättrad ranking tack vare konsolidering
- ✨ Ren och tydlig domänstruktur

---

## 🆘 Troubleshooting

### Problem: Redirect fungerar inte
**Lösning:**
- Kontrollera att båda domänerna är korrekt konfigurerade i Netlify
- Verifiera DNS-inställningar hos registrar
- Rensa webbläsarcache: `Cmd + Shift + R` (Mac) / `Ctrl + Shift + R` (Windows)
- Vänta 24-48h på DNS-propagering

### Problem: Google indexerar fortfarande .se
**Lösning:**
- Detta är normalt - tar tid!
- Säkerställ att canonical URL i HTML pekar till .com ✅ (redan gjort)
- Använd "Remove URL" i Search Console för .se (tillfälligt)
- Ha tålamod - kan ta 4-8 veckor

### Problem: SSL-certifikat fungerar inte
**Lösning:**
- Vänta upp till 24h på provisionnering
- Kontrollera DNS-konfiguration i Netlify
- Använd Netlifys DNS (enklast) eller verifiera CNAME-poster

---

## ✨ Tips för Bästa SEO

1. **Uppdatera regelbundet:**
   - Content (portfolio, projekt)
   - Sitemap lastmod-datum
   - Structured data

2. **Övervaka prestanda:**
   - PageSpeed Insights
   - Core Web Vitals
   - Lighthouse scores

3. **Bygg backlinks:**
   - Använd alltid .com i nya länkar
   - Kontakta sajter som länkar till .se och be om uppdatering

4. **Social sharing:**
   - Alla delningar ska använda .com URL
   - OG-taggar är redan korrekta ✅

---

## 📞 Support & Resurser

- [Netlify Docs - Redirects](https://docs.netlify.com/routing/redirects/)
- [Google - Site Moves](https://developers.google.com/search/docs/advanced/crawling/site-move-with-url-changes)
- [Netlify Support](https://answers.netlify.com/)

---

**Skapad:** 2026-02-25  
**Status:** .com är nu primär domän 🎉
