(function () {
  const issues = window.AUCOSMOS_DAILY_ISSUES || [];
  const book = document.querySelector("[data-book]");
  const issueSelect = document.querySelector("#issue-select");
  const archive = document.querySelector("[data-archive]");
  const title = document.querySelector("#reader-title");
  const status = document.querySelector("[data-page-status]");
  const stage = document.querySelector(".magazine-stage");
  const prevButtons = document.querySelectorAll("[data-prev]");
  const nextButtons = document.querySelectorAll("[data-next]");
  const latestLink = document.querySelector("[data-open-latest]");

  let issue = issues[0];
  let pageIndex = 0;
  let touchStartX = 0;

  function isMobileSpread() {
    return window.matchMedia("(max-width: 780px)").matches;
  }

  function pagesPerView() {
    if (pageIndex === 0 || isMobileSpread()) return 1;
    return 2;
  }

  function pageClass(page) {
    return ["page", page.type === "cover" ? "cover" : "", page.type === "blank" ? "blank" : ""]
      .filter(Boolean)
      .join(" ");
  }

  function renderPage(page, index) {
    if (page.image) {
      return '<article class="' + pageClass(page) + '"><img class="page-image" src="' + page.image + '" alt="' + page.alt + '"></article>';
    }

    const body = page.body.map((paragraph) => "<p>" + paragraph + "</p>").join("");
    return [
      '<article class="' + pageClass(page) + '">',
      '<div class="page-kicker">' + page.kicker + "</div>",
      '<div class="page-content">',
      "<h3>" + page.title + "</h3>",
      body,
      "</div>",
      '<div class="page-footer">' + (page.footer || "Page " + String(index + 1).padStart(2, "0")) + "</div>",
      "</article>"
    ].join("");
  }

  function render() {
    const perView = pagesPerView();
    const visiblePages = issue.pages.slice(pageIndex, pageIndex + perView);
    book.classList.toggle("single", perView === 1);
    book.innerHTML = visiblePages.map(renderPage).join("");
    title.textContent = "AUCOSMOS DAILY / " + issue.id;

    const endPage = Math.min(pageIndex + perView, issue.pages.length);
    status.textContent = pageIndex === 0 ? "Cover" : "Pages " + (pageIndex + 1) + "-" + endPage + " / " + issue.pages.length;

    prevButtons.forEach((button) => {
      button.disabled = pageIndex === 0;
    });
    nextButtons.forEach((button) => {
      button.disabled = pageIndex >= issue.pages.length - perView;
    });
  }

  function next() {
    const step = pagesPerView();
    pageIndex = Math.min(pageIndex + step, issue.pages.length - 1);
    render();
  }

  function previous() {
    const step = pagesPerView();
    pageIndex = Math.max(pageIndex - step, 0);
    render();
  }

  function chooseIssue(id) {
    issue = issues.find((entry) => entry.id === id) || issues[0];
    pageIndex = 0;
    issueSelect.value = issue.id;
    render();
  }

  function renderArchive() {
    issueSelect.innerHTML = issues.map((entry) => '<option value="' + entry.id + '">' + entry.id + "</option>").join("");
    archive.innerHTML = issues
      .map(function (entry) {
        return [
          '<a class="issue-card" href="#reader" data-issue-card="' + entry.id + '">',
          '<p class="issue-meta">Issue ' + entry.id + " / " + entry.date + "</p>",
          "<h3>" + entry.title + "</h3>",
          '<p class="issue-meta">' + entry.tags.join(" / ") + "</p>",
          "</a>"
        ].join("");
      })
      .join("");
  }

  prevButtons.forEach((button) => button.addEventListener("click", previous));
  nextButtons.forEach((button) => button.addEventListener("click", next));

  issueSelect.addEventListener("change", function (event) {
    chooseIssue(event.target.value);
  });

  archive.addEventListener("click", function (event) {
    const card = event.target.closest("[data-issue-card]");
    if (!card) return;
    chooseIssue(card.getAttribute("data-issue-card"));
  });

  latestLink.addEventListener("click", function () {
    chooseIssue(issues[0].id);
  });

  stage.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].clientX;
  });

  stage.addEventListener("touchend", function (event) {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) < 42) return;
    if (distance < 0) next();
    if (distance > 0) previous();
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") previous();
  });

  window.addEventListener("resize", render);

  renderArchive();
  chooseIssue(issues[0].id);
})();
