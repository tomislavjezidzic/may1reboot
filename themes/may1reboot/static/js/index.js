import '../scss/style.scss';
import Dummy from "./components/Dummy";

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// dom loaded
docReady(() => {
    const dummy = new Dummy();
    dummy.init();
});
