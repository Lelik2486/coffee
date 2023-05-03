const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownlinks = document.querySelectorAll(".dropdown__link");
const shopbody = document.querySelector(".shop__body");
const searchbody = document.querySelector(".search__body");
const searchItem = document.querySelector(".search__item");
const searchItemList = document.querySelector(".search__item__list");
const searchForm = document.querySelector(".search__form");
const searchFormItem = document.querySelector(".search__form__item");
const searchInput = document.querySelector(".search__input");
const searcButton = document.querySelector(".search__button");
let timer;
// Выпадающее меню
dropdown.addEventListener("click", () => {
  dropdownList.classList.toggle("active");
});

// Выбор категории в выпадающем меню
dropdownlinks.forEach((link) => {
  link.addEventListener("click", () => {
    shopbody.innerHTML = "";
    if (link.textContent == "COFFEE") {
      paintCards(cards);
    } else {
      paintCards(searchCardsName(cards, link.textContent));
    }
  });
});

 
// Обработчик кнопки Поиск
searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if(!searchInput.value){
    return;
  }
  shopbody.innerHTML = "";
  paintCards(searchCardsName(cards, searchInput.value));
} );


searchInput.addEventListener("focus", () => {
  searchbody.style.display = 'block';
  searchInput.addEventListener("input", function(e) {
    e.preventDefault();
        // игнорим создание элемента если пользователь ничего не ввел
        if(!searchInput.value){
          return;
        }  
        searchItemList.innerHTML = "";
        if(timer){
          clearTimeout(timer);
        };
        timer=setTimeout(() => {
          writeSearchCards(searchCardsName(cards, searchInput.value));
          if(searchInput.value.length < 2){
            searchItemList.innerHTML = "";
          };
        }, 600);
  });
  clearTimeout(timer);
});

searchInput.addEventListener("blur", () => {
  if (timer){
    clearTimeout(timer);
  };
  timer = setTimeout(() => {
    searchbody.style.display = 'none';
    searchItemList.innerHTML = "";
  }, 300);
});
  
function writeSearchCards(arrSearch) {
  for (const card of arrSearch) {
    writeSearchItem(card);
  };
};

// функция отрисовки 1 карточки
function writeSearchItem(card) {
  // создаем элементы "shop__item"
  let searchItemElements = document.createElement("li");
  searchItemElements.classList.add('search__item__elements')
  let searchLink = document.createElement("a");
  searchLink.classList.add('search__link')
  // формируем содержимое
  searchLink.textContent = `${card.name}     ${card.price}`;
  
// обработчик клика выпадающего меню search
  searchLink.addEventListener("click", () => {
    shopbody.innerHTML = "";
    paintShopItem(card);
    searchInput.value = '';
    searchItemList.innerHTML = "";
  });

  // добавляем элементы в "shop__item"
  searchItemList.append(searchItemElements);
  searchItemElements.append(searchLink);

  return {
    searchLink,
    searchItemElements,
  };
};

// функция поиска по name в массиве карточек
function searchCardsName(cards, str) {
  const arrSearch = [];
  for (const card of cards) {
    if(card.name.toLowerCase().includes(str.toLowerCase())){
      arrSearch.push(card);
    };
  };
  return arrSearch;
};
// функция отрисовки массива карточек
function paintCards(arrSearch) {
  for (const card of arrSearch) {
    paintShopItem(card)
  }
};
// функция отрисовки 1 карточки
function paintShopItem(card) {

  // создаем элементы "shop__item"
  let shopItem = document.createElement("div");
  let img = document.createElement("div");
  let name = document.createElement("h3");
  let price = document.createElement("p");

  // формируем содержимое
  name.textContent = card.name;
  price.textContent = card.price;

  // задаем им классы и стили
  shopItem.classList.add("shop__item");
  img.classList.add("shop__img");
  img.style.backgroundImage = `url(${card.img})`;

  // добавляем элементы в "shop__item"
  shopbody.append(shopItem);
  shopItem.append(img);
  shopItem.append(name);
  shopItem.append(price);

  return {
    img,
    name,
    price,
    shopItem,
  };
};

const cards = [
  {
    id: 01,
    name: "Ethiopia midle cofee 100g",
    img: "img/s6-f1.png",
    price: "18$",
    data: "ETHIOPIA",
  },
  {
    id: 02,
    name: "Ethiopia hard cofee 100g",
    img: "img/s6-f1.png",
    price: "17$",
    data: "ETHIOPIA",
  },
  {
    id: 03,
    name: "Ethiopia easy cofee 100g",
    img: "img/s6-f1.png",
    price: "11$",
    data: "ETHIOPIA",
  },
  {
    id: 04,
    name: "Ethiopia normal cofee 100g",
    img: "img/s6-f1.png",
    price: "18$",
    data: "ETHIOPIA",
  },
  {
    id: 05,
    name: "Kenia hard cofee 90g",
    img: "img/s6-f2.png",
    price: "18$",
    data: "KENIA",
  },
  {
    id: 06,
    name: "Kenia normal cofee 100g",
    img: "img/s6-f2.png",
    price: "10$",
    data: "KENIA",
  },
  {
    id: 07,
    name: "Kenia midle cofee 90g",
    img: "img/s6-f2.png",
    price: "9$",
    data: "KENIA",
  },
  {
    id: 08,
    name: "Kenia easy cofee 90g",
    img: "img/s6-f2.png",
    price: "8$",
    data: "KENIA",
  },
  {
    id: 09,
    name: "Columbia easy cofee 110g",
    img: "img/s6-f3.png",
    price: "8$",
    data: "COLUMBIA",
  },
  {
    id: 10,
    name: "Columbia normal cofee 110g",
    img: "img/s6-f3.png",
    price: "8$",
    data: "COLUMBIA",
  },
  {
    id: 11,
    name: "Columbia hard cofee 110g",
    img: "img/s6-f3.png",
    price: "8$",
    data: "COLUMBIA",
  },
  {
    id: 12,
    name: "Columbia midle cofee 110g",
    img: "img/s6-f3.png",
    price: "8$",
    data: "COLUMBIA",
  },
  {
    id: 13,
    name: "Quatemala easy cofee 110g",
    img: "img/s6-f4.png",
    price: "22$",
    data: "QUATEMALA",
  },
  {
    id: 14,
    name: "Quatemala normal cofee 110g",
    img: "img/s6-f4.png",
    price: "9$",
    data: "QUATEMALA",
  },
  {
    id: 15,
    name: "Quatemala hard cofee 110g",
    img: "img/s6-f4.png",
    price: "18$",
    data: "QUATEMALA",
  },
  {
    id: 16,
    name: "Quatemala midle cofee 110g",
    img: "img/s6-f4.png",
    price: "28$",
    data: "QUATEMALA",
  },
];
