import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import summer from "./../../assets/summerh.png"
import summer2 from "./../../assets/summer2.jpg";
import summer3 from "./../../assets/summer3.avif"
import sale1 from "./../../assets/sale1.png"
import sale2 from "./../../assets/sale2.png"
import arrivals1 from "./../../assets/arrivals1.png";
import arrivals2 from "./../../assets/arrivals2.png";
import arrivals3 from "./../../assets/arrivals3.png";
import arrivals4 from "./../../assets/arrivals4.png";
import arrivals5 from "./../../assets/arrivals5.png";
import arrivals6 from "./../../assets/arrivals6.png";
import arrivals7 from "./../../assets/arrivals7.png";
import arrivals8 from "./../../assets/arrivals8.png";
import saving1 from "./../../assets/saving1.png";
import saving2 from "./../../assets/saving2.png";
import saving3 from "./../../assets/saving3.png";
import saving4 from "./../../assets/saving4.png";
import saving5 from "./../../assets/saving5.png";
import better1 from "./../../assets/better1.png";
import better2 from "./../../assets/better2.png";
import catMen1 from "./../../assets/catMen1.png";
import catMen2 from "./../../assets/catMen2.png";
import catMen3 from "./../../assets/catMen3.png";
import catMen4 from "./../../assets/catMen4.png";
import catMen5 from "./../../assets/catMen5.png";
import catMen6 from "./../../assets/catMen6.png";
import catMen7 from "./../../assets/catMen7.png";
import catMen8 from "./../../assets/catMen8.png";
import catWom1 from "./../../assets/catWom1.png";
import catWom2 from "./../../assets/catWom2.png";
import catWom3 from "./../../assets/catWom3.png";
import catWom4 from "./../../assets/catWom4.png";
import nike from "./../../assets/nike.png";
import hm from "./../../assets/h&m.png";
import levis from "./../../assets/levis (2).png";
import polo from "./../../assets/polo.png"
import puma from "./../../assets/puma.png";
import limelight1 from "./../../assets/limelight1.png";
import limelight2 from "./../../assets/limelight2.png";
import limelight3 from "./../../assets/limelight3.png";
import limelight4 from "./../../assets/limelight4.png";
import feedback1 from "./../../assets/feddback1.jpg";
import feedback2 from "./../../assets/feedback2.jpg";
import feedback3 from "./../../assets/feedback3.jpg";



//components
import Sale from "./Components/Sale/Sale";
import Arrivals from "./Components/Arrivals/Arrivals";
import Categories from "./Components/Categories/Categories";
import Card from "../../components/Card/Card";
import SliderHead from "./Components/SliderHead/SliderHead";
import Feedback from "./Components/Feedback/Feedback";



