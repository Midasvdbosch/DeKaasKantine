(function () {
  var data = window.KAASKANTINE;
  if (!data) return;

  function euro(n) {
    return Number.isInteger(n) ? "€" + n + ",-" : "€" + n.toFixed(2).replace(".", ",");
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // Order links: one place to change the URL
  document.querySelectorAll("[data-order]").forEach(function (a) { a.href = data.bestellink; });

  // Weekend special
  var ws = data.weekendSpecial;
  if (ws) {
    var img = document.querySelector("[data-special-img]");
    img.src = ws.afbeelding;
    img.alt = ws.alt || ws.naam;
    document.querySelector("[data-special-name]").textContent = ws.naam;
    document.querySelector("[data-special-desc]").textContent = ws.beschrijving;
    document.querySelector("[data-special-price]").textContent = euro(ws.prijs);
  }

  // Menu board with tabs
  var tabs = document.querySelector("[data-tabs]");
  var panels = document.querySelector("[data-panels]");
  data.menu.forEach(function (cat, i) {
    var id = "cat-" + i;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "board__tab";
    btn.id = "tab-" + i;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-controls", id);
    btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
    btn.tabIndex = i === 0 ? 0 : -1;
    btn.textContent = cat.naam;
    tabs.appendChild(btn);

    var items = cat.items.map(function (it) {
      var labels = it.labels || [];
      var badge = labels.indexOf("Nieuw") > -1 ? '<span class="badge">Nieuw</span>' : "";
      var halal = labels.indexOf("Halal") > -1 ? "<em>/Halal</em>" : "";
      return '<li class="board__item">' +
        '<h3 class="board__name">' + esc(it.naam) + badge + "</h3>" +
        '<span class="board__price">' + euro(it.prijs) + halal + "</span>" +
        (it.beschrijving ? '<p class="board__desc">' + esc(it.beschrijving) + "</p>" : "") +
        "</li>";
    }).join("");

    var panel = document.createElement("div");
    panel.id = id;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "tab-" + i);
    panel.hidden = i !== 0;
    panel.innerHTML =
      '<p class="board__title" aria-hidden="true">' + esc(cat.naam) + "</p>" +
      (cat.intro ? '<p class="board__intro">' + esc(cat.intro) + "</p>" : "") +
      '<ul class="board__list">' + items + "</ul>";
    panels.appendChild(panel);
  });

  var tabButtons = Array.prototype.slice.call(tabs.querySelectorAll('[role="tab"]'));
  function select(idx, focus) {
    tabButtons.forEach(function (b, i) {
      var on = i === idx;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tabButtons[idx].focus();
  }
  tabButtons.forEach(function (b, i) {
    b.addEventListener("click", function () { select(i); });
    b.addEventListener("keydown", function (e) {
      var n = tabButtons.length;
      if (e.key === "ArrowRight") { e.preventDefault(); select((i + 1) % n, true); }
      if (e.key === "ArrowLeft") { e.preventDefault(); select((i - 1 + n) % n, true); }
    });
  });

  // Open / closed status + today's row in the hours table
  var dayNames = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
  var hours = data.openingstijden;
  var now = new Date();
  var today = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  function toMin(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }

  var status = document.querySelector("[data-status]");
  var h = hours[today];
  if (h && mins >= toMin(h[0]) && mins < toMin(h[1])) {
    status.textContent = "Nu open, tot " + h[1];
    status.classList.add("is-open");
  } else if (h && mins < toMin(h[0])) {
    status.textContent = "Vandaag open vanaf " + h[0];
  } else {
    for (var d = 1; d <= 7; d++) {
      var day = (today + d) % 7;
      if (hours[day]) {
        status.textContent = "Nu gesloten · " + (d === 1 ? "morgen" : dayNames[day]) + " weer open vanaf " + hours[day][0];
        break;
      }
    }
  }

  document.querySelectorAll("[data-hours] tr").forEach(function (tr) {
    var d = +tr.getAttribute("data-day");
    if (!hours[d]) tr.classList.add("is-closed");
    if (d === today) tr.classList.add("is-today");
  });

  // Hide the floating mobile order button while another order button is on screen
  var bar = document.querySelector(".orderbar");
  if (bar && "IntersectionObserver" in window) {
    var visible = new Set();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.isIntersecting ? visible.add(e.target) : visible.delete(e.target); });
      bar.classList.toggle("is-hidden", visible.size > 0);
    });
    document.querySelectorAll("main [data-order]").forEach(function (a) { io.observe(a); });
  }
})();
