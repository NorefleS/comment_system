class Form {
    input: HTMLInputElement;
    symbols: HTMLElement;
    formBtn: HTMLElement;
    spanMaxlength: HTMLElement;
    commentList: HTMLElement;
    maxSymbols: number;

    constructor(input: HTMLInputElement, symbols: HTMLElement, formBtn: HTMLElement, spanMaxlength: HTMLElement, commentList: HTMLElement) {
        this.input = input;
        this.symbols = symbols;
        this.formBtn = formBtn;
        this.spanMaxlength = spanMaxlength;
        this.maxSymbols = 1000;
        this.commentList = commentList;
    }

    defaultColorBtn() {
        this.formBtn.style.backgroundColor = "#a1a1a1";
        this.formBtn.style.opacity = "0.4";
        this.formBtn.style.cursor = "default";
    }

    recolorBtn() {
        this.formBtn.style.backgroundColor = "#abd873";
        this.formBtn.style.opacity = "1";
        this.formBtn.style.cursor = "pointer";
    }

    maxlengthInput() {
        this.input.addEventListener("keyup", () => {
            if (this.input.value.length == 0) {
                this.symbols.innerHTML = "Макс. 1000 символов";
                this.defaultColorBtn();
            } else {
                this.symbols.innerHTML = `${this.input.value.length}/${this.maxSymbols}`;
            }

            if (this.input.value.length <= this.maxSymbols && this.input.value.length > 0) {
                this.symbols.style.color = "#000";
                this.symbols.style.opacity = "0.4";
                this.recolorBtn();
                this.spanMaxlength.style.display = "none";
            }
        });

        this.input.addEventListener("input", () => {
            this.input.style.height = "auto";
            this.input.style.height = this.input.scrollHeight + "px";
        });

        this.formBtn.addEventListener("click", () => {
            if (this.input.value.length > 0 && this.input.value.length <= this.maxSymbols) {
                const inputMessege = this.input.value;
                this.sendComment(this.input, inputMessege);
                localStorage.setItem("commentList", this.commentList.innerHTML);
            }
            
            if (this.input.value.length <= this.maxSymbols) {
                this.input.value = "";
                this.symbols.innerHTML = "Макс. 1000 символов";
                this.defaultColorBtn();
            } else {
                this.symbols.style.color = "#f00";
                this.symbols.style.opacity = "1";
                this.defaultColorBtn();
                this.spanMaxlength.style.display = "block";
            }
        });
    }

    sendComment(input: any, inputMessege: string) {
        let date = new Date();
        
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("commentContainer");

        const messege = `<div class="commentBlock__commentaire mainComment nofavourited">
                                <img class="form__avatar" src="/avatars/myavatar.svg" alt="Мой аватар">
                                    
                                <div class="commentaire__name-text">
                                    <div class="commentaire__name-date">
                                        <span class="form__name">Максим Авдеенко</span>
                                            
                                        <div class="form__dateBlock">
                                            <span class="form__date date">${date.getDate()}.${('0'+(date.getMonth()+1)).slice(-2)}</span>
                                            <span class="form__date time">${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}</span>
                                        </div>
                                    </div>

                                    <p class="commentaire__text">
                                        ${inputMessege}
                                    </p>

                                    <div class="commentaire__answerBlock">
                                        <button type="button" class="answerBlock__button answerBtn">
                                            <img src="/svg/answer.svg" alt="">
                                            <span class="answerBlock__span">Ответить</span>
                                        </button>
                                            
                                        <button type="button" class="answerBlock__button favouriteBtn heartNoAdded">
                                            <img class="answerBlock__img-favourite" src="/svg/nofavourite.svg" alt="">
                                            <span class="answerBlock__span answerBlock__span-favourite">В избранное</span>
                                        </button>
                                            
                                        <div class="ratingBlock unliked undisliked">
                                            <button class="ratingBtn dislikeBtn"></button>
                                            <span class="ratingNumber">0</span>
                                            <button class="ratingBtn likeBtn"></button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                            
                        <div class="answersBlock"></div>`;

        commentContainer.innerHTML = messege;
        input.style.height = "61px";
        this.commentList.appendChild(commentContainer);
        
    }
}

export default Form;