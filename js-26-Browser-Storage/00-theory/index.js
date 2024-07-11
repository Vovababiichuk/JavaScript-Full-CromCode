//! В Local Storage сохраняются только строки. Используем JSON.stringify для сереилизации обьекта.

//! getLocalStorageData
localStorage.clear();
// localStorage.setItem('hobbies', [1, 2, 3]); // 1,2,3
// localStorage.setItem('hobbies', { name: 'Tom' }); // [object Object]

// Сереилизация обьекта. JSON.stringify - приводит обьект в формат JSON и делает из него строку.
// JSON - этим форматом удобно обмениватся данными между клиентом и сервером.
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
console.log(localStorage.getItem('hobbies')); // {"name":"Tom"}

//! Чтобы получить ЛИТЕРАЛ обьекта нужно JSON.parse
console.log(JSON.parse(localStorage.getItem('hobbies'))); // {name: 'Tom'}

//! ТАК ОБРАЩАТСЯ (через точку) НЕ СТОИТ!!!
//! ТАК ОБРАЩАТСЯ (через точку) НЕ СТОИТ!!!
//! ТАК ОБРАЩАТСЯ (через точку) НЕ СТОИТ!!!
// localStorage.hobbies

//! Сделаем ф-ю чтобы получить все даные в виде обьекта которые хранятся в LocalStorage
//! Сделаем ф-ю чтобы получить все даные в виде обьекта которые хранятся в LocalStorage
//! Обьект LocalStorage не итерируемый!!!

localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(34));

const getLocalStorageData = () => {
	// v1
	// for (let i = 0; i < localStorage.length; i += 1) {
	// 	localStorage.key(i);
	// }
	// v2
	// return Object.keys(localStorage)
	// return Object.values(localStorage)
	return Object.entries(localStorage).reduce((acc, [key, value]) => {
		let newValue;
		try {
			newValue = JSON.parse(value);
		} catch (e) {
			newValue = value;
		}
		return {
			...acc,
			[key]: newValue,
		}
	}, {});
}

console.log(getLocalStorageData());