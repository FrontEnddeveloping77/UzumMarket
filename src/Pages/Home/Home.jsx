import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';
import { Pagination, Navigation } from 'swiper/modules';
import image1 from '../../Assets/item-wrapper-1-images/image.png'
import image2 from '../../Assets/item-wrapper-1-images/image copy.png'
import image3 from '../../Assets/item-wrapper-1-images/image copy 2.png'
import image4 from '../../Assets/item-wrapper-1-images/image copy 3.png'
import { products } from "../../Data/Products-Mashxur";
import { products2 } from "../../Data/Products2";
import { products3 } from "../../Data/Products3";
import { products4 } from "../../Data/Products4";
import { products5 } from "../../Data/Products5";
import { products6 } from "../../Data/Products6";
import { products7 } from "../../Data/Products7";
import { products8 } from "../../Data/Products8";
import { products9} from "../../Data/Products9";

const Home = () => {
    const swiperRef = useRef(null);

    return (
        <div className="Home">
            <div className="Container">
                <div className="swiper-container-wrapper">
                    <Swiper
                        pagination={true}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        <SwiperSlide className='SwiperSlide Slide1'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide2'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide3'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide4'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide5'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide6'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide7'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide8'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide9'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide10'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide11'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide12'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide13'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide14'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide15'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide16'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide17'>7</SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide18'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide19'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide20'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide21'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide22'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide23'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide24'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide25'></SwiperSlide>
                        <SwiperSlide className='SwiperSlide Slide26'></SwiperSlide>
                    </Swiper>

                    <div className="swiper-button-prev-custom">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="swiper-button-next-custom">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="item-wrapper-1">
                    <div className="items">
                        <img src={image1} alt="" />
                        <p>Onalar va bolalar uchun</p>
                    </div>
                    <div className="items">
                        <img src={image2} alt="" />
                        <p>Arzon narxlar kafolati</p>
                    </div>
                    <div className="items">
                        <img src={image3} alt="" />
                        <p>Zamonaviy bozor</p>
                    </div>
                    <div className="items">
                        <img src={image4} alt="" />
                        <p>Foyda mavsumi</p>
                    </div>
                </div>
                <h1>Mashxur {'>'}</h1>
                <div className="product-mashxur">
                    {products.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
                <div className="YandaKorsatishButtonContainer">
                    <button className='YanaKorsatish'>Yana koʻrsatish 10</button>
                </div>
                <div className="BigImage">
                    <div className="BigImageContainer"></div>
                </div>
                <h1>Iqlim nazorati {'>'}</h1>
                <div className="product-mashxur">
                    {products2.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
                <h1>Smartfonlarga chegirmalar {'>'}</h1>
                <div className="product-mashxur">
                    {products3.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
                <h1>Arzon narxlar kafolati {'>'}</h1>
                <div className="product-mashxur">
                    {products4.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
                <h1>Yangi kolleksiya {'>'}</h1>
                <div className="product-mashxur">
                    {products5.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
                <h1>Noutbuklar va konsollar {'>'}</h1>
                <div className="product-mashxur">
                    {products6.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
                <h1>Hammasi salomatlik uchun {'>'}</h1>
                <div className="product-mashxur">
                    {products7.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
                <h1>Sizning go’zalligingiz {'>'}</h1>
                <div className="product-mashxur">
                    {products8.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
                <h1>Sotuv xitlari {'>'}</h1>
                <div className="product-mashxur">
                    {products9.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="img-wrapper">
                                <img src={item.image} alt={item.title} />

                                <div className="badges">
                                    <span className="original">ORIGINAL</span>
                                    <span className="supernarx">SUPERNARX</span>
                                    <span className="chegirma">CHEGIRMA</span>
                                </div>
                            </div>

                            <div className="prices">
                                <h3 className="price">{item.price}</h3>
                                <p className="oldprice">{item.oldprice}</p>
                            </div>

                            <p className="formonth">{item.formonth}</p>

                            <p className="title">{item.title}</p>
                            <p className="comments">⭐{item.comments}</p>

                            <button className="buy-btn">{item.button}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;