# De Kaaskantine — website

Website voor De Kaaskantine, broodjes · delicatessen · koffie, Hofstraat 4 in Alkmaar.
Eén pagina, geen build-stap: gewoon HTML, CSS en een beetje JavaScript.

## Lokaal bekijken
Dubbelklik op `index.html`.

## Online zetten met GitHub Pages (eenmalig, ±5 minuten)

1. Ga naar https://github.com/new
   - Repository name: bijv. `kaaskantine`
   - Kies **Public** (GitHub Pages is gratis voor publieke repo's)
   - Vink **niets** aan bij "Add a README / .gitignore / license"
   - Klik **Create repository**
2. Open een terminal in deze map (`site/`) en plak de twee regels die GitHub toont onder
   "…or push an existing repository from the command line", bijvoorbeeld:
   ```
   git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/kaaskantine.git
   git push -u origin main
   ```
3. Op GitHub: **Settings → Pages** → bij "Build and deployment" kies
   *Source: Deploy from a branch*, *Branch: `main`*, map `/ (root)` → **Save**.
4. Na een minuut staat de site op:
   **https://JOUW-GEBRUIKERSNAAM.github.io/kaaskantine/**
   Die link kun je doorsturen; iedereen kan hem openen, ook op de telefoon.

Later iets aangepast? Dan:
```
git add -A
git commit -m "Weekend special bijgewerkt"
git push
```
Binnen een minuut staat de nieuwe versie online.

Eigen domein (bijv. kaaskantine.nl)? Vul het in bij **Settings → Pages → Custom domain** en volg de DNS-instructies van GitHub.

## Aanpassen
| Wat | Waar |
|---|---|
| Weekend special (naam, tekst, prijs, foto) | `js/data.js` → `weekendSpecial` |
| Menu en prijzen | `js/data.js` → `menu` |
| Openingstijden (voor "Nu open"-label) | `js/data.js` → `openingstijden` **én** de tabel in `index.html` |
| Bestellink | `js/data.js` → `bestellink` |
| Telefoon / e-mail | `index.html` (sectie Bezoek, footer en het JSON-LD-blok bovenin) |
| Kleuren en lettertypes | bovenaan `css/style.css` |

## Nog te doen voor livegang
- Telefoonnummer (`06 12 34 56 78`) en e-mail (`hoi@kaaskantine.nl`) zijn placeholders.
- Maandag en dinsdag staan als gesloten; even bevestigen.
- Foto's zijn Instagram-screenshots (~450 px). Originele foto's maken de site scherper; vervang ze in `images/` met dezelfde bestandsnaam.
- De weekend special-foto bevat nog een muiscursor uit de schermafbeelding.
