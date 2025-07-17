"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rating = /** @class */ (function () {
    function Rating(commentList) {
        this.commentList = commentList;
    }
    Rating.prototype.ratingChange = function () {
        this.commentList.addEventListener("click", function (event) {
            if (event.target.closest(".likeBtn")) {
                var ratingBlock = event.target.closest(".ratingBlock");
                var ratingNumber = ratingBlock.querySelector(".ratingNumber");
                var value = parseInt(ratingNumber.innerHTML);
                if (ratingBlock.classList.contains("unliked") && ratingBlock.classList.contains("undisliked")) {
                    ratingBlock.classList.remove("unliked");
                    ratingBlock.classList.add("liked");
                    value++;
                }
                else if (ratingBlock.classList.contains("liked") && ratingBlock.classList.contains("undisliked")) {
                    ratingBlock.classList.remove("liked");
                    ratingBlock.classList.add("unliked");
                    value--;
                }
                else {
                    ratingBlock.classList.remove("liked");
                    ratingBlock.classList.remove("disliked");
                    ratingBlock.classList.add("unliked");
                    ratingBlock.classList.add("undisliked");
                    value++;
                }
                if (value < 0) {
                    ratingNumber.style.color = "#FF0000";
                }
                else {
                    ratingNumber.style.color = "#8AC540";
                }
                ratingNumber.innerHTML = value;
            }
            else if (event.target.closest(".dislikeBtn")) {
                var ratingBlock = event.target.closest(".ratingBlock");
                var ratingNumber = ratingBlock.querySelector(".ratingNumber");
                var value = parseInt(ratingNumber.innerHTML);
                if (ratingBlock.classList.contains("undisliked") && ratingBlock.classList.contains("unliked")) {
                    ratingBlock.classList.remove("undisliked");
                    ratingBlock.classList.add("disliked");
                    value--;
                }
                else if (ratingBlock.classList.contains("disliked") && ratingBlock.classList.contains("unliked")) {
                    ratingBlock.classList.remove("disliked");
                    ratingBlock.classList.add("undisliked");
                    value++;
                }
                else {
                    ratingBlock.classList.remove("liked");
                    ratingBlock.classList.remove("disliked");
                    ratingBlock.classList.add("unliked");
                    ratingBlock.classList.add("undisliked");
                    value--;
                }
                if (value < 0) {
                    ratingNumber.style.color = "#FF0000";
                }
                else {
                    ratingNumber.style.color = "#8AC540";
                }
                ratingNumber.innerHTML = value;
            }
        });
    };
    return Rating;
}());
exports.default = Rating;
