const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const imgList = images
  .map((item) => {
    let img = "";
    img += `<li class="list__item"><img width="100%" height="100%" src="${item.url}" alt="${item.alt}"></img></li>`;
    return img;
  })
  .join("");

list.insertAdjacentHTML("afterbegin", imgList);
const liItems = list.querySelectorAll("li");

list.style.listStyleType = "none";
list.style.display = "flex";
list.style.justifyContent = "center";
list.style.columnGap = "30px";

Array.from(liItems).map(
  (item) => (item.style.width = "calc((100% - 90px) / 3)")
);
