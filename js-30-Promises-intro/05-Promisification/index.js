import { addImage } from './addImage.js';

const addImageV2 = url => {
  // put your code here
	return new Promise((resolve, reject) => {
		addImage(url, (error, data) => error ? reject(new Error(error)) : resolve(data));
	});
}

// examples

addImageV2('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg')
  .then(data => {
		const imageSize = document.querySelector('.image-size');
		imageSize.textContent = `${data.width} x ${data.height}`;
	}) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'



