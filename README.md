# Rent & Run Self Drive Cars — Website

A responsive, single-page HTML/CSS/JavaScript website concept for Rent & Run Self Drive Cars, Wakad, Pune.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in Chrome or Microsoft Edge.
3. Internet access is needed for Google Fonts and the externally hosted demo vehicle photography.

No build tools, framework, backend, login, or payment integration are required.

## Project structure
- `index.html` — page structure and content
- `style.css` — responsive styling and layout
- `script.js` — sample fleet data, vehicle modal, mobile navigation, date validation and WhatsApp enquiries
- `assets/favicon.svg` — temporary text-based favicon

## Important owner handover notes
- The business details used are the supplied verified details: Rent & Run Self Drive Cars; Shankar Kalat Nagar, Wakad, Pune; +91 74200 37459; padmakar6533@gmail.com; supplied Google Maps link.
- No original business logo file was included with the brief. The header therefore uses a typographic wordmark, not an invented logo. Replace it with the owner's original approved logo when supplied.
- The SVG favicon is a temporary typographic placeholder, not the official logo. Replace it with the official square logo/favicon when supplied.
- The three fleet entries in `script.js` are clearly identified sample concepts. Replace the names, images, seating, transmission, fuel type and prices with owner-confirmed information before publishing.
- No rental policies, availability, testimonials, opening hours, discounts, or booking confirmations have been fabricated. FAQ answers explicitly say that policy details must be confirmed.
- WhatsApp actions open a prefilled enquiry to the supplied number. They do not confirm a reservation.
- Vehicle images are remote Unsplash demo images and should be replaced with owner-approved vehicle photos for the live business site.

## Editing the sample fleet
Open `script.js` and edit the `vehicles` array near the top. Each item contains:
`id`, `name`, `variant`, `category`, `image`, `seats`, `transmission`, `fuel`, `price`, and `description`.

The booking form vehicle dropdown and car cards are generated from this array automatically.
