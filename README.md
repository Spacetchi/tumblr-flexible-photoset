# 5ppi Flexible Photosets

This a jQuery-free method of displaying responsive tumblr photosets. It uses minimal javascript to process the photoset and relies purely on modern CSS for layout. In fact, you can customize the CSS in any way! It also comes with default tumblr lightbox functionality. You may preview the photosets and select styles [here](https://5ppp.tumblr.com/photoset).

## How-To 

This project is a demonstration of how to generate responsive photosets on tumblr. The HTML snippet shows how the photoset should be formatted in the theme file. The javascript file provides three functions to process the photosets into lightbox-able and style-able markup. **Theme-makers are expected to incorporate the functions into the theme themselves.** 

To install, use the HTML snippet in the theme file. Feel free to add captions and other content if necessary. Add the three functions into your code and execute them at some point. Place any CSS snippet in the theme's styling, modifying as necessary. 

## Quick Start 

Adding this in addition to the three functions will run them at a very basic level. 

```
window.addEventListener('load', startup, false);

function startup() {
    let photosets = document.getElementsByClassName("photoset");
    for (let i = 0, n = photosets.length; i < n; i++) {
        makeLightboxes(photosets[i]);
        makePhotoset(photosets[i]);
    }
}
```
