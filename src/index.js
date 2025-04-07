function updateTime() {
  const londonElement = document.querySelector("#london");
  if (londonElement) {
    const londonDateElement = londonElement.querySelector(".date");
    const londonTimeElement = londonElement.querySelector(".time");
    const londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  const citiesElement = document.querySelector("#cities");
  if (citiesElement) {
    citiesElement.innerHTML = "";

    const citySelectElement = document.querySelector("#city");
    const cityTimeZone = citySelectElement ? citySelectElement.value : "";

    if (cityTimeZone && cityTimeZone !== "current") {
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];
      const cityTime = moment().tz(cityTimeZone);

      citiesElement.innerHTML = `
        <div class="city">
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
      `;
    }
  }
}

function updateCity(event) {
  updateTime();
}

document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  setInterval(updateTime, 1000);

  const citiesSelectElement = document.querySelector("#city");
  if (citiesSelectElement) {
    citiesSelectElement.addEventListener("change", updateCity);
  } else {
    console.warn("Select element with ID #city not found.");
  }
});
