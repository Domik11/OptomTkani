// Генерация случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



const photos = [
	"https://i.ibb.co/R7JQPQq/1.png",
	"https://i.ibb.co/60LssQP/2.png",
	"https://i.ibb.co/WV2VRqp/image.png",
	"https://i.ibb.co/n3HKGzQ/1.png",
	"https://i.ibb.co/QD1BfNC/2.png",
	"https://i.ibb.co/Cztx1gM/3.png",
	"https://i.ibb.co/sFvMPx4/4.png",
	"https://i.ibb.co/QjB0X7y/5.png",
	"https://i.ibb.co/R7JQPQq/1.png",
	"https://i.ibb.co/6Bj2fyN/image.png",
	"https://i.ibb.co/zSd7ZtQ/8.png",
	"https://i.ibb.co/60LssQP/2.png",
	"https://i.ibb.co/HgXb08W/10.png",
	"https://i.ibb.co/chwkZTW/11.png",
	"https://i.ibb.co/P4vWWwJ/12.png",
	"https://i.ibb.co/S7N1GzC/13.png",
	"https://i.ibb.co/bX6Jyvg/14.png",
	"https://i.ibb.co/GddTwXd/15.png",
	"https://i.ibb.co/5BYvZN4/16.png",
	"https://i.ibb.co/dkqWf61/17.png",
	"https://i.ibb.co/3Bw16rB/18.png",
	"https://i.ibb.co/kSFD5Bf/19.png",
	"https://i.ibb.co/54gjNv3/20.png",
	"https://i.ibb.co/zxZLdcj/21.png",
	"https://i.ibb.co/PTmjWJw/22.png",
	"https://i.ibb.co/5nnL8rR/23.png",
	"https://i.ibb.co/qJs2vhs/24.png",
	"https://i.ibb.co/P6RqJDr/25.png",
	"https://i.ibb.co/0ckjKcR/26.png",
	"https://i.ibb.co/WxsT2SZ/27.png",
	"https://i.ibb.co/Cztx1gM/3.png",
]

// Функция для создания рандомного продукта
function createRandomProduct(id) {
	const categories = [
		"Хлопок",
		"Шелк",
		"Лен",
		"Шерсть",
		"Сатин",
		"Вельвет",
		"Джинс",
		"Фланель",
		"Полиэстер",
		"Шифон",
		"Кружево",
		"Тафта",
		"Бархат",
		// "Органза",
		// "Жаккард",
		// "Бязь",
		// "Трикотаж",
		// "Кашемир",
		// "Хлопковая смесь",
		// "Деним",
		// "Микровельвет",
		// "Саржа",
		// "Тюль",
		// "Креп-шифон",
		// "Канва",
		// "Фланелевый флис",
		// "Полиамид",
		// "Сатинат",
		// "Бродерия",
		// "Фланелевая смесь",
		// "Шотландка",
		// "Жоржет",
		// "Поплин",
		// "Штапель",
		// "Жаккардовый шелк",
		// "Поливискоза",
		// "Бархат-шенилл",
		// "Матовый шелк",
		// "Льняная смесь",
		// "Хлопчатобумажная смесь",
		// "Микрофибра",
		// "Софт",
		// "Тафтинг",
		// "Брюссельский кружево",
	  ];
	const colors = ['Синий', 'Красный', 'Зеленый', 'Желтый'];
	const countries = ['Турция', 'Китай', 'Италия', 'США'];
	const compoundOptions = ['Хлопок', 'Флис', 'Шерсть', 'Лен'];

	const product = {
		id,
		title: `Товар ${id}`,
		cost: getRandomNumber(100, 1000),
		purchaseCounter: getRandomNumber(1, 100),
		rating: getRandomNumber(1, 5),
		discount: Math.random() < 0.8 ? 0 : getRandomNumber(1, 50) / 100,
		category: categories[getRandomNumber(0, categories.length - 1)],
		popularityCounter: getRandomNumber(1, 1000),
		availableOnOrder: Math.random() < 0.5,
		photos: photos[getRandomNumber(0, 30)],
		country: countries[getRandomNumber(0, countries.length - 1)],
		color: colors[getRandomNumber(0, colors.length - 1)],
		article: `F${id}-01XY${getRandomNumber(10, 99)}`,
		increase: getRandomNumber(120, 180),
		type: 'Флис',
		lengthPerRoll: getRandomNumber(50, 100),
		textileWidth: getRandomNumber(200, 300),
		compound: {
			[compoundOptions[getRandomNumber(0, compoundOptions.length - 1)]]: '90',
		},
	};

	return product;
}

// Создание массива с 1000 рандомных продуктов
const products = [];
for (let i = 1; i <= 300; i++) {
	const product = createRandomProduct(i);
	products.push(product);
}

export default products;
