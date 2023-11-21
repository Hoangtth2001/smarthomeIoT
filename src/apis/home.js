import axios from "axios";
import { config } from "../config";


export const getHome = ()=> new Promise(async(resolve, reject)=>{
    const apiKey = config.API_KEY;
    try {
        const res = await axios.get(`https://api.thingspeak.com/channels/2299266/feeds.json?api_key=${apiKey}&results=1`)
        resolve(res)
    } catch (error) {
        reject(error);
    }
})



