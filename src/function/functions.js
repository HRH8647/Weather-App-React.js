import axios from "axios";
// export const getData = async (city) => {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=960e55c747dcf2174b74a8b4ac1d17b1`);
//     return await res.json();
// }
export const getData = async (city) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=960e55c747dcf2174b74a8b4ac1d17b1`)
    return await res.data
}
export const changeTemp = (temp) => {
    const newTemp = Math.floor(temp - 273.15);
    return newTemp;
}
export const changeTemp2 = (temp) => {
    const newTemp = temp - 273.15;
    return newTemp;
}