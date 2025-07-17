"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Favourite = /** @class */ (function () {
    function Favourite(commentBlock, favouriteMenuBtn, comment) {
        this.commentBlock = commentBlock;
        this.favouriteMenuBtn = favouriteMenuBtn;
        this.comment = comment;
    }
    Favourite.prototype.addToFavourite = function () {
        this.commentBlock.addEventListener('click', function (event) {
            var target = event.target;
            if (target.closest(".favouriteBtn") && target.closest(".favouriteBtn").classList.contains("heartAdded")) {
                target.closest(".commentBlock__commentaire").classList.remove("favourited");
                target.closest(".commentBlock__commentaire").classList.add("nofavourited");
                target.closest(".favouriteBtn").classList.remove("heartAdded");
                target.closest(".favouriteBtn").classList.add("heartNoAdded");
                target.closest(".favouriteBtn").querySelector(".answerBlock__span-favourite").innerHTML = "В избранное";
                target.closest(".favouriteBtn").querySelector(".answerBlock__img-favourite").src = "./svg/nofavourite.svg";
            }
            else if (target.closest(".favouriteBtn") && target.closest(".favouriteBtn").classList.contains("heartNoAdded")) {
                target.closest(".commentBlock__commentaire").classList.remove("nofavourited");
                target.closest(".commentBlock__commentaire").classList.add("favourited");
                target.closest(".favouriteBtn").classList.remove("heartNoAdded");
                target.closest(".favouriteBtn").classList.add("heartAdded");
                target.closest(".favouriteBtn").querySelector(".answerBlock__span-favourite").innerHTML = "В избранном";
                target.closest(".favouriteBtn").querySelector(".answerBlock__img-favourite").src = "./svg/favourite.svg";
            }
        });
    };
    Favourite.prototype.showFavourite = function () {
        var _this = this;
        this.commentBlock.addEventListener('click', function (event) {
            var target = event.target;
            if (target.closest(".favouriteMenuBtn")) {
                for (var i = 0; i < _this.comment.length; i++) {
                    if (_this.comment[i].classList.contains("nofavourited")) {
                        _this.comment[i].style.display = "none";
                    }
                    else if (_this.comment[i].classList.contains("favourited")) {
                        _this.comment[i].style.display = "flex";
                    }
                }
            }
        });
    };
    return Favourite;
}());
exports.default = Favourite;
