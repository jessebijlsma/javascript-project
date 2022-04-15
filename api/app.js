document.getElementById("altitudee")
document.getElementById("daynumm")
document.getElementById("footprintt")
document.getElementById("latitudee")
document.getElementById("longitudee")
document.getElementById("solar_latt")
document.getElementById("solar_lonn")
document.getElementById("timestampp")
document.getElementById("unitss")
document.getElementById("velocityy")
document.getElementById("visibilityy")

async function issData(){

    const api = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    const data = await api.json();
    const  {
    altitude, daynum, footprint, latitude, longitude, solar_lat, solar_lon, timestamp, units, velocity, visibility } = data
    altitudee.textContent = altitude
    daynumm.textContent = daynum
    footprintt.textContent = footprint
    latitudee.textContent = latitude
    longitudee.textContent = longitude
    solar_latt.textContent = solar_lat
    solar_lonn.textContent = solar_lon
    timestampp.textContent = timestamp
    unitss.textContent = units
    velocityy.textContent = velocity
    visibilityy.textContent = visibility

    console.log(data)
};
issData();

setInterval(issData, 1000)