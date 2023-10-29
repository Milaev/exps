var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var cardList = document.querySelector('.products');
console.log(cardList.children);

var listItem = makeElement('li', 'product');
cardList.appendChild(listItem);

var title = makeElement('h2', 'product__title', 'Профессиональная селфи-палка');
listItem.appendChild(title);

var price = makeElement('p', 'product__price', '1000');
listItem.appendChild(price);
