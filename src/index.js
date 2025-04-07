document.getElementById("city").addEventListener("change", function () {
  const city = this.value;

  document.querySelectorAll(".city").forEach((cityDiv) => {
    cityDiv.style.display = "none";
  });

  if (city) {
    const cityElement = document.getElementById(
      city.split("/")[1].toLowerCase()
    );
    cityElement.style.display = "block";

    const currentTime = moment.tz(city);
    cityElement.querySelector(".date").textContent =
      currentTime.format("MMMM Do YYYY");
    cityElement.querySelector(".time").textContent =
      currentTime.format("h:mm:ss A");
  }
});
