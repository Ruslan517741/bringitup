import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    
    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
            
        });
        
        /* if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        } */
        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
            console.log(2);
        }
    }


    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.container.appendChild(this.slides[0]);
            this.decorizeSlides();
            console.log(this.slides);
            /* if(this.slides[1].tagName == 'BUTTON' && this.slides[2].tagName == 'BUTTON') {
                this.container.appendChild(this.slides[0]);
                this.container.appendChild(this.slides[1]);
                this.container.appendChild(this.slides[2]);
                this.decorizeSlides();
                console.log(1);
            } else if (this.slides[1].tagName == 'BUTTON') {
                this.container.appendChild(this.slides[0]);
                this.container.appendChild(this.slides[1]);
                this.decorizeSlides();
                console.log(2);
            } else {
                this.container.appendChild(this.slides[0]);
                this.decorizeSlides();
                console.log(3);
            } */
            
        });

        this.prev.addEventListener('click', () => {

            /* for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== 'BUTTON') {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            } */

            let active = this.slides[this.slides.length - 1];
            this.container.insertBefore(active, this.slides[0]);
            this.decorizeSlides();
        });
    }

    init() {
        /* if (this.container.classList.contains("feed__slider")) {
            this.slides = this.container.querySelectorAll('.feed__item');
            console.log(this.slides);
        } */

        console.log(this.slides);
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
        
        this.bindTriggers();
        this.decorizeSlides();
    }
}
