import React, { useEffect, useState } from 'react'

import './air.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { config } from '../../config'
const Air = () => {
    const [isTurnON, setIsTurnOn] = useState(false)
    let home = useSelector(state => state.app.homeData)
    const [warning, setWarning] = useState(false)

    let temperature = parseFloat(home.field1).toFixed(2)
    let humidity = parseFloat(home.field2).toFixed(2)
    let ledFan = parseInt(home.field3, 10)
    let ledAir = parseInt(home.field4, 10)
    let ledWindow = parseInt(home.field5, 10)


    useEffect(() => {
        const setButon = () => {
            if (ledAir === 1) {
                setIsTurnOn(true)
            }
            else {
                setIsTurnOn(false)
            }
        }
        setButon()

    }, [ledAir, isTurnON])


    const hadleClick = async () => {
        // tắt 
        if (ledAir === 1 && ledFan !== 'NaN' && ledWindow !== "NaN") {
            setIsTurnOn(false)
            await axios.post(`https://api.thingspeak.com/update?api_key=${config.POST_KEY}
            &field1=${temperature}
            &field2=${humidity}
            &field4=0
            `)
                .then(async (data) => {
                    console.log(data.data)
                    if (data.data === 0) {
                        setWarning(true)

                    } else {
                        setWarning(false)
                    }

                })
        }
        else if (ledAir === 0 && ledFan !== 'NaN' && ledWindow !== "NaN") {
            // bật
            setIsTurnOn(true)
            await axios.post(`https://api.thingspeak.com/update?api_key=${config.POST_KEY}
            &field1=${temperature}
            &field2=${humidity}
            &field4=1
            `)
                .then(async (data) => {
                    console.log(data.data)
                    if (data.data === 0) {
                        setWarning(true)

                    } else {
                        setWarning(false)
                    }

                })

        }
        else {
            setIsTurnOn(false)
            await axios.post(`https://api.thingspeak.com/update?api_key=${config.POST_KEY}
            &field1=${temperature}
            &field2=${humidity}
            &field3=0
            &field4=0
            &field5=0
            `)
        }
    }
    return (
        <div className='air'>
            <div className="info-remote">
                <h5 > Điều hòa </h5>
                <i class="lab la-airbnb"></i>
            </div>
            <span>{warning === true ? "Xin vui lòng thử lại!" : ""}</span>

            <span>{isTurnON === true ? "Bạn đang bật điều hòa " : "Bạn đang tắt điều hòa"}</span>
            <div className="btn-turn">
                <button className="turn-on btn btn-danger" onClick={hadleClick}>{isTurnON === true ? "Turn Off" : "Turn On"}</button>
            </div>
        </div>
    )
}

export default Air