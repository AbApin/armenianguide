/* Google Website Translator: full-page EN/RU from Armenian (hy). Custom <select> syncs via googtrans cookie. */
window.googleTranslateElementInit = function () {
  if (!window.google || !google.translate) return;
  try {
    new google.translate.TranslateElement(
      {
        pageLanguage: "hy",
        includedLanguages: "en,ru",
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
      },
      "google_translate_element",
    );
  } catch (e) {}
};

(function () {
  var STORAGE_KEY = "norKayqLang";

  function getGoogTransLang() {
    var c = document.cookie || "";
    var idx = c.indexOf("googtrans=");
    if (idx === -1) return null;
    var raw = c
      .substring(idx + 10)
      .split(";")[0]
      .trim();
    try {
      raw = decodeURIComponent(raw);
    } catch (e) {}
    var parts = raw.split("/").filter(Boolean);
    if (parts.length >= 2) {
      var target = parts[parts.length - 1];
      if (target === "en" || target === "ru") return target;
    }
    return null;
  }

  function clearGoogTransCookies() {
    var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    document.cookie = "googtrans=;" + expires;
    var h = location.hostname;
    if (h) {
      document.cookie = "googtrans=;" + expires + ";domain=" + h;
      document.cookie = "googtrans=;" + expires + ";domain=." + h;
    }
  }

  function setLanguagePreference(lang) {
    if (!lang || lang === "hy") {
      clearGoogTransCookies();
      localStorage.setItem(STORAGE_KEY, "hy");
      return;
    }
    localStorage.setItem(STORAGE_KEY, lang);
    document.cookie = "googtrans=/hy/" + lang + ";path=/";
  }

  function syncDropdownAndHtmlLang() {
    var lang = getGoogTransLang();
    if (!lang) lang = localStorage.getItem(STORAGE_KEY) || "hy";
    if (lang !== "hy" && lang !== "en" && lang !== "ru") lang = "hy";
    document.querySelectorAll(".languageDropdown").forEach(function (s) {
      s.value = lang;
    });
    document.documentElement.lang = lang === "hy" ? "hy" : lang;
  }

  function reconcileStorageWithCookie() {
    var stored = localStorage.getItem(STORAGE_KEY);
    var cookieLang = getGoogTransLang();
    if (stored && stored !== "hy" && !cookieLang) {
      setLanguagePreference(stored);
      location.reload();
      return true;
    }
    return false;
  }

  function bind() {
    if (reconcileStorageWithCookie()) return;
    syncDropdownAndHtmlLang();
    document.querySelectorAll(".headerRight").forEach(function (el) {
      el.classList.add("notranslate");
    });
    document.querySelectorAll(".languageDropdown").forEach(function (sel) {
      sel.addEventListener("change", function (e) {
        var v = e.target.value;
        setLanguagePreference(v);
        location.reload();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
