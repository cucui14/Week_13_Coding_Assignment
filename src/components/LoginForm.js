import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="mt-4 py-3 form-container mx-auto bg-light rounded border border-primary">
        <form className="m-4">
          <h5 className="fs-4 pb-2">Login</h5>
          <div className="row mb-3">
            <label for={'inputEmail3'} className="col-sm-2 col-form-label">
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
            <label for={'inputPassword3'} className="col-sm-2 col-form-label">
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
