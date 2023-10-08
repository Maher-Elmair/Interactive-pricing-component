/* ---------------------------- GLOBAL VARIABLES ---------------------------- */
// let price = document.getElementById("price");
// let Interval = document.getElementById("interval");
let priceSlider = document.getElementById("price_slider");
let intervalSwitch = document.getElementById("interval_switch");
let button = document.getElementById("Start");
let zPrice = 16.00;
let zInterval = "month";

/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function getInterval(price, int) {
  if (int === "month") {
    zPrice = price;
  }
  else {
    zPrice = (price * 12) * 0.75;
  }
}

function sliderChange(value) {
  let pageViews = document.getElementById("Pageviews");
  let price = document.getElementById("price");
  // console.log(pageViews);
  switch (value) {
    case "2":
      zPrice = 36;
      getInterval(zPrice, zInterval);
      priceSlider.setAttribute("aria-valuenow", 2);

      pageViews.innerHTML = "1M Pageviews";
      price.innerHTML = "$" + zPrice.toFixed(2) + "<span> / " + zInterval + "</span>";
      break;
    case "1":
      zPrice = 24;
      getInterval(zPrice, zInterval);
      priceSlider.setAttribute("aria-valuenow", 1);

      pageViews.innerHTML = "500K Pageviews";
      price.innerHTML = "$" + zPrice.toFixed(2) + "<span> / " + zInterval + "</span>";
      break;
    case "0":
      zPrice = 16;
      getInterval(zPrice, zInterval);
      priceSlider.setAttribute("aria-valuenow", 0);

      pageViews.innerHTML = "100K Pageviews";
      price.innerHTML = "$" + zPrice.toFixed(2) + "<span> / " + zInterval + "</span>";
      break;
    case "-1":
      zPrice = 12;
      getInterval(zPrice, zInterval);
      priceSlider.setAttribute("aria-valuenow", -1);

      pageViews.innerHTML = "50K Pageviews";
      price.innerHTML = "$" + zPrice.toFixed(2) + "<span> / " + zInterval + "</span>";
      break;
    case "-2":
      zPrice = 8;
      getInterval(zPrice, zInterval);
      priceSlider.setAttribute("aria-valuenow", -2);

      pageViews.innerHTML = "10K Pageviews";
      price.innerHTML = "$" + zPrice.toFixed(2) + "<span> / " + zInterval + "</span>";
      break;
    default:
      break;
  }
}

function billingIntToggle(value) {
  if (value === true) {
    zInterval = "year";
    intervalSwitch.setAttribute("aria-checked", true);
    sliderChange(priceSlider.value);
  }
  else {
    zInterval = "month";
    intervalSwitch.setAttribute("aria-checked", false);
    sliderChange(priceSlider.value);
  }
}

/* ----------------------------- EVENT HANDLERS ----------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  priceSlider.addEventListener("mousedown", function () {
    this.style.outlineWidth = "0";
  });

  priceSlider.addEventListener("mouseup", function () {
    this.blur();
    this.style.outlineWidth = "initial";
  });

  priceSlider.addEventListener("mouseleave", function () {
    this.blur();
    this.style.outlineWidth = "initial";
  });

  priceSlider.oninput = function () {
    sliderChange(this.value);

    var fillTrackPct = (this.value - this.min) / (this.max - this.min) * 100;

    this.style.background =
      "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
      + fillTrackPct +
      "%, hsl(224, 65%, 95%) "
      + fillTrackPct +
      "%, hsl(224, 65%, 95%) 100%)";
  };

  /* ----- */

  intervalSwitch.oninput = function () {
    billingIntToggle(this.checked);
  };

});

button.onclick = function () {
  window.location.reload(true);
};