/*Нужно запрограммировать мессенджер. Как должна работать программа:
— Шаблон сообщения находится в теге template с идентификатором 
message-template.
— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления
 и имя пользователя.
— Новое сообщение добавляется в конец контейнера с классом chat-content.
— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом 
	chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы
	 с классом chat-form).
- Чтобы уlалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом
	 chat-message-button). Эта кнопка появляется при наведении на сообщение.
*/
// Получаем необходимые элементы DOM
const messageTemplate = document.getElementById('message-template');
const chatContent = document.querySelector('.chat-content');
const chatForm = document.querySelector('.chat-form');
const chatFormInput = document.querySelector('.chat-form-input');

// Функция для добавления нового сообщения
function addMessage(text) {
  // Клонируем шаблон сообщения
  const messageClone = messageTemplate.content.cloneNode(true);
  
  // Находим элементы внутри клонированного шаблона
  const chatMessage = messageClone.querySelector('.chat-message');
  const messageName = messageClone.querySelector('.chat-message-name');
  const messageText = messageClone.querySelector('.chat-message-text');
  const deleteButton = messageClone.querySelector('.chat-message-button');
  
  // Устанавливаем текст сообщения
  messageText.textContent = text;
  
  // Добавляем обработчик события для удаления сообщения
  deleteButton.addEventListener('click', () => {
    chatMessage.remove();
  });
  
  // Добавляем клонированный элемент в контейнер с сообщениями
  chatContent.appendChild(messageClone);
}

// Обработчик события отправки формы
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Получаем текст из поля ввода
  const messageText = chatFormInput.value;
  
  // Добавляем новое сообщение
  addMessage(messageText);
  
  // Очищаем поле ввода
  chatFormInput.value = '';
});