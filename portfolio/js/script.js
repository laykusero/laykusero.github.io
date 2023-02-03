const checkbox = document.querySelector('.toggle-state');
const body = document.querySelector('body');

checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        body.classList.add('dark-mode');
        } else {
        body.classList.remove('dark-mode');
        }
});

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const filterValue = e.target.dataset.filter;
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    portfolioItems.forEach(function (item) {
      if (filterValue === "all") {
        item.classList.remove("d-none");
        return;
      }

      if (item.classList.contains(filterValue)) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  });
});
