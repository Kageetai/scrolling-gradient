import debounce from "lodash/debounce";

let className = "scrolled";
let observer = new ResizeObserver(
  debounce((entries) => {
    entries.forEach(() => {
      if (document.body.scrollHeight > window.innerHeight * 1.5) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });
  }, 400),
);
observer.observe(document.querySelector("#scrollObserver"));
