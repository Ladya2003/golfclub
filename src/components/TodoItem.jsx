import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../store/todoSlice';

const TodoItem = ({ id, text, count, completed }) => {
  const dispatch = useDispatch();
  // const nowDate = new Date().getDate() + "." + (new Date().getMonth() + 1);

  
  
  const commentClick = () => {
    dispatch(removeTodo({id}))    
  }


  return (
    <div className="comments-comment-container-div">
    <li className="comments-comment-container">
      {/* <input
        className="comments-comment-input"
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      /> */}
      <span className="comments-comment-span-date">{count} </span>
      <span className="comments-comment-span">{text}</span>
      
    </li>
    <span className="comments-comment-close" onClick={commentClick}>&times;</span>
    </div>
  );
};

export default TodoItem;
