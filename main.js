const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownlinks = document.querySelectorAll(".dropdown__link");
const shopbody = document.querySelector(".shop__body");

dropdown.addEventListener("click", () => {
  dropdownList.classList.toggle("active");
});

dropdownlinks.forEach((link) => {
  link.addEventListener("click", () => {
    shopbody.innerHTML = "";
    if (link.textContent == "COFFEE") {
      cards.forEach((element, n) => {
        paintShopItem(n, element.img);
      });
    } else {
      cards.forEach((element, n) => {
        if (element.data == link.textContent) {
          paintShopItem(n, element.img);
        }
      });
    }
  });
});

function paintShopItem(n, srcImg) {
  // создаем элементы "shop__item"
  let shopitem = document.createElement("div");
  let img = document.createElement("div");
  let name = document.createElement("h3");
  let price = document.createElement("p");

  // формируем содержимое
  name.textContent = cards[n].name;
  price.textContent = cards[n].price;

  // задаем им классы и стили
  shopitem.classList.add("shop__item");
  img.classList.add("shop__img");
  img.style.backgroundImage = `url(${srcImg})`;

  // добавляем элементы в "shop__item"
  shopbody.append(shopitem);
  shopitem.append(img);
  shopitem.append(name);
  shopitem.append(price);

  return {
    img,
    name,
    price,
    shopitem,
  };
}

const cards = [
  {
    id: 01,
    name: "Ethyiopia midle cofee 100g",
    img: "img/s6-f1.png",
    price: "18$",
    data: "ETHIOPIA",
  },
  {
    id: 02,
    name: "Ethyiopia hard cofee 100g",
    img: "img/s6-f1.png",
    price: "17$",
    data: "ETHIOPIA",
  },
  {
    id: 03,
    name: "Ethyiopia easy cofee 100g",
    img: "img/s6-f1.png",
    price: "11$",
    data: "ETHIOPIA",
  },
  {
    id: 04,
    name: "Ethyiopia normal cofee 100g",
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
