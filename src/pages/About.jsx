import group1 from '../images/Group 1.svg';
import b3 from '../images/b3.jpg';
import email from '../images/2089181.png';
import phone from '../images/img_302780.png';
import map from '../images/map-svgrepo-com1.svg';

// import '../style-scss/style.css';
import classes from './../style-scss/style.module.scss'
import React from 'react';

const About = () => {
    return (
        <div className="container55">
            <div class="starttext_about">
                <h1>About us</h1>
                <p>
                    We are the best golf club. We have golf courses all over the world. And the best coaches
                </p>
            </div>

            <div class="svg">
                <img src={group1}/>
            </div>

            <div class="infa_golf2">
                <div class="img_part3">
                    <img src={b3}/>
                </div>
                <div class="text_part4">
                    <h1 class="name_2">Improve your golf swing </h1>
                    <p>The average speed of hitting a golf ball is 40 meters per second, which is equal to 140 kilometers per
                        hour. When the ball hits the legendary American golfer Tiger Woods, then his speed reaches 200
                        kilometers per hour.
                    </p>
                </div>

            </div>
            <section class="w3l-text-faq-9">
                <div class="faq-9 ">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 faq">
                                <div class="accordion">
                                    <div>                                     
                                        <span class="target-fix" id="accordion1"></span>
                                        <a href="#accordion1" id="open-accordion1" title="open" class=" ">Golf Facts</a>
                                        <a href="#accordion" id="close-accordion1" title="close" class=" ">Golf Facts</a>                              
                                        <div class="accordion-content">
                                            <p class="para ">The longest 515 yd (470 m) impact racer in golf history was made by
                                                Anglo-American golf professional and kinesiology expert Michael Hawk Austin.
                                                The first 18-hole course appeared on a sheep farm. </p>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="target-fix" id="accordion2"></span>
                                        <a href="#accordion2" id="open-accordion2" title="open" class=" ">What Is The Best Place
                                            To Start?</a>
                                        <a href="#accordion" id="close-accordion2" title="close" class=" ">What Is The Best
                                            Place To Start? ?</a>
                                        <div class="accordion-content">
                                            <p class="para ">This information is intended for beginners who have never tried
                                                golf before and have not been to golf clubs. A few simple tips will make your
                                                stay comfortable and will allow you to enjoy your first strokes.
                                                one.
                                                Let's dispel the myth a little that, once you get to a golf club, you
                                                immediately go to play on an 18-hole course. If you do not have a Green Card - a
                                                document that allows you to play on any golf course, you will only have a
                                                practice area at your disposal. By the way, you can get a Green Card by passing
                                                a theoretical and practical exam after training with our trainer.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="target-fix" id="accordion3"></span>
                                        <a href="#accordion3" id="open-accordion3" title="open" class=" ">How To Choose A Sick
                                            ?</a>
                                        <a href="#accordion" id="close-accordion3" title="close" class=" ">How To Choose A Sick
                                            ?</a>
                                        <div class="accordion-content">
                                            <p class="para ">Our advice to golf beginners: choose balls of the basic design (2
                                                pieces). Inexpensive and guaranteeing you optimal range, they are perfect for
                                                your first courses... until their tragic end in the water!
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <span class="target-fix" id="accordion4"></span>
                                        <a href="#accordion4" id="open-accordion4" title="open" class=" ">What Clothes To
                                            Wear?</a>
                                        <a href="#accordion" id="close-accordion4" title="close" class=" ">What Clothes To
                                            Wear?</a>
                                        <div class="accordion-content">
                                            <p class="para ">Slacks or shorts below the knee (skirts and dresses designed for
                                                golf are acceptable for women). Baseball cap. Sweater or windbreaker (for cool
                                                weather). Special golf boots or sports shoes with flat soles.</p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <span class="target-fix" id="accordion5"></span>
                                        <a href="#accordion5" id="open-accordion5" title="open" class=" ">Prices</a>
                                        <a href="#accordion" id="close-accordion5" title="close" class=" ">Prices</a>
                                        <div class="accordion-content">
                                            <p class="para ">Champion 18-hole course 9 holes<br/>1 game (weekdays/weekends) - 95/110 BYN<br/>
                                            Champion 18-hole course 18 holes<br/>1 game (weekdays/weekends) - 130/160 BYN<br/>
                                            Academic 9-hole course<br/>1 day (weekdays/weekends) - 35/40 BYN<br/>Caddy services (1 game)
                                            <br/>25 BYN
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="players_1">
                <div class="facilities">
                    <h3>facilities</h3>
                    <h2>250</h2>
                </div>
                <div class="facilities">
                    <h3>golf area</h3>
                    <h2>170+</h2>
                </div>
                <div class="facilities">
                    <h3>golf clients</h3>
                    <h2>160+</h2>
                </div>
                <div class="facilities">
                    <h3>get awards</h3>
                    <h2>200+</h2>
                </div>
            </div>
            <footer>
                <div class="hours_of_operation">
                    <p>Mon-Wed: 6:00am-8:00pm</p>
                    <p>Thurs-Fri:6:30am-7:30pm</p>
                    <p>Sat:7:00am-9:00pm</p>
                    <p>Sun:8:00am-8:00pm</p>
                </div>
                <div class="quick_links1-2">
                    <p>Blog</p>
                    <p>Blog single</p>
                </div>
                <div class="quick_links3-4">
                    <p>Golf</p>
                    <p>Mini golf</p>
                </div>
                <div class="contact">
                    <div class="email">
                        <div class="photo">
                            <img src={email} alt="#"/>
                        </div>
                        <p>golf_nc@mail.com</p>
                    </div>
                    <div class="phone">
                        <div class="photo">
                            <img src={phone} alt="#"/>
                        </div>
                        <p> +375292363203</p>
                    </div>
                    <div class="place">
                        <div class="photo">
                            <img src={map} alt="#"/>
                        </div>
                        <p> California, 75 West Rock</p>
                    </div>
                </div>
            </footer>
        </div>                                                                          
    );
}

export default About;