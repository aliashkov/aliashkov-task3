class HashStorage {

    constructor() {
        this.item = {};
    }

    addValue(key, value) {
        this.item[key] = value;
    }

    getValue(key) {
        if (key in this.item)
            return this.item[key];
        else
            return undefined;
    }

    deleteValue(key) {
        if (key in this.item) 
            return delete this.item[key];
        else 
            return false;
    }

    getKeys() {
        return Object.keys(this.item);
    }
}

function clearText() {
    document.querySelector('#title').innerHTML = ``;
    document.querySelector('#ingredients').innerHTML = ``;
    document.querySelector('#recipe').innerHTML = ``;
}

const coctailsStorage = new HashStorage();
coctailsStorage.addValue('Маргарита', { name : "Маргарита" , isAlcohol : true , 
                                        ingredients : "Водка Finlandia 50мл Кофейный ликер 25мл Лед в кубиках 120 г " , 
                                        recipt : "Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой."});
coctailsStorage.addValue('Пеликан', { name : "Пеликан" , isAlcohol : true , 
                                      ingredients : "Гренадин Monin 10мл Клубничный сироп Monin 10мл Персиковый сок 150мл Лимонный сок 15мл Банан 110г Клубника 50г Дробленый лед 60г" , 
                                      recipt : "Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке."});

let add = document.getElementById('addCoctail');
add.addEventListener('click', () => {
    let name = prompt('Введите название напитка');
    let isAlcohol = confirm("Напиток алкогольный?");
    let ingredients = prompt("Введите все ингредиенты для данного напитка");
    let recipt = prompt("Введите рецепт для приготовления данного напитка");
    coctailsStorage.addValue(name, { name, isAlcohol, ingredients, recipt });
    alert("Коктейль был успешно добавлен");
    clearText();
});

let get = document.getElementById('getCoctail');
get.addEventListener('click', () => {
    let name = prompt('Введите название напитка');
    let result = coctailsStorage.getValue(name);
    if (result != undefined) {
        document.querySelector('#title').innerHTML = `Коктейль ${coctailsStorage.getValue(name).name} (алкогольный: ${coctailsStorage.getValue(name).isAlcohol} )`;
        document.querySelector('#ingredients').innerHTML = `Необходимые ингредиенты : ${coctailsStorage.getValue(name).ingredients}`;
        document.querySelector('#recipe').innerHTML = `Рецепт : ${coctailsStorage.getValue(name).recipt}`;
    }
    else {
        clearText();
        document.querySelector('#title').innerHTML = `Данный коктейль отсутсвует в данном списке`;
    }
});

let remove = document.getElementById('deleteCoctail');
remove.addEventListener('click', () => {
    let name = prompt('Введите название напитка, которое вы хотите удалить');
    let result = coctailsStorage.deleteValue(name);
    if (result) {
        clearText();
        document.querySelector('#title').innerHTML = `Данный коктейль был успешно удален`;
    }
    else {
        clearText();
        document.querySelector('#title').innerHTML = `Данный коктейль отсутсвует в данном списке`;
    }
});

let getAll = document.getElementById('listCoctails');
getAll.addEventListener('click', () => {
    if (Object.keys(coctailsStorage.item).length > 0) {
        clearText();
        document.querySelector('#title').innerHTML = `Список коктейлей : ${coctailsStorage.getKeys()}`;
    }
    else {
        clearText();
        document.querySelector('#title').innerHTML = `В данный момент не содержится ни одного рецепта`;
    }
});


