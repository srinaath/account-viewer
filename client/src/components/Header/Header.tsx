import * as React from 'react'
import { Link } from 'react-router-dom'
import * as MenuJson from '../../../static/data/menu-links.json'
import './Header.scss'

const Header: any = (): any => (
  <div className="Header full-site-width d-flex align-items-center position-relative">
    <div className="Header__logo">
      <img src="static/images/caseys-logo.svg" alt="Casey's"/>
    </div>
    <ul className="list-inline m-0">
    {MenuJson.map((menuItem: any) => (
      <li key="{menuItem.id}" className="list-inline-item px-3 text-uppercase">
        <Link to={menuItem.url}> {menuItem.label} </Link>
      </li>
    ))}
    </ul>
  </div>
)
export default Header
