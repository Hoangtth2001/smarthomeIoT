import React from 'react'
import './remote.scss'

const Remote = () => {
    const fanRemote = document.querySelector(".fan")
    const windowRemote = document.querySelector(".window")
    const airRemote = document.querySelector(".air")
    const toggleFan = () =>{
        if (fanRemote.style.display === 'block') {
            fanRemote.style.display = 'none'; // Ẩn Fan nếu đang hiển thị
        } else {
            fanRemote.style.display = 'block'; // Hiển thị Fan nếu đang ẩn
        }
    }

    const toggleWindow = () =>{
        if (windowRemote.style.display === 'block') {
            windowRemote.style.display = 'none'; // Ẩn Fan nếu đang hiển thị
        } else {
            windowRemote.style.display = 'block'; // Hiển thị Fan nếu đang ẩn
        }
    }

    const toggleAir = () =>{
        if (airRemote.style.display === 'block') {
            airRemote.style.display = 'none'; // Ẩn Fan nếu đang hiển thị
        } else {
            airRemote.style.display = 'block'; // Hiển thị Fan nếu đang ẩn
        }
    }

    return (
        <div className='remote'>
            <div class="card card-remote" >
                <h5 class="card-title">Điều khiển</h5>
                <div className="icons-home">
                    <i class="las la-fan"></i>
                    <i class="las la-campground"></i>
                    <i class="las la-door-open"></i>
                </div>
                <div class="card-body button-type">
                    <p class="card-text">Hãy điều khiển ngôi nhà của bạn một cách thông thái</p>
                    <button class="btn-fan btn btn-primary" onClick = {toggleFan} >Quạt trần</button>
                    <button class="btn btn-success" onClick={toggleWindow}>Cửa sổ</button>
                    <button class="btn btn-danger" onClick={toggleAir}>Điều hòa </button>
                </div>
            </div>
        </div>
    )
}

export default Remote