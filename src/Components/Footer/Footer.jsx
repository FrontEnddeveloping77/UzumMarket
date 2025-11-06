import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Container">
                <div className="top">
                    <div className="ul">
                        <p>Biz haqimizda</p>
                        <li>Topshirish punktlari</li>
                        <li>Vakansiyalar</li>
                    </div>
                    <div className="ul">
                        <p>Foydalanuvchilarga</p>
                        <li>Biz bilan bogʻlanish</li>
                        <li>Savol-Javob</li>
                    </div>
                    <div className="ul">
                        <p>Tadbirkorlarga</p>
                        <li>Uzumda soting</li>
                        <li>Sotuvchi kabinetiga kirish</li>
                        <li>Topshirish punktini ochish</li>
                    </div>
                </div>
            <div className="bottom">
                <div className="left">
                    <p>Maxfiylik kelishuvi</p>
                    <p>Foydalanuvchi kelishuvi</p>
                </div>
                <div className="right">
                    <p>«2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
