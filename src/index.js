document.addEventListener("DOMContentLoaded", function () {
  const citySelect = document.getElementById("city");
  const cities = document.querySelectorAll(".city");

  function updateTime() {
    let londonElement = document.querySelector("#london");
    if (londonElement) {
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");
      let londonTime = moment().tz("Europe/London");

      londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
      londonTimeElement.innerHTML = londonTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

    let parisElement = document.querySelector("#paris");
    if (parisElement) {
      let parisDateElement = parisElement.querySelector(".date");
      let parisTimeElement = parisElement.querySelector(".time");
      let parisTime = moment().tz("Europe/Paris");

      parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
      parisTimeElement.innerHTML = parisTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
      let sydneyDateElement = sydneyElement.querySelector(".date");
      let sydneyTimeElement = sydneyElement.querySelector(".time");
      let sydneyTime = moment().tz("Australia/Sydney");

      sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
      sydneyTimeElement.innerHTML = sydneyTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

    let newYorkElement = document.querySelector("#new_york");
    if (newYorkElement) {
      let newYorkDateElement = newYorkElement.querySelector(".date");
      let newYorkTimeElement = newYorkElement.querySelector(".time");
      let newYorkTime = moment().tz("America/New_York");

      newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
      newYorkTimeElement.innerHTML = newYorkTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }

  citySelect.addEventListener("change", function () {
    updateTime();
  });

  updateTime();
  setInterval(updateTime, 1000);
});
