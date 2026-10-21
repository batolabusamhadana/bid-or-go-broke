# Bid or Go Broke ⚡
Physical AWS auction game for **DevFest BZU** (Booth 8) by the **AWS Student Builder Group at Birzeit University**.
All prices and credits are fictional game values, not real AWS pricing.

## Contents
- `index.html` – Host console (timer, scenario draw, auction + credits tracker). Open directly in a browser, no install needed.
- `downloads/` – Printable deck (`.pptx`, importable into Canva) and host spreadsheet (`.xlsx`).
- `scripts/` – Code that generates the deck (`build_deck.js`, needs `npm i pptxgenjs`) and spreadsheet (`build_sheet.py`, needs `pip install openpyxl`).

## Run the host console
Open `index.html`, or visit the GitHub Pages link once enabled.

## Regenerate files
```bash
cd scripts
npm i pptxgenjs && node build_deck.js
pip install openpyxl && python build_sheet.py
```

## Credits
AWS Student Builder Group BZU · DevFest BZU. AWS and its logos are trademarks of Amazon; this is an unofficial student project.
