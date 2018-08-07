function makeLightboxes(photoset) {
    let image_containers = photoset.getElementsByClassName("image-container");
    for (let i = 0, n = image_containers.length; i < n; i++) {
        let image_container = image_containers[i];
        image_container.addEventListener("click", function() {
            let current = i + 1;
            lightbox(image_container, image_containers, current);
        });
    }
}

function lightbox(image_container, image_containers, current) {
    let lightboxes = [];
    for (let i = 0, n = image_containers.length; i < n; i++) {
        let image_container = image_containers[i]
        let arrayContents = {
            "width" : image_container.dataset.width,
            "height" : image_container.dataset.height,
            "low_res" : image_container.dataset.lowres,
            "high_res" : image_container.dataset.highres,
        }
        lightboxes.push(arrayContents);
    }
    Tumblr.Lightbox.init(lightboxes, current);
}

function makePhotoset(photoset) {
    let images = photoset.getElementsByClassName("image-container");
    let layout = photoset.dataset.layout;
    for (let i = 0, n = layout.length; i < n; i++) {
        let cols = layout.charAt(i);
        let row = document.createElement("div");
        row.classList.add("photo-row-" + cols);
        row.classList.add("photo-row");

        for (let j = 0; j < parseInt(cols); j++) {
            row.appendChild(images[0]);
        }

        photoset.appendChild(row);
    }
}
