class Favourite {
    commentBlock: HTMLElement;
    favouriteMenuBtn: HTMLElement;
    comment: HTMLCollectionOf<HTMLElement>;

    constructor(commentBlock: HTMLElement, favouriteMenuBtn: HTMLElement, comment: HTMLCollectionOf<HTMLElement>) {
        this.commentBlock = commentBlock;
        this.favouriteMenuBtn = favouriteMenuBtn;
        this.comment = comment;
    }

    addToFavourite() {
        this.commentBlock.addEventListener('click', (event: any) => {
            const target = event.target;

            if (target.closest(".favouriteBtn") && target.closest(".favouriteBtn").classList.contains("heartAdded")) {
               
                target.closest(".commentBlock__commentaire").classList.remove("favourited");
                target.closest(".commentBlock__commentaire").classList.add("nofavourited");
                
                target.closest(".favouriteBtn").classList.remove("heartAdded");
                target.closest(".favouriteBtn").classList.add("heartNoAdded");
                target.closest(".favouriteBtn").querySelector(".answerBlock__span-favourite").innerHTML = "В избранное";
                target.closest(".favouriteBtn").querySelector(".answerBlock__img-favourite").src = "/svg/nofavourite.svg";
            } else if (target.closest(".favouriteBtn") && target.closest(".favouriteBtn").classList.contains("heartNoAdded")) {
                
                target.closest(".commentBlock__commentaire").classList.remove("nofavourited");
                target.closest(".commentBlock__commentaire").classList.add("favourited");

                target.closest(".favouriteBtn").classList.remove("heartNoAdded");
                target.closest(".favouriteBtn").classList.add("heartAdded");
                target.closest(".favouriteBtn").querySelector(".answerBlock__span-favourite").innerHTML = "В избранном";
                target.closest(".favouriteBtn").querySelector(".answerBlock__img-favourite").src = "/svg/favourite.svg";
            }
        });
    }

    showFavourite() {
        this.commentBlock.addEventListener('click', (event: any) => {
            const target = event.target;
            
            if (target.closest(".favouriteMenuBtn")) {
                for (let i = 0; i < this.comment.length; i++) {
                    if (this.comment[i].classList.contains("nofavourited")) {
                        this.comment[i].style.display = "none";
                    } else if (this.comment[i].classList.contains("favourited")) {
                        this.comment[i].style.display = "flex";
                    }
                }
            }
        });
        
    }
}

export default Favourite;