"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("./filter");
var answer_1 = require("./answer");
var favouriteMenu_1 = require("./favouriteMenu");
var form_1 = require("./form");
var rating_1 = require("./rating");
var commentBlock = document.querySelector(".commentBlock");
var commentList = document.querySelector(".commentList");
var commentContainer = document.getElementsByClassName("commentContainer");
var comment = document.getElementsByClassName("commentBlock__commentaire");
// Переменные элементов кнопок фильтра и избранного
var filterBtn = document.querySelector(".filterBtn");
var filterMenu = document.querySelector(".filter");
var filterByDates = document.querySelector(".filterByDates");
var filterByRatings = document.querySelector(".filterByRatings");
var filterByTime = document.querySelector(".filterByTime");
var filterByAnswers = document.querySelector(".filterByAnswers");
var favouriteMenuBtn = document.querySelector(".favouriteMenuBtn");
// Переменные элементов формы
var input = document.querySelector(".form__input");
var symbols = document.querySelector(".form__symbols");
var formBtn = document.querySelector(".form__button");
var spanMaxlength = document.querySelector(".form__maxlength");
// Создание объектов
var form = new form_1.default(input, symbols, formBtn, spanMaxlength, commentList);
var rating = new rating_1.default(commentList);
var filter = new filter_1.default(commentList, filterBtn, filterMenu, filterByDates, filterByRatings, filterByTime, filterByAnswers, commentContainer);
var answer = new answer_1.default(commentBlock, commentList);
var favouriteMenu = new favouriteMenu_1.default(commentBlock, favouriteMenuBtn, comment);
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
