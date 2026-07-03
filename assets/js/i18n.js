(function () {
  var LANG_KEY = "norKayqLang";

  function getLang() {
    return localStorage.getItem(LANG_KEY) || "hy";
  }

  var i18nImages = {
    marzer1: { hy: "./assets/img/marzer1.webp", en: "./assets/img/marzer1_en.webp", ru: "./assets/img/marzer1_ru.webp" },
    marzer2: { hy: "./assets/img/marzer2.webp", en: "./assets/img/marzer2_en.webp", ru: "./assets/img/marzer2_ru.webp" },
    temperatureClimate: { hy: "temperature-am.webp", en: "temperature-en.webp", ru: "temperature-ru.webp" },
    armavir2: { hy: "armavir2.webp", en: "armavir2-en.webp", ru: "armavir2-ru.webp" },
    armavir3: { hy: "armavir3.webp", en: "armavir3-en.webp", ru: "armavir3-ru.webp" },
    ararat2: { hy: "ararat2-am.webp", en: "ararat2-en.webp", ru: "ararat2-ru.webp" },
    ararat3: { hy: "ararat3-am.webp", en: "ararat3-en.webp", ru: "ararat3-ru.webp" },
    tvyalner1: { hy: "tvyalner1-am.webp", en: "tvyalner1-en.webp", ru: "tvyalner1-ru.webp" },
    tvyalner2: { hy: "tvyalner2-am.webp", en: "tvyalner2-en.webp", ru: "tvyalner2-ru.webp" }
  };

  function applyTranslations(lang) {
    if (!window.translations || !translations[lang]) return;
    var t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-img]").forEach(function (img) {
      var key = img.getAttribute("data-i18n-img");
      if (i18nImages[key] && i18nImages[key][lang]) {
        var val = i18nImages[key][lang];
        if (val.indexOf("/") === -1) {
          img.src = img.src.replace(/[^\/]+$/, val);
        } else {
          img.src = val;
        }
      }
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
