# 5ppi Flexible Photosets

This a jQuery-free method of displaying responsive tumblr photosets, used in [my themes](https://github.com/spacetchi/tumblr). It uses minimal javascript to process the photoset and relies purely on modern CSS for layout. In fact, you can customize the CSS in any way! It also comes with default tumblr lightbox functionality. You may preview the photosets and select styles [here](https://5ppp.tumblr.com/photoset).

## How-To 

This project is a demonstration of how to generate responsive photosets on tumblr. The HTML snippet shows how the photoset should be formatted in the theme file. The javascript file provides three functions to process the photosets into lightbox-able and style-able markup. **Theme-makers are expected to incorporate the functions into the theme themselves.** 

To install, use the HTML snippet in the theme file. Feel free to add captions and other content if necessary. Add the three functions into your code and execute them at some point. Place any CSS snippet in the theme's styling, modifying as necessary. The ``flexible`` CSS is recommended, but it looks less like the tumblr default photoset style.

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

## Additional Information 

The makePhotoset function moves the images into rows. Each row has a class of ``photo-row-n`` where ``n`` is the number of images in that row (3 is tumblr's limit at the moment). This can allows us to set widths for images in rows of 1, 2, and 3, which is used in the ``tumblr-like`` style. With set widths, images must have ``object-fit:cover`` which fails in certain older browsers.

The CSS snippets all use flexbox display to create the grid of elements. Flexbox display can allow all images to retain aspect ratios, eliminating the need to set image widths. This is used in the ``flexible`` style and is the recommended one because it breaks more gracefully. 

Padding is incredibly easy to modify. 

```
.photo-row {
    padding:{{PADDING}} 0;
}

.image-container {
    padding:0 {{PADDING}};
}
```

Simply replace ``{{PADDING}}`` with any CSS value. For best results, responsive units are recommended (default is 0.2em).
