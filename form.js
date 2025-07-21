"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Form = /** @class */ (function () {
    function Form(input, symbols, formBtn, spanMaxlength, commentList) {
        this.input = input;
        this.symbols = symbols;
        this.formBtn = formBtn;
        this.spanMaxlength = spanMaxlength;
        this.maxSymbols = 1000;
        this.commentList = commentList;
    }
    Form.prototype.defaultColorBtn = function () {
        this.formBtn.style.backgroundColor = "#a1a1a1";
        this.formBtn.style.opacity = "0.4";
        this.formBtn.style.cursor = "default";
    };
    Form.prototype.recolorBtn = function () {
        this.formBtn.style.backgroundColor = "#abd873";
        this.formBtn.style.opacity = "1";
        this.formBtn.style.cursor = "pointer";
    };
    Form.prototype.maxlengthInput = function () {
        var _this = this;
        this.input.addEventListener("keyup", function () {
            if (_this.input.value.length == 0) {
                _this.symbols.innerHTML = "Макс. 1000 символов";
                _this.defaultColorBtn();
            }
            else {
                _this.symbols.innerHTML = "".concat(_this.input.value.length, "/").concat(_this.maxSymbols);
            }
            if (_this.input.value.length <= _this.maxSymbols && _this.input.value.length > 0) {
                _this.symbols.style.color = "#000";
                _this.symbols.style.opacity = "0.4";
                _this.recolorBtn();
                _this.spanMaxlength.style.display = "none";
            }
        });
        this.input.addEventListener("input", function () {
            _this.input.style.height = "auto";
            _this.input.style.height = _this.input.scrollHeight + "px";
        });
        this.formBtn.addEventListener("click", function () {
            if (_this.input.value.length > 0 && _this.input.value.length <= _this.maxSymbols) {
                var inputMessege = _this.input.value;
                _this.sendComment(_this.input, inputMessege);
                localStorage.setItem("commentList", _this.commentList.innerHTML);
            }
            if (_this.input.value.length <= _this.maxSymbols) {
                _this.input.value = "";
                _this.symbols.innerHTML = "Макс. 1000 символов";
                _this.defaultColorBtn();
            }
            else {
                _this.symbols.style.color = "#f00";
                _this.symbols.style.opacity = "1";
                _this.defaultColorBtn();
                _this.spanMaxlength.style.display = "block";
            }
        });
    };
    Form.prototype.sendComment = function (input, inputMessege) {
        var date = new Date();
        var commentContainer = document.createElement("div");
        commentContainer.classList.add("commentContainer");
        var messege = "<div class=\"commentBlock__commentaire mainComment nofavourited\">\n                                <img class=\"form__avatar\" src=\"./avatars/myavatar.svg\" alt=\"\u041C\u043E\u0439 \u0430\u0432\u0430\u0442\u0430\u0440\">\n                                    \n                                <div class=\"commentaire__name-text\">\n                                    <div class=\"commentaire__name-date\">\n                                        <span class=\"form__name\">\u041C\u0430\u043A\u0441\u0438\u043C \u0410\u0432\u0434\u0435\u0435\u043D\u043A\u043E</span>\n                                            \n                                        <div class=\"form__dateBlock\">\n                                            <span class=\"form__date date\">".concat(date.getDate(), ".").concat(('0' + (date.getMonth() + 1)).slice(-2), "</span>\n                                            <span class=\"form__date time\">").concat(date.getHours(), ":").concat(('0' + date.getMinutes()).slice(-2), "</span>\n                                        </div>\n                                    </div>\n\n                                    <p class=\"commentaire__text\">\n                                        ").concat(inputMessege, "\n                                    </p>\n\n                                    <div class=\"commentaire__answerBlock\">\n                                        <button type=\"button\" class=\"answerBlock__button answerBtn\">\n                                            <img src=\"./svg/answer.svg\" alt=\"\">\n                                            <span class=\"answerBlock__span\">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</span>\n                                        </button>\n                                            \n                                        <button type=\"button\" class=\"answerBlock__button favouriteBtn heartNoAdded\">\n                                            <img class=\"answerBlock__img-favourite\" src=\"./svg/nofavourite.svg\" alt=\"\">\n                                            <span class=\"answerBlock__span answerBlock__span-favourite\">\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</span>\n                                        </button>\n                                            \n                                        <div class=\"ratingBlock unliked undisliked\">\n                                            <button class=\"ratingBtn dislikeBtn\"></button>\n                                            <span class=\"ratingNumber\">0</span>\n                                            <button class=\"ratingBtn likeBtn\"></button>\n                                        </div>\n                                    </div>\n                                </div>\n                        </div>\n                            \n                        <div class=\"answersBlock\"></div>");
        commentContainer.innerHTML = messege;
        input.style.height = "61px";
        this.commentList.appendChild(commentContainer);
    };
    return Form;
}());
exports.default = Form;
