export const addImage = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgEl = document.createElement('img');
    imgEl.setAttribute('alt', 'My image');
    imgEl.src = imgSrc;
    const page = document.querySelector('.page');
    page.append(imgEl);

    const onImageLoaded = () => {
      const { width, height } = imgEl;
      resolveCb({ width, height });
    };

    imgEl.addEventListener('load', onImageLoaded);
    imgEl.addEventListener('error', () => rejectCb(new Error('Image load is failed')));
  });

  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resPromise = addImage(imgSrc);
const imageSize = document.querySelector('.image-size');

resPromise
  .then(({ width, height }) => {
    imageSize.textContent = `${width} x ${height}`;
  })
  .catch(err => console.log(err));
