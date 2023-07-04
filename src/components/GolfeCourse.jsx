import React from 'react'
import Services from './../pages/Services';
import b5 from '../images/b5.jpg';
import classes from './../style-scss/style.module.scss'


class GolfeCourse extends React.Component {
    render() {
        return(
            <>
                <div class="infa_golf" >
                    <div class="wizPic">
                        <img src={b5} alt="#" class="forFloat" />
                    </div>
                    <div class="text_part3">
                        <h1 class="name_2">h1 </h1>
                        <p>infinfinfinfinf</p>
                    </div>
                </div>
            </>
        )
    }
}

class GolfeCourseRight extends GolfeCourse {
    render() {
        return(
            <>
                <div class="infa_golf" >
                    <div class="wizPic">
                        <img src={b5} alt="#" class="forFloat" />
                    </div>
                    <div class="text_part3">
                        <h1 class="name_2">Golfe Course </h1>
                        <p>UThe golf course consists of a series of holes, each of which has its own starting ground (Eng. Teeing ground). The starting area is marked with two marks showing the permissible boundaries of the zone where a ball peg (eng. Tee) can be installed. Also part of the site are a smooth field and an uneven field (Fairway and rough (English)) and other obstacles (English Hazard (golf)). The final part of the site is a hole, which, for the possibility of orientation, is marked in some way (usually with a flag). The hole is located on a special lawn "green" (Putting green (English)), where the height of the grass is minimal. In other places, the height of the grass may be very different in order to make it difficult to pass the site.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default GolfeCourseRight