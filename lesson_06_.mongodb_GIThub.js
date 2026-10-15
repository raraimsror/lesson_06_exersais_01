//1. Создание базы данных
use("lesson_06_chort_86_EL");

// 2. Создание коллекции
db.users.insertMany([
  { firstName: "Ivan", lastName: "Ivanov", age: 22, job: "Developer", hobby: "Football" },
  { firstName: "Anna", lastName: "Petrova", age: 19, job: "Designer", hobby: "Drawing" },
  { firstName: "Sergey", lastName: "Sidorov", age: 25, job: "Developer", hobby: "Chess" },
  { firstName: "Maria", lastName: "Smirnova", age: 31, job: "Marketer", hobby: "Running" },
  { firstName: "Alexey", lastName: "Kozlov", age: 28, job: "Analyst", hobby: "Football" },
  { firstName: "Elena", lastName: "Morozova", age: 20, job: "Designer", hobby: "Dancing" },
  { firstName: "Dmitry", lastName: "Volkov", age: 35, job: "Manager", hobby: "Fishing" },
  { firstName: "Olga", lastName: "Lebedeva", age: 23, job: "Developer", hobby: "Drawing" },
  { firstName: "Pavel", lastName: "Pavlov", age: 40, job: "Director", hobby: "Chess" },
  { firstName: "Natalia", lastName: "Sokolova", age: 26, job: "Marketer", hobby: "Dancing" }
]);

//2.1 Убедитесь, что в базе данных существует коллекция drinks.
db.drinks.find();

// 3. Самый дорогой напиток
db.drinks.find().sort({ price: -1 }).limit(1);

// 4. Топ 3 самых дешевых напитка
db.drinks.find().sort({ price: 1 }).limit(3);

// 5. Самый крепкий напиток
db.drinks.find().sort({ strength: -1 }).limit(1);

// 1. Найдите всех пользователей, у которых профессия (job) — "Developer", и выведите только их имена (firstName)
//  и увлечения (hobby).
// 2. Найдите всех пользователей, которые увлекаются либо "Football", либо "Dancing", и при этом их возраст (age)
//  строго больше 21 года.
// 3. Выведите топ-3 самых старых сотрудников. Результат должен быть отсортирован от самого старшего к младшему.
// 4. Найдите средний, минимальный и максимальный возраст среди всех пользователей в базе данных.
// 5. Сгруппируйте пользователей по их профессии (job), посчитайте количество человек в каждой профессии 
// и отсортируйте полученные группы от большего количества к меньшему.