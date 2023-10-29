var photos = [
  'gallery/laptop-large.jpg',
  'gallery/microphone-large.jpg',
  'gallery/keyboard-large.jpg',
  'gallery/signboard-large.jpg',
  'gallery/tree-large.jpg'
];

var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}

// //На каждой итерации мы передаём разные значения в addThumbnailClickHandler. 
// Каждый обработчик получает своё замыкание, в котором находятся какие-то конкретные значения
//  параметров thumbnail, photo. Именно эти значения использует каждый обработчик при наступлении события.
//  И теперь значение индекса в уже отработавшем цикле никак не влияет на нашу программу.

/* Техническое задание

Мяу! Нужно оживить галерею с фотографиями товаров.

В галерее есть миниатюры (элементы с классом 'gallery__photo-preview') и большое изображение (класс 'full-photo').

После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре,
только большего размера.

Пути к полноразмерным фотографиям находятся в массиве photos. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.

*/
var pictures = [
  'gallery-tomato/tomato-red-large.jpg',
  'gallery-tomato/tomato-yellow-large.jpg',
  'gallery-tomato/tomato-strange-large.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__picture-preview');
var fullPhoto = document.querySelector('.full-picture');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], pictures[i]);
}


/* Техническое задание

Мяу! Нужно оживить галерею с фотографиями товаров.

В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').

После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.

Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.

*/
