import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Cameron Vanriel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" id="home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about" id="about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/work" id="work">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact" id="contact">Contact</a>
        </li>
      </ul>
      <span className="navbar-text">
        Dedicated to a seamless User Experience
      </span>
    </div>
  </div>
</nav>
    );
}
export default Header;