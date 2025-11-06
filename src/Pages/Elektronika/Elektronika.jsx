import React from 'react'
import { products2 } from "../../Data/Products2";
import { products3 } from "../../Data/Products3";
import { products6 } from "../../Data/Products6";

const Elektronika = () => {
    return (
        <div className='Div'>
            <div className="Container">
                <h1 style={{margin: '10px 0'}}>Iqlim nazorati {'>'}</h1>
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
                <h1 style={{margin: '10px 0'}}>Smartfonlarga chegirmalar {'>'}</h1>
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
                <h1 style={{margin: '10px 0'}}>Noutbuklar va konsollar {'>'}</h1>
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
            </div>
        </div>
    )
}

export default Elektronika
