const object = {};
console.log(object?.user?.name?.age); 

//просто 1 раз выведет undefined, если вдруг будет свойство user то все равно в такой консоль логе вывелет 1 раз undefined, но это уже будет из-за свойства
//name, если написать console.log(object?.user) для объекта у которого будет свойство user - то выведет значение этого свойства.