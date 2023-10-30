//imports React
import React from 'react';
//imports bootstrap css style sheet
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

//exports LoginForm component
export default class LoginForm extends React.Component {
  //renders what is returned
  //Bootstrap form component code been returned
  render() {
    return (
      <div className="mt-4 py-3 form-container mx-3 mx-md-auto bg-light rounded border border-primary">
        <form className="m-4">
          <h5 className="fs-4 pb-2">Login</h5>
          <div className="row mb-3">
            <label htmlFor={'inputEmail3'} className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type={'email'}
                className="form-control"
                id={'inputEmail3'}
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor={'inputPassword3'}
              className="col-sm-2 col-form-label"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type={'password'}
                className="form-control"
                id={'inputPassword3'}
              ></input>
            </div>
          </div>
          <button type={'submit'} className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
