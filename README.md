# denovo-homepage
Directory Structure
When you extract the template folder, you’ll see something like this inside the folder:
|-- Template Folder
    |-- assets
    |    |-- css
    |       |-- All CSS Files
    |    |-- scss
    |       |-- All SCSS Files
    |    |-- js
    |       |-- All JS Files
    |    |-- fonts
    |       |-- All Fonts Files
    |    |-- images
    |       |-- All Images
    |-- index.html and All HTML Files

Customization
Changing Default Theme Color
If you want to change the default Theme Color, open assets->css>main.css file. And find the default color and replace it with your preferred color.

Note: If you are familiar with Scss, you can change the color by changing the Scss variable.

Changing Default Font Family
Just like the color if you want to change the default Font, then go to assets->css>main.css

and find all the font-family then replace its property with your own font-family.

Make sure to include the font’s URL in your HTML or CSS fle. Otherwise, it won’t work.

Note: If you are familiar with Scss, you change the font-family by changing the Scss variable.

Plugins
To add interaction to the templates we’ve used these Vanilla JS and CSS Plugins.

Glightbox
Tiny Slider
Wow JS
Animate CSS - with some modification
Images
We used images from Unsplash

Unsplash

Note: Before we install the plugins make sure you have Node.js installed on your machine. Otherwise, the commands won’t work

``` bash
npm install
npm run start
```

more here https://docs.uideck.com/tailwind-template