document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("current-time");

  if (timeElement) {
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString("ru-RU", { hour12: false });
      timeElement.textContent = timeString;
    }
    updateTime();
    setInterval(updateTime, 1000);
  }
});

(function () {
  const start = performance.now();

  window.addEventListener("load", () => {
    const end = performance.now();
    const loadTime = ((end - start) / 1000).toFixed(5);
    const timeElement = document.getElementById("load-time");

    const footer = document.querySelector(".footer__text");
    if (footer) {
      timeElement.textContent = ` | Время загрузки страницы: ${loadTime} сек`;
    }
  });
})();


(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll(".nav__link");

    links.forEach(link => {
      const linkUrl = new URL(link.href, document.baseURI);
      const linkPath = linkUrl.pathname;

      if (linkPath === currentPath) {
        link.classList.add("nav__link--active");
      }
    });
  });
})();