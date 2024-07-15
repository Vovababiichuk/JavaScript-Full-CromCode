export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Image');
  imgElem.src = imgSrc;
  const page = document.querySelector('.page');
  console.log(page);
  page.append(imgElem);

  const onImageLoaded = () => {
    callback(null, imgElem);
  };

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => console.log('Image load is failed'));
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

// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
