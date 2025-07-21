"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Answer = /** @class */ (function () {
    function Answer(commentBlock, commentList) {
        this.commentBlock = commentBlock;
        this.commentList = commentList;
    }
    Answer.prototype.answerAdd = function () {
        var _this = this;
        this.commentBlock.addEventListener('click', function (event) {
            var replyButton = event.target.closest(".answerBtn");
            var answerInputBtn = event.target.closest(".answerInputBtn");
            if (answerInputBtn) {
                _this.sendAnswer(_this.existingInput, answerInputBtn);
                localStorage.setItem("commentList", _this.commentList.innerHTML);
            }
            if (!replyButton)
                return;
            if (_this.commentBlock.querySelector(".answerInput")) {
                _this.existingInput.closest(".answerToUser").remove();
                return;
            }
            var currentComment = replyButton.closest(".mainComment");
            var answersBlock = currentComment.nextElementSibling;
            var replyFormHTML = "<div class=\"answerToUser mainComment commentBlock__commentaire nofavourited\">\n                                        <img class=\"form__avatar\" src=\"./avatars/myavatar.svg\" alt=\"\u0410\u0432\u0430\u0442\u0430\u0440\">\n                                        <div class=\"commentaire__name-text\">\n                                            <div class=\"commentaire__name-data\">\n                                                <span class=\"form__name\">\u041C\u0430\u043A\u0441\u0438\u043C \u0410\u0432\u0434\u0435\u0435\u043D\u043A\u043E</span>\n                                                <img src=\"./svg/answer.svg\" alt=\"\u041E\u0442\u0432\u0435\u0442\">\n                                                <span class=\"answerBlock__span\">".concat(currentComment.querySelector(".form__name").textContent, "</span>\n                                            </div>\n                                            <p class=\"answerToUser__text\">\n                                                <textarea class=\"form__input answerInput\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043E\u0442\u0432\u0435\u0442...\" rows=\"1\"></textarea>\n                                                <button class=\"answerInputBtn\" type=\"button\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n                                            </p>\n                                        </div>\n                                    </div>");
            answersBlock.insertAdjacentHTML("beforeend", replyFormHTML);
            answersBlock.querySelector(".answerInput").focus();
            _this.existingInput = answersBlock.querySelector(".answerInput");
            var inputBtn = answersBlock.querySelector(".answerInputBtn");
            _this.existingInput.addEventListener("keyup", function () {
                if (_this.existingInput.value.length > 0 && _this.existingInput.value.length <= 1000) {
                    inputBtn.style.backgroundColor = "#abd873";
                    inputBtn.style.opacity = "1";
                    inputBtn.style.cursor = "pointer";
                }
                else {
                    inputBtn.style.backgroundColor = "#a1a1a1";
                    inputBtn.style.opacity = "0.4";
                    inputBtn.style.cursor = "default";
                }
            });
            _this.existingInput.addEventListener("input", function () {
                _this.existingInput.style.height = "auto";
                _this.existingInput.style.height = _this.existingInput.scrollHeight + "px";
            });
        });
    };
    Answer.prototype.sendAnswer = function (input, answerInputBtn) {
        var date = new Date();
        if (input.value.length > 0 && input.value.length <= 1000) {
            var answerToUser = answerInputBtn.closest(".answerToUser");
            var commentContainer = answerToUser.closest(".commentContainer");
            var messege = "<img class=\"form__avatar\" src=\"./avatars/myavatar.svg\" alt=\"\u041C\u043E\u0439 \u0430\u0432\u0430\u0442\u0430\u0440\">\n                                            \n                            <div class=\"commentaire__name-text\">\n                                <div class=\"commentaire__name-date\">\n                                    <span class=\"form__name\">\u041C\u0430\u043A\u0441\u0438\u043C \u0410\u0432\u0434\u0435\u0435\u043D\u043A\u043E</span>\n                                    <img src=\"./svg/answer.svg\" alt=\"\u041E\u0442\u0432\u0435\u0442\">\n                                    <span class=\"answerBlock__span\">".concat(commentContainer.querySelector(".form__name").textContent, "</span>\n\n                                    <div class=\"form__dateBlock\">\n                                        <span class=\"form__date date\">").concat(date.getDate(), ".").concat(('0' + (date.getMonth() + 1)).slice(-2), "</span>\n                                        <span class=\"form__date time\">").concat(date.getHours(), ":").concat(('0' + date.getMinutes()).slice(-2), "</span>\n                                    </div>\n                                </div>\n\n                                <p class=\"commentaire__text\">\n                                    ").concat(input.value, "\n                                </p>\n\n                                <div class=\"commentaire__answerBlock\">\n                                    <button type=\"button\" class=\"answerBlock__button favouriteBtn heartNoAdded\">\n                                        <img class=\"answerBlock__img-favourite\" src=\"./svg/nofavourite.svg\" alt=\"\">\n                                        <span class=\"answerBlock__span answerBlock__span-favourite\">\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</span>\n                                    </button>\n                                                    \n                                    <div class=\"ratingBlock unliked undisliked\">\n                                        <button class=\"ratingBtn dislikeBtn\"></button>\n                                        <span class=\"ratingNumber\">0</span>\n                                        <button class=\"ratingBtn likeBtn\"></button>\n                                    </div>\n                                </div>\n                            </div>");
            answerToUser.innerHTML = messege;
        }
    };
    return Answer;
}());
exports.default = Answer;
