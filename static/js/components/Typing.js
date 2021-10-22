export default class Typing {
    constructor() {
        setTimeout(() => {
            this.init();
        }, 3000);
    }

    init() {
        // const items = ['web developer  ', 'javascript developer  ', 'full stack developer  ']; // keep a space after array items
        const items = [' ', ' ', ' ']; // keep a space after array items

        let index = 0; // index of array
        let charIndex = 0; // index of character in string

        function typing() {
            if (index === items.length) {
                index = 0;
                setTimeout(typing, 1000);
            } else if (charIndex >= items[index].length) {
                console.log("finished");
            } else if (charIndex < items[index].length) {
                const addChar = items[index].substr(-items[index].length, charIndex);
                document.querySelector('.js-type').innerHTML = addChar;
                charIndex += 1;
                setTimeout(typing, 100); // typing speed
            }
        };

        document.addEventListener("DOMContentLoaded", typing());
    }
}
