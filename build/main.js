import Filter from "./filter.js";
import Answer from "./answer.js";
import Favourite from "./favouriteMenu.js";
import Form from "./form.js";
import Rating from "./rating.js";
const commentBlock = document.querySelector(".commentBlock");
const commentList = document.querySelector(".commentList");
const commentContainer = document.getElementsByClassName("commentContainer");
const comment = document.getElementsByClassName("commentBlock__commentaire");
// Переменные элементов кнопок фильтра и избранного
const filterBtn = document.querySelector(".filterBtn");
const filterMenu = document.querySelector(".filter");
const filterByDates = document.querySelector(".filterByDates");
const filterByRatings = document.querySelector(".filterByRatings");
const filterByTime = document.querySelector(".filterByTime");
const filterByAnswers = document.querySelector(".filterByAnswers");
const favouriteMenuBtn = document.querySelector(".favouriteMenuBtn");
// Переменные элементов формы
const input = document.querySelector(".form__input");
const symbols = document.querySelector(".form__symbols");
const formBtn = document.querySelector(".form__button");
const spanMaxlength = document.querySelector(".form__maxlength");
// Создание объектов
const form = new Form(input, symbols, formBtn, spanMaxlength, commentList);
const rating = new Rating(commentList);
const filter = new Filter(commentList, filterBtn, filterMenu, filterByDates, filterByRatings, filterByTime, filterByAnswers, commentContainer);
const answer = new Answer(commentBlock, commentList);
const favouriteMenu = new Favourite(commentBlock, favouriteMenuBtn, comment);
function mainBuild() {
    filter.showMenu();
    filter.sorting();
    answer.answerAdd();
    favouriteMenu.addToFavourite();
    favouriteMenu.showFavourite();
    rating.ratingChange();
    form.maxlengthInput();
    commentList.innerHTML = localStorage.getItem("commentList");
}
mainBuild();
