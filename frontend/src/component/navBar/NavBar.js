import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3" style={{ backgroundColor: 'white'}}>
      <a className="navbar-brand" href="/home">Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/add">Add Task</a>
          </li>&nbsp;
          <li className="nav-item">
            <a className="nav-link" href="/list">Task List</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
