import React, { useEffect, useState } from 'react'
import './fan.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { config } from '../../config'
const Fan = () => {
  const [isTurnON, setIsTurnOn] = useState(false)
  const [warning, setWarning] = useState(false)

  let home = useSelector(state => state.app.homeData)
  let temperature = parseFloat(home.field1).toFixed(2)
  let humidity = parseFloat(home.field2).toFixed(2)
  let ledFan = parseInt(home.field3, 10)
  let ledAir = parseInt(home.field4, 10)
  let ledWindow = parseInt(home.field5, 10)
  // xanh dương


  useEffect(() => {
    const setButon = () => {
      if (ledFan === 1) {
        setIsTurnOn(true)
      }
      else {
        setIsTurnOn(false)
      }
    }
    setButon()

  }, [ledFan, isTurnON])

  const hadleClick = async () => {
    if (ledFan === 1 && ledWindow !== 'NaN' && ledAir !== 'NaN') {
      // tắt
      setIsTurnOn(false)
      await axios.post(`https://api.thingspeak.com/update?api_key=${config.POST_KEY}
      &field1=${temperature}
      &field2=${humidity}
      &field3=0
      `)
      .then(async (data) => {
        console.log(data.data)
        if (data.data === 0) {
          setWarning(true)

        }
        else {
          setWarning(false)
        }
      })
    }

    else if (ledFan === 0 && ledWindow !== 'NaN' && ledAir !== 'NaN') {
      // bật
      setIsTurnOn(true)
      await axios.post(`https://api.thingspeak.com/update?api_key=${config.POST_KEY}
      &field1=${temperature}
      &field2=${humidity}
      &field3=1
   
      `)
      .then(async (data) => {
        console.log(data.data)
        if (data.data === 0) {
          setWarning(true)

        }
        else {
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
    <div className='fan'>
      <div className="info-remote">
        <h5 > Quạt trần </h5>
        <i class="las la-fan"></i>
      </div>
      <span>{warning === true ? "Xin vui lòng thử lại!" : ""}</span>

      <span>{isTurnON === true ? "Bạn đang bật quạt" : "Bạn đang tắt quạt"}</span>
      <div className="btn-turn">
        <button className="turn-on btn btn-primary" onClick={hadleClick}>{isTurnON === true ? "Turn Off" : "Turn On"}</button>
      </div>
    </div>
  )
}

export default Fan