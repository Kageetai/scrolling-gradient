import debounce from "lodash/debounce";

let className = "scrolled";
let observer = new ResizeObserver(
  debounce((entries, observer) => {
    entries.forEach(() => {
      if (document.body.scrollHeight > window.innerHeight) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });
  }, 400),
);
observer.observe(document.querySelector("#scrollObserver"));
