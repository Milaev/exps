function generateComments() {
  const comments = [];
  const names = ['Артём', 'Иван', 'Елена', 'Мария', 'Алексей', 'Ольга'];
  let id = 1;

  const numComments = Math.floor(Math.random() * 31); // Генерируем случайное число от 0 до 30

  for (let i = 0; i < numComments; i++) {
    const comment = {
      id: id,
      avatar: `img/avatar-${Math.floor(Math.random() * 6) + 1}.svg`,
      message: 'nhfnfnf',
      name: getRandomName(names),
    };

    comments.push(comment);
    id++;
  }

  return comments;
}

// Остальной код остается без изменений

const comments = generateComments();
console.log(comments);
