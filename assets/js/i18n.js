(function () {
  var LANG_KEY = "norKayqLang";

  function getLang() {
    return localStorage.getItem(LANG_KEY) || "hy";
  }

  function applyTranslations(lang) {
    if (!window.translations || !translations[lang]) return;
    var t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });
  }

  function syncDropdown(lang) {
    document.querySelectorAll(".languageDropdown").forEach(function (sel) {
      sel.value = lang;
    });
  }

  function init() {
    document.querySelectorAll(".headerRight").forEach(function (el) {
      el.classList.add("notranslate");
    });

    var lang = getLang();
    syncDropdown(lang);
    applyTranslations(lang);

    document.querySelectorAll(".languageDropdown").forEach(function (sel) {
      sel.addEventListener("change", function (e) {
        var chosen = e.target.value;
        localStorage.setItem(LANG_KEY, chosen);
        syncDropdown(chosen);
        applyTranslations(chosen);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
