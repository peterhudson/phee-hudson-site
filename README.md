# Phee Hudson: website concepts

Three static redesign prototypes for [phillipahudson.com](https://phillipahudson.com), built from Phillipa (Phee) Hudson's own paintings and text.

- `summit/`: dark, cinematic, single page with a full-screen slideshow
- `gallery/`: light, white-walled gallery with a page for every painting
- `boathouse/`: warm, magazine-style, with paintings browsed by place

`shared/works.js` holds the painting catalogue, and `shared/lightbox.js` is the shared image viewer. Images load directly from her current site (ArtSites.ca), so nothing is copied here. Forms are mock-ups and send nothing.

There's no build step: open `index.html` or serve the folder. It's published with GitHub Pages from the `main` branch root.
