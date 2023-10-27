import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

export default class Nav extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-primary"
        data-bs-theme={'dark'}
      >
        <div className="container">
          <a className="navbar-brand" href={'#'}>
            Super Cool Website
          </a>
          <button
            className="navbar-toggler collapsed"
            type={'button'}
            data-bs-toggle={'collapse'}
            data-bs-target={'#navbarColor02'}
            aria-controls={'navbarColor02'}
            aria-expanded={'false'}
            aria-label={'Toggle navigation'}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id={'navbarColor02'}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current={'page'} href={'#'}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={'#'}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={'#'}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={'#'}>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
