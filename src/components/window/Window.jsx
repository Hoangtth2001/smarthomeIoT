import React, { useEffect, useState } from 'react'
import './window.scss'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { config } from '../../config'


const Window = () => {
  const [isTurnON, setIsTurnOn] = useState(false)
  const [warning, setWarning] = useState(false)
  let home = useSelector(state => state.app.homeData)
  let temperature = parseFloat(home.field1).toFixed(2)
  let humidity = parseFloat(home.field2).toFixed(2)
  let ledFan = parseInt(home.field3, 10)
  let ledAir = parseInt(home.field4, 10)
  let ledWindow = parseInt(home.field5, 10)
  // mau xanh la
  useEffect(() => {
    const setButon = () => {
      if (ledWindow === 1) {
        setIsTurnOn(true)
      }
      else {
        setIsTurnOn(false)
      }
    }
    setButon()
  }, [ledWindow, isTurnON])


  const hadleClick = async () => {
    // tắt 
    if (ledWindow === 1 && ledAir !== 'NaN' && ledFan !== 'NaN') {
      setIsTurnOn(false)
      await axios.post(`https://api.thingspeak.com/update?api_key=${config.POST_KEY}
      &field1=${temperature}
      &field2=${humidity}
      &field5=0
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

    // bật
    else if (ledWindow === 0 && ledAir !== 'NaN' && ledFan !== 'NaN') {
      setIsTurnOn(true)
      await axios.post(`https://api.thingspeak.com/update?api_key=${config.POST_KEY}
      &field1=${temperature}
      &field2=${humidity}
      &field5=1
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
    // reset
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

    // console.log(isTurnON)
  }
  return (
    <div className='window'>
      <div className="info-remote">
        <h5 >Cửa sổ </h5>
        <i class="las la-door-open"></i>
      </div>
      <span>{warning === true ? "Xin vui lòng thử lại!" : ""}</span>
      <span className='state'>{isTurnON === true ? "Bạn đang mở cửa sổ" : "Bạn đang đóng cửa sổ"}</span>
      <div className="btn-turn">
        <button className="turn-on btn btn-success" onClick={hadleClick}>{isTurnON === true ? "Turn Off" : "Turn On"}</button>
      </div>
    </div>
  )
}

export default Window