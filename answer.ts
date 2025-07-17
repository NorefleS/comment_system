class Answer {
    commentBlock: any;
    commentList: any;
    existingInput: any;

    constructor(commentBlock: any, commentList: any) {
        this.commentBlock = commentBlock;
        this.commentList = commentList;
    }

    answerAdd() {
        this.commentBlock.addEventListener('click', (event: any) => {
            const replyButton = event.target.closest(".answerBtn");
            const answerInputBtn = event.target.closest(".answerInputBtn");
            
            if (answerInputBtn) {
                this.sendAnswer(this.existingInput, answerInputBtn);
                localStorage.setItem("commentList", this.commentList.innerHTML);
            }

            if (!replyButton) return;
               
            if (this.commentBlock.querySelector(".answerInput")) {
                this.existingInput.closest(".answerToUser").remove();
                return;
            }

            const currentComment = replyButton.closest(".mainComment");
            const answersBlock = currentComment.nextElementSibling;
                
            const replyFormHTML = `<div class="answerToUser mainComment commentBlock__commentaire nofavourited">
                                        <img class="form__avatar" src="./avatars/myavatar.svg" alt="Аватар">
                                        <div class="commentaire__name-text">
                                            <div class="commentaire__name-data">
                                                <span class="form__name">Максим Авдеенко</span>
                                                <img src="./svg/answer.svg" alt="Ответ">
                                                <span class="answerBlock__span">${currentComment.querySelector(".form__name").textContent}</span>
                                            </div>
                                            <p class="answerToUser__text">
                                                <textarea class="form__input answerInput" placeholder="Введите ваш ответ..." rows="1"></textarea>
                                                <button class="answerInputBtn" type="button">Отправить</button>
                                            </p>
                                        </div>
                                    </div>`;

            answersBlock.insertAdjacentHTML("beforeend", replyFormHTML);
            answersBlock.querySelector(".answerInput").focus();

            this.existingInput = answersBlock.querySelector(".answerInput");
            const inputBtn = answersBlock.querySelector(".answerInputBtn");

            this.existingInput.addEventListener("keyup", () => {
                if (this.existingInput.value.length > 0 && this.existingInput.value.length <= 1000) {
                    inputBtn.style.backgroundColor = "#abd873";
                    inputBtn.style.opacity = "1";
                    inputBtn.style.cursor = "pointer";
                } else {
                    inputBtn.style.backgroundColor = "#a1a1a1";
                    inputBtn.style.opacity = "0.4";
                    inputBtn.style.cursor = "default";
                }
            });

            this.existingInput.addEventListener("input", () => {
                this.existingInput.style.height = "auto";
                this.existingInput.style.height = this.existingInput.scrollHeight + "px";
            });
        });
    }

    sendAnswer(input: any, answerInputBtn: any) {
        let date = new Date();
        if (input.value.length > 0 && input.value.length <= 1000) {
            const answerToUser = answerInputBtn.closest(".answerToUser");
            const commentContainer = answerToUser.closest(".commentContainer");
     
            const messege = `<img class="form__avatar" src="./avatars/myavatar.svg" alt="Мой аватар">
                                            
                            <div class="commentaire__name-text">
                                <div class="commentaire__name-date">
                                    <span class="form__name">Максим Авдеенко</span>
                                    <img src="./svg/answer.svg" alt="Ответ">
                                    <span class="answerBlock__span">${commentContainer.querySelector(".form__name").textContent}</span>

                                    <div class="form__dateBlock">
                                        <span class="form__date date">${date.getDate()}.${('0' + (date.getMonth()+1)).slice(-2)}</span>
                                        <span class="form__date time">${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}</span>
                                    </div>
                                </div>

                                <p class="commentaire__text">
                                    ${input.value}
                                </p>

                                <div class="commentaire__answerBlock">
                                    <button type="button" class="answerBlock__button favouriteBtn heartNoAdded">
                                        <img class="answerBlock__img-favourite" src="./svg/nofavourite.svg" alt="">
                                        <span class="answerBlock__span answerBlock__span-favourite">В избранное</span>
                                    </button>
                                                    
                                    <div class="ratingBlock unliked undisliked">
                                        <button class="ratingBtn dislikeBtn"></button>
                                        <span class="ratingNumber">0</span>
                                        <button class="ratingBtn likeBtn"></button>
                                    </div>
                                </div>
                            </div>`;            
                    
            answerToUser.innerHTML = messege;
        }
    }
}

export default Answer;