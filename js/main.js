$(document).ready(function () {
  let prevScrollPos = window.scrollY;
  const $header = $("#header");

  $(window).on("scroll", function () {
    const currentScrollPos = window.scrollY;
    $header.css(
      "top",
      prevScrollPos > currentScrollPos || currentScrollPos === 0
        ? "0px"
        : "-150px"
    );
    prevScrollPos = currentScrollPos;
  });

  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;

  // Клонируем меню, чтобы задать свои стили для мобильной версии
  const menu = document.querySelector("#menu").cloneNode(1);

  // При клике на иконку hamb вызываем ф-ию hambHandler
  hamb.addEventListener("click", hambHandler);

  // Выполняем действия при клике ..
  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  // Здесь мы рендерим элементы в наш попап
  function renderPopup() {
    popup.appendChild(menu);
  }

  // Код для закрытия меню при нажатии на ссылку
  const links = Array.from(menu.children);

  // Для каждого элемента меню при клике вызываем ф-ию
  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  // Закрытие попапа при клике на меню
  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }

  $(".load-more").on("click", function () {
    const $activeWrapper = $(".services .wrapper[hidden!='hidden']");

    if ($activeWrapper.length > 0) {
      const $newsItems = $activeWrapper.find(".item");
      const $hiddenItems = $newsItems.not(":visible");

      if ($hiddenItems.length > 0) {
        $hiddenItems.slideDown().css("display", "grid");
        $(this).html("Скрыть");
      } else {
        $newsItems.slice(4).slideUp();
        $(this).html("Показать еще");
      }
    }
  });

  $(".branches .tabby-ul a").on("click", function () {
    let $activeWrapper = $(".branches .wrapper[hidden!='hidden']").attr("id");
    const $branches = $(".branches");

    if ($activeWrapper === "first") {
      $branches.css("background-color", "#23A04D");
    } else if ($activeWrapper === "second") {
      $branches.css("background-color", "#AC2C43");
    } else if ($activeWrapper === "third") {
      $branches.css("background-color", "#2C39AC");
    } else if ($activeWrapper === "fourth") {
      $branches.css("background-color", "#000");
    }
  });
});

$("input[id='tel']").mask("+7 (999) 999-99-99");
$("input[id='tel-number']").mask("+7 (999) 999-99-99");
