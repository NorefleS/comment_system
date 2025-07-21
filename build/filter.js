class Filter {
    constructor(commentList, filterBtn, filterMenu, filterByDates, filterByRatings, filterByTime, filterByAnswers, commentContainer) {
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
        this.checkMark.src = "/svg/check.svg";
        this.checkMark.style.position = "absolute";
        this.checkMark.style.left = "8px";
    }
    showMenu() {
        this.filterBtn.addEventListener("click", () => {
            if (this.hiddenFilter) {
                this.hiddenFilter = false;
                this.filterMenu.style.display = "block";
            }
            else {
                this.hiddenFilter = true;
                this.filterMenu.style.display = "none";
            }
        });
    }
    sorting() {
        const arrow = document.querySelector(".filterArrow");
        arrow.addEventListener("click", () => {
            if (arrow.classList.contains("arrowNormal")) {
                arrow.src = "/svg/arrowReverse.svg";
                arrow.classList.remove("arrowNormal");
                arrow.classList.add("arrowReverse");
            }
            else if (arrow.classList.contains("arrowReverse")) {
                arrow.src = "/svg/arrow.svg";
                arrow.classList.remove("arrowReverse");
                arrow.classList.add("arrowNormal");
            }
        });
        this.filterMenu.addEventListener("click", (event) => {
            const target = event.target;
            const filterByDates = target.closest(".filterByDates");
            const filterByRatings = target.closest(".filterByRatings");
            const filterByTime = target.closest(".filterByTime");
            const filterByAnswers = target.closest(".filterByAnswers");
            const comments = Array.prototype.slice.call(this.commentContainer);
            if (filterByDates) {
                const filterSpanDate = filterByDates.querySelector(".filter__span");
                filterByDates.insertBefore(this.checkMark, filterSpanDate);
                if (arrow.classList.contains("arrowReverse")) {
                    const commentSorted = comments.sort(function (dateA, dateB) {
                        dateA = dateA.querySelector(".date").textContent.split("").reverse().join("");
                        dateB = dateB.querySelector(".date").textContent.split("").reverse().join("");
                        return dateA - dateB;
                    });
                    this.commentList.innerHTML = "";
                    commentSorted.forEach(comment => {
                        this.commentList.appendChild(comment);
                    });
                }
                else if (arrow.classList.contains("arrowNormal")) {
                    const commentSorted = comments.sort(function (dateA, dateB) {
                        dateA = dateA.querySelector(".date").textContent.split("").reverse().join("");
                        dateB = dateB.querySelector(".date").textContent.split("").reverse().join("");
                        return dateB - dateA;
                    });
                    this.commentList.innerHTML = "";
                    commentSorted.forEach(comment => {
                        this.commentList.appendChild(comment);
                    });
                }
            }
            else if (filterByRatings) {
                const filterSpanRatings = filterByRatings.querySelector(".filter__span");
                filterByRatings.insertBefore(this.checkMark, filterSpanRatings);
                if (arrow.classList.contains("arrowReverse")) {
                    const commentSorted = comments.sort(function (ratingA, ratingB) {
                        ratingA = parseInt(ratingA.querySelector(".ratingNumber").textContent);
                        ratingB = parseInt(ratingB.querySelector(".ratingNumber").textContent);
                        return ratingA - ratingB;
                    });
                    this.commentList.innerHTML = "";
                    commentSorted.forEach(comment => {
                        this.commentList.appendChild(comment);
                    });
                }
                else if (arrow.classList.contains("arrowNormal")) {
                    const commentSorted = comments.sort(function (ratingA, ratingB) {
                        ratingA = parseInt(ratingA.querySelector(".ratingNumber").textContent);
                        ratingB = parseInt(ratingB.querySelector(".ratingNumber").textContent);
                        return ratingB - ratingA;
                    });
                    this.commentList.innerHTML = "";
                    commentSorted.forEach(comment => {
                        this.commentList.appendChild(comment);
                    });
                }
            }
            else if (filterByTime) {
                const filterSpanTime = filterByTime.querySelector(".filter__span");
                filterByTime.insertBefore(this.checkMark, filterSpanTime);
                if (arrow.classList.contains("arrowReverse")) {
                    const commentSorted = comments.sort(function (timeA, timeB) {
                        timeA = parseInt(timeA.querySelector(".time").textContent);
                        timeB = parseInt(timeB.querySelector(".time").textContent);
                        return timeA - timeB;
                    });
                    this.commentList.innerHTML = "";
                    commentSorted.forEach(comment => {
                        this.commentList.appendChild(comment);
                    });
                }
                else if (arrow.classList.contains("arrowNormal")) {
                    const commentSorted = comments.sort(function (timeA, timeB) {
                        timeA = parseInt(timeA.querySelector(".time").textContent);
                        timeB = parseInt(timeB.querySelector(".time").textContent);
                        return timeB - timeA;
                    });
                    this.commentList.innerHTML = "";
                    commentSorted.forEach(comment => {
                        this.commentList.appendChild(comment);
                    });
                }
            }
            else if (filterByAnswers) {
                const filterSpanAnswers = filterByAnswers.querySelector(".filter__span");
                filterByAnswers.insertBefore(this.checkMark, filterSpanAnswers);
                if (arrow.classList.contains("arrowReverse")) {
                    const commentSorted = comments.sort(function (answerCountA, answerCountB) {
                        answerCountA = answerCountA.querySelector(".answersBlock").childElementCount;
                        answerCountB = answerCountB.querySelector(".answersBlock").childElementCount;
                        return answerCountA - answerCountB;
                    });
                    this.commentList.innerHTML = "";
                    commentSorted.forEach(comment => {
                        this.commentList.appendChild(comment);
                    });
                }
                else if (arrow.classList.contains("arrowNormal")) {
                    const commentSorted = comments.sort(function (answerCountA, answerCountB) {
                        answerCountA = answerCountA.querySelector(".answersBlock").childElementCount;
                        answerCountB = answerCountB.querySelector(".answersBlock").childElementCount;
                        return answerCountB - answerCountA;
                    });
                    this.commentList.innerHTML = "";
                    commentSorted.forEach(comment => {
                        this.commentList.appendChild(comment);
                    });
                }
            }
        });
    }
}
export default Filter;
