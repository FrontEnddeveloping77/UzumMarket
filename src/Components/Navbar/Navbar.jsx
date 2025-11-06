import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import week from "../../Assets/icons/week.png";
import winter from "../../Assets/icons/winter.png";
import hobby from "../../Assets/icons/hobby.png";
import {
    FiSearch,
    FiUser,
    FiHeart,
    FiShoppingBag,
    FiMenu,
} from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="Navbar">

            <div className="nav-top">
                <div className="Container">
                    <div className="top-left">
                        <Link to="/ErrorPage">O'zbekiston</Link>
                        <Link to="/ErrorPage">Topshirish punktlari</Link>
                    </div>

                    <div className="top-right">
                        <Link to="/ErrorPage">Sotuvchi bo’lish</Link>
                        <Link to="/ErrorPage">Topshirish punktini ochish</Link>
                        <Link to="/ErrorPage">Savol-javob</Link>
                        <Link to="/ErrorPage">Buyurtmalarim</Link>
                        <Link to="/ErrorPage">O'zbekcha</Link>
                    </div>
                </div>
            </div>

            <div className="nav-middle">
                <div className="Container">

                    <Link to="/" className="logo">uzum market</Link>

                    <button className="catalog-btn">
                        <FiMenu size={18} />
                        Katalog
                    </button>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Mahsulotlar va turkumlar izlash"
                        />
                        <button className="search-btn">
                            <FiSearch size={18} />
                        </button>
                    </div>

                    <div className="icons">
                        <Link to="/ErrorPage" className="icon">
                            <FiUser size={18} />
                            Kirish
                        </Link>
                        <Link to="/ErrorPage" className="icon">
                            <FiHeart size={18} />
                            Saralangan
                        </Link>
                        <Link to="/ErrorPage" className="icon">
                            <FiShoppingBag size={18} />
                            Savat
                        </Link>
                    </div>

                </div>
            </div>

            <div className="nav-bottom">
                <div className="Container">
                    <Link to="/ErrorPage" className="bottom-item">
                        <img src={week} alt="" />
                        <p>Hafta tovarlari</p>
                    </Link>
                    <Link to="/ErrorPage" className="bottom-item">
                        <img src={winter} alt="" />
                        <p>Qishki kolleksiya</p>
                    </Link>
                    <Link to="/ErrorPage" className="bottom-item">
                        <img src={hobby} alt="" />
                        <p>Xobbi va ijod</p>
                    </Link>
                    <Link to="/ErrorPage" className="Link">Turizm, baliq ovi va ovchilik</Link>
                    <Link to="/Elektronika" className="Link">Elektronika</Link>
                    <Link to="/ErrorPage" className="Link">Maishiy texnika</Link>
                    <Link to="/ErrorPage" className="Link">Kiyim</Link>
                    <Link to="/ErrorPage" className="Link">Poyabzallar</Link>
                    <Link to="/ErrorPage" className="Link">Aksessuarlar</Link>
                    <Link to="/ErrorPage" className="Link">Yana</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
