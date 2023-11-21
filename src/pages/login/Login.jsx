import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login ">

            <div className='loginform'>
                <form className='form' >
                    <h3>Đăng Nhập</h3>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <span >Nếu bạn không có tài khoản nào hãy <Link className='linkSign' to='/register'>Đăng ký</Link> </span>
                    <span className='loginGG'><i className="ggicon lab la-google-plus-g"></i> Login with google</span>

                    <button type="submit" className="submit btn btn-primary">Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}

export default Login