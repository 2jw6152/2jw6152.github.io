(function () {
  var measurementId = window.NANARI_GA_ID;
  if (!measurementId || typeof measurementId !== "string") {
    return;
  }

  measurementId = measurementId.trim();
  if (!/^G-[A-Z0-9]+$/i.test(measurementId)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", measurementId);

  document.addEventListener("click", function (event) {
    var link = event.target.closest("[data-store]");
    if (!link) {
      return;
    }

    var store = link.getAttribute("data-store");
    if (!store) {
      return;
    }

    gtag("event", "store_click", {
      store: store,
      link_url: link.href,
      event_category: "outbound",
      event_label: store
    });
  });
})();
