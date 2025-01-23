import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){
  let [search, setSearch] = useState("")

  function postSearch(e){
    e.preventDefault()
    props.changeSearch(search)
    setSearch("")
  }
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              MyNewsAPP
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" onClick={()=>props.changeSearch("")} to="/">
                    All
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Politics" onClick={()=>props.changeSearch("")}>
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Crime" onClick={()=>props.changeSearch("")}>
                    Crime
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Education" onClick={()=>props.changeSearch("")}>
                    Education
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="Science" onClick={()=>props.changeSearch("")}>
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Technology" onClick={()=>props.changeSearch("")}>
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Sports" onClick={()=>props.changeSearch("")}>
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Cricket" onClick={()=>props.changeSearch("")}>
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="IPL" onClick={()=>props.changeSearch("")}>
                        IPL
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Covid-19" onClick={()=>props.changeSearch("")}>
                        Covid-19
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="India" onClick={()=>props.changeSearch("")}>
                        India
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="World" onClick={()=>props.changeSearch("")}>
                        World
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Languages
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" onClick={()=>props.changeLanguage("hi")}>Hindi</button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={()=>props.changeLanguage("en")}>English</button>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={postSearch}>
                <input className="form-control me-2" type="search"name="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"  />
                <button className="btn btn-outline-dark" type="submit"> Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
}
