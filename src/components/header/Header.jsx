import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'



const Header = ({ type }) => {

    return (

        <nav class="header navbar navbar-expand-lg navbar-dark fixed-top  bg-dark ">
            
            <div className="container">

                <Link to="/" className="navbar-brand">SmartHome</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Tran thanh Hoang <span className="sr-only"></span></a>
                        </li>

                        <li className="nav-item myhome-menu  dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                MyHome
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="  dropdown-item" href="#"><Link className='link' to='/myhome'>Nhà của tôi</Link></a>
                                <div className=" dropdown-divider"></div>
                                <a className=" dropdown-item" href="/"><span>{type === 'login' ? <Link className='link' to='/login'>Đăng nhập</Link> : <Link to="/">Đăng xuất</Link>}</span></a>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Header