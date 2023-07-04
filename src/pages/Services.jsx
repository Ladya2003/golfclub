import group1 from '../images/Group 1.svg';
import b4 from '../images/b4.jpg';
import email from '../images/2089181.png';
import phone from '../images/img_302780.png';
import map from '../images/map-svgrepo-com1.svg';
import b5 from '../images/b5.jpg';

// import '../style-scss/style.css';
import classes from './../style-scss/style.module.scss'
import React, {useState} from 'react';
import GolfeCourseRight from './../components/GolfeCourse';

import { useDispatch } from 'react-redux';
// redux comps
import { addTodo } from '../store/todoSlice';
import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList';



const Services = () => {

      // redux
   const [text, setText] = useState('Leave a comment');
   const [count, setCount] = useState(1);
   const dispatch = useDispatch();
 
   const handleAction = () => {
    // текст который мы заносим в наш input, передается в качестве объекта нашему срезу в событие addTodo с помощью хука dispatch
     if(text.trim().length) {
      // dispatch передает события в срезы. Все эти данные передаются вторым параметрам action в наши события
       
       setCount(e=> e + 1)
       dispatch(addTodo({text, count}));
       setText('');
     }
   }
    
        return (
            <div className="container55">
                <div class="starttext_about">
                    <h1>Our Service</h1>
                    <p>Many luxury liners have golf courses. Unfortunately, quite often the balls fly out of the ship. In order to protect the environment, <br />a German company has developed fish food balls that do not cause the slightest harm to the waters of the world's oceans.</p>
                </div>
                <div class="svg">
                    <img src={group1} alt="#" />
                </div>
                <div class="space"></div>
                <GolfeCourseRight />
                <div class="infa_golf5" >
                    <div class="img_part5">
                        <img src={b4} alt="#" />
                    </div>
                    <div class="text_part5">
                        <h1 class="name_2">Mini Golf </h1>
                        <p>Miniature golf or minigolf is a game that has been developed since the middle of the 19th century. A mini-golf course is a green on which the path of the ball to the hole is hampered by numerous obstacles in the form of stones, sand traps, artificial labyrinths, and so on. The player's task, as in regular golf, is to get the ball into the hole in the minimum number of strokes. The game is played only with a putter stick, swing is prohibited by the rules..</p>
                    </div>
                </div>
                <div className="comments-main-container">
                    <h1 className="comments-h1">Help us to become better!</h1>
                    <NewTodoForm
                        value={text}
                        updateText={setText}
                        handleAction={handleAction}
                        />
                        
                        <TodoList />
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
                                <img src={email} alt="#" />
                            </div>
                            <p>golf_nc@mail.com</p>
                        </div>
                        <div class="phone">
                            <div class="photo">
                                <img src={phone} alt="#" />
                            </div>
                            <p> +375292363203</p>
                        </div>
                        <div class="place">
                            <div class="photo">
                                <img src={map} alt="#" />
                            </div>
                            <p> California, 75 West Rock</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

export default Services;