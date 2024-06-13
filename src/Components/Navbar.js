import React from 'react'
// import { Link } from 'react-router-dom'
export default function Navbar(_props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{_props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">about</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="form-check form-switch text-black">
          <input class="form-check-input" type="checkbox" role="switch" id="togglemode" />
          <label class="form-check-label" for="flexSwitchCheckDefault">mode</label>
        </div>
      </nav>

    </>

  )
}
