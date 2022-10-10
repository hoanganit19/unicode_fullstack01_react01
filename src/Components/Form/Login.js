import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Login extends Component {

  constructor() {
    super();
    this.state = {
        form: {
            email: '',
            password: ''
        },
        errors: {
            email: '',
            password: ''
        }
    }
  }  

//  this.state = {
//   errors: {
//     email: {
//       required: 'Bắt buộc phải nhập'
//       email: 'Email không đúng định dạng'
//     },
//     password: {
//       required: 'Bắt buộc phải nhập',
//       strength: 'Mật khẩu yếu'
//     }
//   }
//  }

  handleSubmitForm = (e) => {
    e.preventDefault(); 
    
    const {email, password} = this.state.form;

    const errors = {};
   
    if (email==''){
        errors.email = 'Vui lòng nhập email';
    }

    if (password==''){
        errors.password = 'Vui lòng nhập mật khẩu'
    }

    this.setState({
        errors: errors
    })

    if (Object.keys(errors).length === 0){
        toast.success('Validate thành công');
    }else{
        toast.error('Vui lòng kiểm tra lại dữ liệu bên dưới');
    }

  }

  handleChangeValue = (e) => {
    const data = {...this.state.form};
    data[e.target.name] = e.target.value;
    this.setState({
        form: data
    })
   
  }

  render() {

    const {errors} = this.state;

    return (
      <>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-7">
              <h2>Login</h2>
              <form onSubmit={this.handleSubmitForm}>
                <div className="mb-3">
                  <label htmlFor="lbl_email">Email</label>
                  <input
                    type="text"
                    id="lbl_email"
                    className={`form-control ${errors.email?'is-invalid':''}`}
                    placeholder="Email..."
                    name="email"
                    onChange={this.handleChangeValue}
                  />
                  {
                    errors.email 
                    ?
                    <div className="invalid-feedback">
                        {errors.email}
                    </div>
                    :
                    null
                  }
                  
                </div>

                <div className="mb-3">
                  <label htmlFor="lbl_password">Password</label>
                  <input
                    type="password"
                    id="lbl_password"
                    className={`form-control ${errors.password?'is-invalid':''}`}
                    placeholder="Password..."
                    name="password"
                    onChange={this.handleChangeValue}
                  />
                  {
                    errors.password 
                    ?
                    <div className="invalid-feedback">
                        {errors.password}
                    </div>
                    :
                    null
                  }
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    );
  }
}

export default Login;
