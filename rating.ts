class Rating {
    commentList: HTMLElement;

    constructor(commentList: HTMLElement) {
        this.commentList = commentList;
    }

    ratingChange() {
        this.commentList.addEventListener("click", (event: any) => {
            if (event.target.closest(".likeBtn")) {
                const ratingBlock = event.target.closest(".ratingBlock");
                const ratingNumber = ratingBlock.querySelector(".ratingNumber");
                let value = parseInt(ratingNumber.innerHTML);

                if (ratingBlock.classList.contains("unliked") && ratingBlock.classList.contains("undisliked")) {
                    ratingBlock.classList.remove("unliked");
                    ratingBlock.classList.add("liked");
                    value++;
                } else if (ratingBlock.classList.contains("liked") && ratingBlock.classList.contains("undisliked")) {
                    ratingBlock.classList.remove("liked");
                    ratingBlock.classList.add("unliked");
                    value--;
                } else {
                    ratingBlock.classList.remove("liked");
                    ratingBlock.classList.remove("disliked");
                    ratingBlock.classList.add("unliked");
                    ratingBlock.classList.add("undisliked");
                    value++;
                }

                if (value < 0) {
                    ratingNumber.style.color = "#FF0000";
                } else {
                    ratingNumber.style.color = "#8AC540";
                }

                ratingNumber.innerHTML = value;
            } else if (event.target.closest(".dislikeBtn")) {
                const ratingBlock = event.target.closest(".ratingBlock");
                const ratingNumber = ratingBlock.querySelector(".ratingNumber");
                let value = parseInt(ratingNumber.innerHTML);

                if (ratingBlock.classList.contains("undisliked") && ratingBlock.classList.contains("unliked")) {
                    ratingBlock.classList.remove("undisliked");
                    ratingBlock.classList.add("disliked");
                    value--;
                } else if (ratingBlock.classList.contains("disliked") && ratingBlock.classList.contains("unliked")) {
                    ratingBlock.classList.remove("disliked");
                    ratingBlock.classList.add("undisliked");
                    value++;
                } else {
                    ratingBlock.classList.remove("liked");
                    ratingBlock.classList.remove("disliked");
                    ratingBlock.classList.add("unliked");
                    ratingBlock.classList.add("undisliked");
                    value--;
                }

                if (value < 0) {
                    ratingNumber.style.color = "#FF0000";
                } else {
                    ratingNumber.style.color = "#8AC540";
                }

                ratingNumber.innerHTML = value;
            }
        });
    }
}

export default Rating;