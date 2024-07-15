export const addImage = (imgSrc, callback) => {
  const page = document.querySelector('.page');
  const createImageEl = document.createElement('img');
  createImageEl.setAttribute('alt', 'My Image');
  createImageEl.src = imgSrc;
  createImageEl.addEventListener('load', () => {
    console.log('Image loaded');
    page.append(createImageEl);

    if (callback) {
      callback(null, createImageEl);
    }
  });
};

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
