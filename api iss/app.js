const altitude_api = document.getElementById("altitude");
const daynum_api = document.getElementById("daynum");
const footprint_api = document.getElementById("footprint");
const latitude_api = document.getElementById("latitude");
const longitude_api = document.getElementById("longitude");
const solar_lat_api = document.getElementById("solar_lat");
const solar_lon_api = document.getElementById("solar_lon");
const timestamp_api = document.getElementById("timestamp");
const units_api = document.getElementById("units");
const velocity_api = document.getElementById("velocity");
const visibility_api = document.getElementById("visibility");


async function issData() {

    const api = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    const data = await api.json();
    const {
        altitude,
        daynum,
        footprint,
        latitude,
        longitude,
        solar_lat,
        solar_lon,
        timestamp,
        units,
        velocity,
        visibility
    } = data

    altitude_api.textContent = altitude
    daynum_api.textContent = daynum
    footprint_api.textContent = footprint
    latitude_api.textContent = latitude
    longitude_api.textContent = longitude
    solar_lat_api.textContent = solar_lat
    solar_lon_api.textContent = solar_lon
    timestamp_api.textContent = timestamp
    units_api.textContent = units
    velocity_api.textContent = velocity
    visibility_api.textContent = visibility

};
issData();

// setInterval(issData, 1000)