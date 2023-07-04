import start from '../images/start.jpg';
import b2 from '../images/b2.jpg';
import licensed from '../images/licensed-image.jpg';
import maria from '../images/maria.jpg';
import jordan from '../images/Jordan-Spieth.jpg';
import email from '../images/2089181.png';
import phone from '../images/img_302780.png';
import map from '../images/map-svgrepo-com1.svg';
import { useState } from 'react'
import data from './../components/data'


import Contacts from '../pages/Contacts'
import { Routes, Route, Link } from 'react-router-dom'

// import '../style-scss/style.css';
import classes from './../style-scss/style.module.scss'
import React from 'react';



const Home = () => {

    // хуки для работы с рефами
    const [hideOrNot1, setHideOrNot1] = useState(true)
    const [hideOrNot2, setHideOrNot2] = useState(true)
    const [hideOrNot3, setHideOrNot3] = useState(true)

    // создание рефов
    const text1ref = React.createRef();
    const text2ref = React.createRef();
    const text3ref = React.createRef();

    const handleClick1 = e => {
        setHideOrNot1(!e);
        text1ref.current.textContent = "Eldrick Tont Woods is an American golfer and 15-time Major champion. Athlete of the Year Laureus World Sports Awards: 2000, 2001.of the Year Laureus World Sports Awards: 2000, 2001.Following an outstanding junior, college, and amateur golf career, Woods turned professional in 1996 at the age of 20. By the end of April 1997, he had won three PGA Tour events in addition to his first major, the 1997 Masters, which he won by 12 strokes in a record-breaking performance. He reached number one in the Official World Golf Ranking for the first time in June 1997, less than a year after turning pro. Throughout the first decade of the 21st century, Woods was the dominant force in golf. He was the top-ranked golfer in the world from August 1999 to September 2004 (264 consecutive weeks) and again from June 2005 to October 2010 (281 consecutive weeks). During this time, he won 13 of golf's major championships."
    }

    const handleClick2 = e => {
        setHideOrNot2(!e);
        text2ref.current.textContent = `Maria Vitalievna Balikoeva is a Russian golfer. The first Russian woman to become a full member of the Ladies European Tour in 2007.Maria's parents Vitaly and Galina initially enrolled her in the Moscow ballet school "Inspiration". She studied at the ballet school from 1992 to 2002.His father, Vitaly Verchenov, became seriously interested in golf, and in Karlovy Vary in 1998 he also took his daughter to this game. The first coach was Karl Skopovi. In the future, her father coached her himself until the age of 18, because he received a diploma of a licensed trainer.`
    }

    const handleClick3 = e => {
        setHideOrNot3(!e);
        text3ref.current.textContent = "Jordan Alexander Spieth is an American golfer, former world number one, winner of three majors and the 2015 FedEx Cup. Spieth's first major win came in the 2015 Masters Tournament, when he shot a 270 (−18). He tied the 72-hole record set by Tiger Woods in 1997 and became the second youngest golfer (behind Woods) to win the Masters. He then won the 2015 U.S. Open with a score of 5-under-par. He was the youngest U.S. Open champion since amateur Bobby Jones in 1923. He followed up with a win in the 2015 Tour Championship, which clinched the 2015 FedEx Cup. Two years later, Spieth won his third major at the 2017 Open Championship, by three shots at 12 under par."
    }

    return (
        <div className='container55'>
            <div className="start">
                <img src={start} width="50vw" alt="#" />
                <div className="starttext">
                    <h1>Welcome To NC</h1>
                    <p>Join Our Big Family</p>
                    <Link to="/contacts" className={classes.shad} key='4'><button>Contact us </button></Link>
                </div>
            </div>
            <div className="inf">
                {data.map((item) => (
                    <li key={item.id}>
                        <div className={item.className}>
                            <div className="pic">
                                <img src={item.image} alt="#" />
                            </div>
                            <h1 className="name">{item.h}</h1>
                            <div className="text">
                                <p className="text_name">{item.text}</p>
                            </div>
                        </div>
                    </li>
                ))}

                {/* <div className="firstBlock">
                    <div className="pic">
                        <img src={one} alt="#" />
                    </div>
                    <h1 className="name">Golf training</h1>
                    <div className="text">
                        <p className="text_name">Let's dispel the myth a little that, once you get to a golf club, you immediately go to play on an 18-hole course. <br />If you do not have a Green Card - a document that allows you to play on any golf course, you will only have a practice area at your disposal. By the way, you can get a Green Card by passing a theoretical and practical exam after training with our trainer.</p>
                    </div>
                </div>
                <div className="secondBlock">
                    <div className="pic">
                        <img src={two} alt="#" />
                    </div>
                    <h1 className="name">Best ground</h1>
                    <div className="text">
                        <p className="text_name">What does the training area include?<br /> Driving range, a special area for practicing long shots, and putting-green, a short grass area with several holes carved into it. This is where you will spend time on your first lesson.</p>
                    </div>
                </div>
                <div className="thirdBlock">
                    <div className="pic">
                        <img src={three} alt="#" />
                    </div>
                    <h1 className="name">Best team</h1>
                    <div className="text">
                        <p className="text_name">On the first visit, as well as on several subsequent visits, we recommend taking a lesson with a golf club coach. The lesson includes all the necessary equipment (sticks and balls) and lasts 50 minutes.
                            <br /> You can not only learn about the technique of hitting and practice, but also get acquainted with the history of golf, etiquette and rules of the game.</p>
                    </div>
                </div> */}
            </div>
            <div className="welcome">
                <h1 className="name_2">Welcome to our Golf Academy </h1>
            </div>
            <div className="infa_golf" >
                <div className="img_part32">
                    <img src={b2} alt="#" />
                </div>
                <div className="text_part3">
                    <h1 className="name_2">Welcome to our Golf Academy </h1>
                    <p>It is believed that the game of golf originated in Scotland and was invented by shepherds who, with the help of staves (future clubs), drove stones into rabbit holes. Presumably, the game existed already in the 14th century, and in the 15th century several laws were passed in Scotland prohibiting the game of "gof".
                    </p>
                </div>

            </div>
            <div className="meeet1">
                <h1 className="meeet">Meet our players</h1>
            </div>
            <div className="meet_our_players">

                <div className="players">
                    <div className="tiger_woods">
                        <h3>Tiger Woods</h3>
                        <div className="image">
                            <img src={licensed} alt="#" />
                        </div>
                        <p ref={text1ref}>Eldrick Tont Woods is an American golfer and 15-time Major champion. Athlete of the Year Laureus World Sports Awards: 2000, 2001. </p>
                        <button style={hideOrNot1 ? { display: 'block' } : { display: 'none' }} onClick={handleClick1} className={classes.hide3}>More</button>
                    </div>
                    <div className="maria_verchenova">

                        <h3>Maria Verchenova</h3>
                        <div className="image">
                            <img src={maria} alt="#" />
                        </div>
                        <p ref={text2ref}>Maria Vitalievna Balikoeva is a Russian golfer. The first Russian woman to become a full member of the Ladies European Tour in 2007.</p>
                        <button style={hideOrNot2 ? { display: 'block' } : { display: 'none' }} onClick={handleClick2} className={classes.hide3}>More</button>
                    </div>
                    <div className="jordan_spit">
                        <h3>Jordan Spit</h3>
                        <div className="image">
                            <img src={jordan} alt="#" />
                        </div>
                        <p ref={text3ref}>Jordan Alexander Spieth is an American golfer, former world number one, winner of three majors and the 2015 FedEx Cup.</p>
                        <button style={hideOrNot3 ? { display: 'block' } : { display: 'none' }} onClick={handleClick3} className={classes.hide3}>More</button>
                    </div>
                </div>
            </div>
            <footer>
                <div className="hours_of_operation">
                    <p>Mon-Wed: 6:00am-8:00pm</p>
                    <p>Thurs-Fri:6:30am-7:30pm</p>
                    <p>Sat:7:00am-9:00pm</p>
                    <p>Sun:8:00am-8:00pm</p>
                </div>
                <div className="quick_links1-2">
                    <p>Blog</p>
                    <p>Blog single</p>
                </div>
                <div className="quick_links3-4">
                    <p>Golf</p>
                    <p>Mini golf</p>
                </div>
                <div className="contact">
                    <div className="email">
                        <div className="photo">
                            <img src={email} alt="#" />
                        </div>
                        <p>golf_nc@mail.com</p>
                    </div>
                    <div className="phone">
                        <div className="photo">
                            <img src={phone} alt="#" />
                        </div>
                        <p> +375292363203</p>
                    </div>
                    <div className="place">
                        <div className="photo">
                            <img src={map} alt="#" />
                        </div>
                        <p> California, 75 West Rock</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;