const mix = require("laravel-mix");

mix.react("resources/js/app.jsx", "public/js").sass(
    "resources/sass/main.scss",
    "public/css"
);
