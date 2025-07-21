import Filter from "./filter.js";
import Answer from "./answer.js";
import Favourite from "./favouriteMenu.js";
import Form from "./form.js";
import Rating from "./rating.js"

const commentBlock = document.querySelector(".commentBlock") as HTMLElement;
const commentList = document.querySelector(".commentList") as HTMLElement;
const commentContainer = document.getElementsByClassName("commentContainer") as HTMLCollectionOf<HTMLElement>;
const comment = document.getElementsByClassName("commentBlock__commentaire") as HTMLCollectionOf<HTMLElement>;

// Переменные элементов кнопок фильтра и избранного
const filterBtn = document.querySelector(".filterBtn") as HTMLElement;
const filterMenu = document.querySelector(".filter") as HTMLElement;
const filterByDates = document.querySelector(".filterByDates") as HTMLElement;
const filterByRatings = document.querySelector(".filterByRatings") as HTMLElement;
const filterByTime = document.querySelector(".filterByTime") as HTMLElement;
const filterByAnswers = document.querySelector(".filterByAnswers") as HTMLElement;
const favouriteMenuBtn = document.querySelector(".favouriteMenuBtn") as HTMLElement;

// Переменные элементов формы
const input = document.querySelector(".form__input") as HTMLInputElement;
const symbols = document.querySelector(".form__symbols") as HTMLElement;
const formBtn = document.querySelector(".form__button") as HTMLElement;
const spanMaxlength = document.querySelector(".form__maxlength") as HTMLElement;

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

    commentList.innerHTML = localStorage.getItem("commentList") as string;
}

mainBuild();