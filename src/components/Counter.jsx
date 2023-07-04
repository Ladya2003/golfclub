import React from 'react'
import {useState} from 'react'
import classes from './../sass/Counter.module.scss'

const Counter = ({initialCount}) => {
    const [count, setCount] = useState(initialCount);

    const handleClickDecr = current => {
        if (current > 0) {
            setCount(current - 1);
        }
    }

    return (
        <div className={classes.container}>
        Всего придет людей: <p data-testid="count">{count}</p>
            <div className={classes.container2}>
            <input onClick={() => setCount(prevCount => prevCount + 1)} className={classes.incButton} type="button" value="+" />
            <input onClick={(current) => count > 1 ? setCount(current => current - 1) : null} className={classes.decButton} type="button" value="-" />
            </div></div>
    );
  }

  export default Counter