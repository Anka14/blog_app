import { useEffect, useState } from 'react';
import './sideBar.css'
import axios from "axios"
import { Link } from 'react-router-dom'

export default function SideBar() {
  const [cats, setCats] = useState([])
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  }, [])
  const logo = require("../../assets/img/pexels-victoria-strelkaph-10467962.jpg");
  return (
    <div className='sideBar'>
      <div className='sidebarItem'>
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={logo}
          alt="logo" className='sidebarImg'
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non architecto suscipit illo, officia nisi, officiis pariatur fugit fugiat velit est, asperiores omnis?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
