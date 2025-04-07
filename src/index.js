document.getElementById("city").addEventListener("change", function () {
  const city = this.value;

  document.querySelectorAll(".city").forEach((cityDiv) => {
    cityDiv.style.display = "block";
  });

  if (city) {
    document.querySelectorAll(".city").forEach((cityDiv) => {
      const cityId = cityDiv.id;
      if (cityId !== city.split("/")[1].toLowerCase()) {
        cityDiv.style.display = "none";
      }
    });

    const cityElement = document.getElementById(
      city.split("/")[1].toLowerCase()
    );
    const currentTime = moment.tz(city);
    cityElement.querySelector(".date").textContent =
      currentTime.format("MMMM Do YYYY");
    cityElement.querySelector(".time").textContent =
      currentTime.format("h:mm:ss A");

    setInterval(() => {
      updateTime(city);
    }, 1000);
  } else {
    updateAllTimes();
  }
});

function updateTime(city) {
  const cityElement = document.getElementById(city.split("/")[1].toLowerCase());
  if (cityElement) {
    const cityDateElement = cityElement.querySelector(".date");
    const cityTimeElement = cityElement.querySelector(".time");

    const cityTime = moment().tz(city);

    cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    cityTimeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateAllTimes() {
  updateTime("Europe/London");
  updateTime("Europe/Paris");
  updateTime("Australia/Sydney");
  updateTime("America/New_York");
}

updateAllTimes();
