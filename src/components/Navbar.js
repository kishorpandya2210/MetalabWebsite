import React from 'react'
import metalabLogo from '../metalabLogo1.png'
import { Link, withRouter } from "react-router-dom"
import { Button, ButtonGroup, Dropdown, Nav } from 'react-bootstrap'
import SplitButton from 'react-bootstrap/SplitButton'
import DropdownButton from 'react-bootstrap/DropdownButton'

function Navbar(props) {
    return (
        <div style={{
          justifyContent: 'center',
          alignContent: 'center'
        }}>
          <Nav style={{
            justifyContent: 'center',
            alignContent: 'center'
          }}>
            <div style={{
              display: 'flex'
            }}>
              <div>
                <img alt="Metalab Logo"
                src={metalabLogo}/>
                <div><Link class="navbar-brand" to="/" style={{
                  color: "red",
                  fontSize: "37px",
                  alignContent: "center"
                  }}>
                  Metalab
                </Link></div>
                
              </div>
              <div>
              <p>hello</p>
              <ul style={{
                display: 'flex',
                listStyle: 'none',
                fontSize: '25px'
              }}>
                <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                  <Link class="nav-link" to="/">
                  <Button variant="link">Home</Button>
                  <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/testing" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/testing">
                <Dropdown autoClose="outside" as={ButtonGroup}>
                  <Button variant="link">Testing and Analysis</Button>
                  <Dropdown.Toggle split variant="link" id="dropdown-split-basic"/>
                  <Dropdown.Menu style={{
                    display: 'flex'
                  }}>
                    <Dropdown.Item><Button variant="link" onClick="scroll('mechanicalpg')">Mechanical</Button></Dropdown.Item>
                    <Dropdown.Item>Chemical</Dropdown.Item>
                    <Dropdown.Item>Metallography</Dropdown.Item>
                    <Dropdown.Item>Polymer</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                <Button variant="link">Contact</Button>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/quote" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/quote">
                <Button variant="link">Get Quote</Button>
                </Link>
              </li>
                </ul>
              </div>
            </div>
          </Nav>
          <hr></hr>
        </div>
    )
}

export default withRouter(Navbar)
