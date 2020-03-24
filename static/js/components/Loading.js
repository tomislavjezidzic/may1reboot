import gsap from "gsap";

export default class Loading {
    constructor() {
        this.loading = document.querySelector('.js-loading');
        this.loadingOverlay = document.querySelector('.js-loading-overlay');
    }

    init(value) {
        gsap.to(this.loading, {
            delay: 0.3,
            duration: 0.5,
            x: `${100 - value}%`,
            ease: "expo.ease-out",
            onComplete: () => {
                if (value > 99) {
                    this.finalAnimation();
                }
            }
        })
    }

    finalAnimation() {
        gsap.to(this.loading, {
            delay: 0.2,
            duration: 0.6,
            height: "100%",
            ease: "expo.ease-out"
        });

        gsap.to(this.loadingOverlay, {
            duration: 0.6,
            delay: 0.5,
            y: "-105%",
            ease: "expo.ease-out"
        });
    }
}
