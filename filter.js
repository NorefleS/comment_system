"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filter = /** @class */ (function () {
    function Filter(commentList, filterBtn, filterMenu, filterByDates, filterByRatings, filterByTime, filterByAnswers, commentContainer) {
        this.commentList = commentList;
        this.filterBtn = filterBtn;
        this.filterMenu = filterMenu;
        this.filterByDates = filterByDates;
        this.filterByRatings = filterByRatings;
        this.filterByTime = filterByTime;
        this.filterByAnswers = filterByAnswers;
        this.commentContainer = commentContainer;
        this.hiddenFilter = true;
        this.checkMark = document.createElement("img");
        this.checkMark.classList.add("filter__checkImage");
        this.checkMark.src = "./svg/check.svg";
        this.checkMark.style.position = "absolute";
        this.checkMark.style.left = "8px";
    }
    Filter.prototype.showMenu = function () {
        var _this = this;
        this.filterBtn.addEventListener("click", function () {
            if (_this.hiddenFilter) {
                _this.hiddenFilter = false;
                _this.filterMenu.style.display = "block";
            }
            else {
                _this.hiddenFilter = true;
                _this.filterMenu.style.display = "none";
            }
        });
    };
    Filter.prototype.sorting = function () {
        var _this = this;
        var arrow = document.querySelector(".filterArrow");
        arrow.addEventListener("click", function () {
            if (arrow.classList.contains("arrowNormal")) {
                arrow.src = "./svg/arrowReverse.svg";
                arrow.classList.remove("arrowNormal");
                arrow.classList.add("arrowReverse");
            }
            else if (arrow.classList.contains("arrowReverse")) {
                arrow.src = "./svg/arrow.svg";
                arrow.classList.remove("arrowReverse");
                arrow.classList.add("arrowNormal");
            }
        });
        this.filterMenu.addEventListener("click", function (event) {
            var target = event.target;
            var filterByDates = target.closest(".filterByDates");
            var filterByRatings = target.closest(".filterByRatings");
            var filterByTime = target.closest(".filterByTime");
            var filterByAnswers = target.closest(".filterByAnswers");
            var comments = Array.prototype.slice.call(_this.commentContainer);
            if (filterByDates) {
                var filterSpanDate = filterByDates.querySelector(".filter__span");
                filterByDates.insertBefore(_this.checkMark, filterSpanDate);
                if (arrow.classList.contains("arrowReverse")) {
                    var commentSorted = comments.sort(function (dateA, dateB) {
                        dateA = dateA.querySelector(".date").textContent.split("").reverse().join("");
                        dateB = dateB.querySelector(".date").textContent.split("").reverse().join("");
                        return dateA - dateB;
                    });
                    _this.commentList.innerHTML = "";
                    commentSorted.forEach(function (comment) {
                        _this.commentList.appendChild(comment);
                    });
                }
                else if (arrow.classList.contains("arrowNormal")) {
                    var commentSorted = comments.sort(function (dateA, dateB) {
                        dateA = dateA.querySelector(".date").textContent.split("").reverse().join("");
                        dateB = dateB.querySelector(".date").textContent.split("").reverse().join("");
                        return dateB - dateA;
                    });
                    _this.commentList.innerHTML = "";
                    commentSorted.forEach(function (comment) {
                        _this.commentList.appendChild(comment);
                    });
                }
            }
            else if (filterByRatings) {
                var filterSpanRatings = filterByRatings.querySelector(".filter__span");
                filterByRatings.insertBefore(_this.checkMark, filterSpanRatings);
                if (arrow.classList.contains("arrowReverse")) {
                    var commentSorted = comments.sort(function (ratingA, ratingB) {
                        ratingA = parseInt(ratingA.querySelector(".ratingNumber").textContent);
                        ratingB = parseInt(ratingB.querySelector(".ratingNumber").textContent);
                        return ratingA - ratingB;
                    });
                    _this.commentList.innerHTML = "";
                    commentSorted.forEach(function (comment) {
                        _this.commentList.appendChild(comment);
                    });
                }
                else if (arrow.classList.contains("arrowNormal")) {
                    var commentSorted = comments.sort(function (ratingA, ratingB) {
                        ratingA = parseInt(ratingA.querySelector(".ratingNumber").textContent);
                        ratingB = parseInt(ratingB.querySelector(".ratingNumber").textContent);
                        return ratingB - ratingA;
                    });
                    _this.commentList.innerHTML = "";
                    commentSorted.forEach(function (comment) {
                        _this.commentList.appendChild(comment);
                    });
                }
            }
            else if (filterByTime) {
                var filterSpanTime = filterByTime.querySelector(".filter__span");
                filterByTime.insertBefore(_this.checkMark, filterSpanTime);
                if (arrow.classList.contains("arrowReverse")) {
                    var commentSorted = comments.sort(function (timeA, timeB) {
                        timeA = parseInt(timeA.querySelector(".time").textContent);
                        timeB = parseInt(timeB.querySelector(".time").textContent);
                        return timeA - timeB;
                    });
                    _this.commentList.innerHTML = "";
                    commentSorted.forEach(function (comment) {
                        _this.commentList.appendChild(comment);
                    });
                }
                else if (arrow.classList.contains("arrowNormal")) {
                    var commentSorted = comments.sort(function (timeA, timeB) {
                        timeA = parseInt(timeA.querySelector(".time").textContent);
                        timeB = parseInt(timeB.querySelector(".time").textContent);
                        return timeB - timeA;
                    });
                    _this.commentList.innerHTML = "";
                    commentSorted.forEach(function (comment) {
                        _this.commentList.appendChild(comment);
                    });
                }
            }
            else if (filterByAnswers) {
                var filterSpanAnswers = filterByAnswers.querySelector(".filter__span");
                filterByAnswers.insertBefore(_this.checkMark, filterSpanAnswers);
                if (arrow.classList.contains("arrowReverse")) {
                    var commentSorted = comments.sort(function (answerCountA, answerCountB) {
                        answerCountA = answerCountA.querySelector(".answersBlock").childElementCount;
                        answerCountB = answerCountB.querySelector(".answersBlock").childElementCount;
                        return answerCountA - answerCountB;
                    });
                    _this.commentList.innerHTML = "";
                    commentSorted.forEach(function (comment) {
                        _this.commentList.appendChild(comment);
                    });
                }
                else if (arrow.classList.contains("arrowNormal")) {
                    var commentSorted = comments.sort(function (answerCountA, answerCountB) {
                        answerCountA = answerCountA.querySelector(".answersBlock").childElementCount;
                        answerCountB = answerCountB.querySelector(".answersBlock").childElementCount;
                        return answerCountB - answerCountA;
                    });
                    _this.commentList.innerHTML = "";
                    commentSorted.forEach(function (comment) {
                        _this.commentList.appendChild(comment);
                    });
                }
            }
        });
    };
    return Filter;
}());
exports.default = Filter;
