import React from 'react'
import './signup.scss'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div className="signUp ">
        <div className='loginform'>
          <form className='form' >
            <h3>Đăng ký</h3>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Nhập lại mật khẩu</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="vui lòng nhập lại mật khẩu" />
            </div>
            <span className='loginGG'>Nếu bạn đã có tài khoản, xin hãy <Link to="/login">Đăng nhập</Link></span>

            <span className='loginGG'><i className="ggicon lab la-google-plus-g"></i> Login with google</span>

            <button type="submit" className="submit btn btn-primary">Đăng ký</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup