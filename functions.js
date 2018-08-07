function makeLightboxes(photoset) {
	// get image containers in photoset
    let image_containers = photoset.getElementsByClassName("image-container");

	// loop over image containers
    for (let i = 0, n = image_containers.length; i < n; i++) {
		// add click event to image container
        image_containers[i].addEventListener("click", function() {
			// current is the image's index in the photoset
			// due to tumblr reasons, it starts at 1
            let current = i + 1;
			// activate lightbox
            lightbox(image_containers, current);
        });
    }
}

function lightbox(image_containers, current) {
	// array of lightboxes for each image in photoset
	// lightbox is represented by an object
    let lightboxes = [];

	// loop over image containers
    for (let i = 0, n = image_containers.length; i < n; i++) {
		// create object for image container
        let image_container = image_containers[i]
        let arrayContents = {
            "width" : image_container.dataset.width,
            "height" : image_container.dataset.height,
            "low_res" : image_container.dataset.lowres,
            "high_res" : image_container.dataset.highres,
        }

		// add object to array
        lightboxes.push(arrayContents);
    }

	// activate built-in tumblr function
    Tumblr.Lightbox.init(lightboxes, current);
}

function makePhotoset(photoset) {
	// get image containers in photoset
    let images = photoset.getElementsByClassName("image-container");

	// get layout of photoset -- formatted as string of numbers of images per row
	// e.g "231" means row of 2 images, row of 3 images, row of 1 image
    let layout = photoset.dataset.layout;

	// loop over each row
    for (let i = 0, n = layout.length; i < n; i++) {
		// get number of images in row
        let cols = layout.charAt(i);

		// create row
		// row is a div with classes "photo-row" and "photo-row-n"
        let row = document.createElement("div");
        row.classList.add("photo-row-" + cols);
        row.classList.add("photo-row");

		// loop over number of images in row
		// move the right amount of images to row
        for (let j = 0; j < cols; j++) {
            row.appendChild(images[0]);
        }

		// add row to the photoset
        photoset.appendChild(row);
    }
}
