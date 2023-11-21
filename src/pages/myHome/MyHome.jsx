import React, { useEffect } from 'react'
import './myHome.scss'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../store/actions/home"
import DropdownRemote from '../../components/dropdownRemote/DropdownRemote'
import Fan from '../../components/fan/Fan'
import Window from '../../components/window/Window'
import Air from '../../components/air/Air'
const MyHome = () => {

  let dispatch = useDispatch()
  let home = useSelector(state => state.app.homeData)
  let temperature = parseFloat(home.field1).toFixed(2)
  let humidity = parseFloat(home.field2).toFixed(2)

  useEffect(() => {
    // Function to fetch data and update state
    const fetchData = async () => {
      try {
        dispatch(actions.getHome());

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function immediately and then every 10 seconds
    fetchData();

    const interval = setInterval(fetchData, 2000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <div className="myhome">

      <div className="temperature ">
        <Fan />
        <Window />
        <Air />
        <div className="temper card">
          <div className="info card-body">
            <h2 className="card-text"> Ngôi nhà của bạn </h2>
            <h5 className="card-title">Nhiệt độ</h5>
            <h2 className='icon'><i className="las la-thermometer-full"></i></h2>
            <h4>{temperature} độ C
            </h4>

            <span>{temperature > 35 ? "Nhiệt độ cao bạn nên kiểm tra ngôi nhà của mình trước khi bật điều hòa" : "Nhiệt độ ngôi nhà khá thoáng mát"}</span>
            <div className="note">
            </div>
            <DropdownRemote />
          </div>
        </div>
      </div>

      <div className="humidity ">
        <div className="humid card">
          <div className="info card-body">
            <h2 className="card-text"> Độ ẩm</h2>
            <h5 className="card-title">Độ ẩm hiện tại</h5>
            <h2 className='icon'><i className="las la-tint"></i></h2>
            <h4>{humidity} %</h4>
            <span>{humidity > 70 ? "Độ ẩm cao bạn nên quan tâm đến việc làm mát và thông thoáng ngôi nhà của mình" : "Ngôi nhà của bạn có độ ẩm ổn định"}</span>
            <div className="note">
            </div>

            <DropdownRemote />
          </div>
        </div>
      </div>
    </div>







  )
}

export default MyHome