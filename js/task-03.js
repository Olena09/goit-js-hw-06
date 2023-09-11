const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");
function createImageElement(imageInfo) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery-item");

  const image = document.createElement("img");
  image.src = imageInfo.url;
  image.alt = imageInfo.alt;

  listItem.appendChild(image);
  return listItem;
}

function createGallery(imagesArray) {
  const imageElements = imagesArray.map(createImageElement);
  const galleryHTML = imageElements.map(element => element.outerHTML).join('');
  gallery.insertAdjacentHTML("beforeend", galleryHTML);
}
createGallery(images);

