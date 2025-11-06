import React, { useState } from "react";
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
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="Navbar" style={{ position: 'relative' }}>

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
                <div className="Container" style={{ alignItems: 'center' }}>

                    <button
                        className="catalog-btn"
                        style={{ display: 'none' }}
                    >
                        <FiMenu size={18} />
                        Katalog
                    </button>

                    <Link to="/" className="logo">uzum market</Link>

                    {/* Mobile hamburger */}
                    <button
                        className="catalog-btn"
                        onClick={() => setMobileOpen(prev => !prev)}
                        aria-label="menu"
                        style={{ marginLeft: 'auto', display: 'flex' }}
                    >
                        <FiMenu size={18} />
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
                            <p>Kirish</p>
                        </Link>
                        <Link to="/ErrorPage" className="icon">
                            <FiHeart size={18} />
                            <p>Saralangan</p>
                        </Link>
                        <Link to="/ErrorPage" className="icon">
                            <FiShoppingBag size={18} />
                            <p>Savat</p>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Mobile menu block */}
            <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Link to="/ErrorPage">Kirish</Link>
                    <Link to="/ErrorPage">Sotuvchi bo’lish</Link>
                    <Link to="/ErrorPage">Buyurtmalarim</Link>
                    <Link to="/Elektronika">Elektronika</Link>
                    <Link to="/ErrorPage">Kiyim</Link>
                    <Link to="/ErrorPage">Poyabzallar</Link>
                    <Link to="/ErrorPage">Aksessuarlar</Link>
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