const Home = () => {
   return ( 
        <>
            <section className="slider">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                <SwiperSlide><SliderHead img={summer}/></SwiperSlide>
                <SwiperSlide><SliderHead img={summer2}/></SwiperSlide>
                <SwiperSlide><SliderHead img={summer3}/></SwiperSlide>
                
             </Swiper>                
            </section>
            <section className="sale">
                <div className="container">
                    <div className="sale__row">
                        <Sale  title="Low Price" subtitle="High Coziness" img={sale1}/>
                        <Sale  title="Beyoung Presents" subtitle="Breezy Summer Style" img={sale2}/>
                    </div>
                </div>
            </section>
            <section className="arrivals">
                <div className="container">
                    <h2 className="arrivals__title">
                        New Arrival
                    </h2>
                    <div className="arrivals__row">

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            pagination={{
                            type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><Arrivals title='Knitted Joggers' img={arrivals1} /></SwiperSlide>
                            <SwiperSlide><Arrivals title='Full Sleeve' img={arrivals2} /></SwiperSlide>
                            <SwiperSlide> <Arrivals title='Active T-Shirts' img={arrivals3} /></SwiperSlide>
                            <SwiperSlide> <Arrivals title='Urban Shirts' img={arrivals4} /></SwiperSlide>
                            <SwiperSlide> <Arrivals title='Urban Shirts' img={arrivals5} /></SwiperSlide>
                            <SwiperSlide> <Arrivals title='Urban Shirts' img={arrivals6} /></SwiperSlide>
                            <SwiperSlide> <Arrivals title='Urban Shirts' img={arrivals7} /></SwiperSlide>
                            <SwiperSlide> <Arrivals title='Urban Shirts' img={arrivals8} /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="saving">
                 <div className="container">
                    <h2 className="saving__title">
                         Big Saving Zone
                    </h2>
                    <div className="saving__top">
                        <div className="saving__top-card top-padding" style={{background: `url(${saving1}) center/cover no-repeat`}}>
                           <a href="#!" className="saving__card-link"></a>
                                <p className="saving__card-title">Hawaiian <br/> Shirts</p>
                                <p className="saving__card-subtitle">Dress up in summer vibe</p>
                                
                                <p className="saving__card-sales">UPTO 50% OFF</p>
                                <p className="saving__card-arrow">
                                    <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
                                </p>
                                <button className="saving__card-btn">SHOP NOW</button>
                         </div>
                         <div className="saving__top-card" style={{background: `url(${saving2}) center/cover no-repeat`}}>
                         <a href="#!" className="saving__card-link"></a>
                                <p className="saving__card-title">Printed <br/> T-Shirt</p>
                                <p className="saving__card-subtitle">New Designs Every Week</p>
                                <p className="saving__card-sales">UPTO 40% OFF</p>
                                <p className="saving__card-arrow">
                                    <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
                                </p>
                                <button className="saving__card-btn">SHOP NOW</button>
                         </div>
                         <div className="saving__top-card " style={{background: `url(${saving3}) center/cover no-repeat`}}>
                         <a href="#!" className="saving__card-link"></a>
                                <p className="saving__card-title text-color">Cargo <br/> Joggers</p>
                                <p className="saving__card-subtitle text-color">Move with style & comfort</p>
                                
                                <p className="saving__card-sales text-color">UPTO 50% OFF</p>
                                <p className="saving__card-arrow">
                                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529" stroke="#3C4242" stroke-width="2" stroke-linecap="round"/></svg>
                                </p>
                                <button className="saving__card-btn text-color">SHOP NOW</button>
                         </div>
                    </div>
                    <div className="saving__bottom">
                        <div className="saving__top-card bottom-imgwidth " style={{background: `url(${saving4}) center/cover no-repeat`}}>
                                <p className="saving__card-title text-color">Urban <br/> Shirts</p>
                                <p className="saving__card-subtitle text-color">Live In Confort</p>
                                
                                <p className="saving__card-sales text-color">UPTO 60% OFF</p>
                                <p className="saving__card-arrow text-color">
                                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529" stroke="#3C4242" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </p>
                                <button className="saving__card-btn text-color">SHOP NOW</button>
                         </div>
                            <div className="saving__top-card bottom-imgwidth " style={{background: `url(${saving5}) center/cover no-repeat`}}>
                                <p className="saving__card-title text-color">Oversized <br/> T-Shirts</p>
                                <p className="saving__card-subtitle text-color">Street Style Icon</p>
                                
                                <p className="saving__card-sales text-color">UPTO 60% OFF</p>
                                <p className="saving__card-arrow">
                                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529" stroke="#3C4242" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </p>
                                <button className="saving__card-btn text-color">SHOP NOW</button>
                            </div>
                    </div>
                 </div>
            </section>
            <section className="better">
                <div className="container">
                    <div className="better__row">
                        <div className="better__left" style={{background: `url(${better1}) center/cover no-repeat` }}>
                            <h2 className="better__title">WE MADE YOUR EVERYDAY <br/> FASHION BETTER!</h2>
                            <p className="better__text">
                                In our journey to improve everyday fashion, <br/>
                                euphoria presents EVERYDAY wear range - <br/> 
                                Comfortable & Affordable fashion 24/7
                            </p>
                            <button className="better__btn">Shop Now</button>
                        </div>
                        <div className="better__right">
                            <img className="better__right-img" src={better2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="categories">
                <div className="container">
                    <h2 className="categories__title">
                        Categories For Men
                    </h2>
                    <div className="categories__cards">
                         <Categories title="Shirts" img={catMen1}/>
                         <Categories title="Printed T-Shirts" img={catMen2}/>
                         <Categories title="Plain T-Shirt" img={catMen3}/>
                         <Categories title="Polo T-Shirt" img={catMen4}/>
                         <Categories title="Hoodies & Sweetshirt" img={catMen5}/>
                         <Categories title="Jeans" img={catMen6}/>
                         <Categories title="Activewear" img={catMen7}/>
                         <Categories title="Boxers" img={catMen8}/>
                         
                    </div>
                </div>
            </section>
            <section className="categories">
                <div className="container">
                    <h2 className="categories__title">
                         Categories For Women
                    </h2>
                    <div className="categories__cards">
                         <Categories title="Hoodies & Sweetshirt" img={catWom1}/>
                         <Categories title="Coats & Parkas" img={catWom2}/>
                         <Categories title="Tees & T-Shirt" img={catWom3}/>
                         <Categories title="Boxers" img={catWom4}/>
                    </div>
                </div>
            </section>
            <section className='brands'>
                <div className="container">
                    <div className="brands__card">
                        <div className="brands__text">
                            <p className="brands__title">Top Brands Deal</p>
                            <p className="brands__desc">
                                Up To <span className="brands__desc-yellow">60%</span> off on brands
                            
                            </p>
                        </div>
                        <ul className='brands__list'>
                            <li><a className="brands__link1" href="#!"><img src={nike} alt="" /></a></li>
                            <li><a className="brands__link2" href="#!"><img src={hm} alt="" /></a></li>
                            <li><a className="brands__link3" href="#!"><img src={levis} alt="" /></a></li>
                            <li><a className="brands__link4" href="#!"><img src={polo} alt="" /></a></li>
                            <li><a className="brands__link5" href="#!"><img src={puma} alt="" /></a></li>
                        </ul>
                    </div>
                        
                 </div>
            </section>
            <section className="limelight">
                <div className="container">
                    <h2 className="limelight__title">
                         In The Limelight
                    </h2>
                    <div className="limelight__cards">
                        <Card image={limelight1} title="Black Sweatshirt with ...." subtitle="Jhanvi’s  Brand" price="$123.00"/>
                        <Card image={limelight2} title="line Pattern Black H..." subtitle="AS’s  Brand" price="$37.00"/>
                        <Card image={limelight3} title="Black Shorts" subtitle="MM’s  Brand" price="$37.00"/>
                        <Card image={limelight4} title="Levender Hoodie with ...." subtitle="Nike’s  Brand" price="$119.00"/>
                    </div>
                </div>
            </section>
            <section className="feedback">
                <div className="container">
                    <h2 className="feedback__title">Feedback</h2>
                    <div className="feedback__row">
                        <Feedback 
                         img={feedback1}
                         title="Floyd Miles"
                            desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        "
                        />
                        <Feedback 
                         img={feedback2}
                         title="Ronald Richards"
                         desc="ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                        />
                        <Feedback 
                         img={feedback3}
                         title="Savannah Nguyen"
                         desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                         Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Home;