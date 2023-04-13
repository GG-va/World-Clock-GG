function updateTime() {

    let zurichElement = document.querySelector("#zurich");
    let zurichDateElement = zurichElement.querySelector(".date");
    let zurichTimeElement = zurichElement.querySelector(".time");
    let zurichTime = moment().tz("Europe/Zurich");

    zurichDateElement.innerHTML = moment().format("MMMM Do YYYY");

    zurichTimeElement.innerHTML = zurichTime.format(`h:mm:ss
[<small>] A [</small>]`);

    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");

    losAngelesTimeElement.innerHTML = losAngelesTime.format(`h:mm:ss
[<small>] A [</small>]`);


    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");

    sydneyTimeElement.innerHTML = sydneyTime.format(`h:mm:ss
[<small>] A [</small>]`);

}

function updateCity(event) {
    let cityTimezone = event.target.value;
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` <div class="city">
                <div>
                    <h2> ${cityName}</h2>
                    <div class="date"> ${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("h:mm:ss")} <small> ${cityTime.format("A")}
                </small> </div>
            </div>`;
}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);