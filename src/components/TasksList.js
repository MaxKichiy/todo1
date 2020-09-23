import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import close from '../assets/close.svg';
import { deleteTask, taskDone } from '../redux/actions/tasks';
const TasksList = ({ activeId, tasks, lists }) => {
  const [isChecked, setIsChecked] = useState(false);
  const tlist = tasks.filter((el) => activeId === el.listId);
  const dispatch = useDispatch();

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id));
  };

  const checkedHandler = (id) => {
    let obj;
    if (tasks.filter((task) => id === task.id)[0].completed) {
      obj = {
        id: id,
        completed: false,
      };
    } else {
      obj = {
        id: id,
        completed: true,
      };
    }
    dispatch(taskDone(obj));
    console.log(obj);
  };

  const taskList = (activeId ? tlist : tasks).map((el) => (
    <li key={el.id} className='main__list-item'>
      <input
        onChange={() => checkedHandler(el.id)}
        defaultChecked={el.completed}
        id={el.id}
        type='checkbox'
        placeholder={el.text}
      />
      <label htmlFor={el.id}>{el.text}</label>
      <i className='main__list-item--edit'>
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z'
            fill='#DFDFDF'
          />
        </svg>
      </i>
      <i onClick={() => deleteTaskHandler(el.id)} className='close-button'>
        <img src={close} alt='' />
      </i>
      {/* <i className='main__list-item--confirm '>
        <svg
          width='13'
          height='10'
          viewBox='0 0 11 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </i> */}
    </li>
  ));
  return (
    <ul className='main__list'>
      {taskList}
      {/* <li className='main__list-item'>
        <input id='item1' type='checkbox' placeholder='Изучить JavaScript' />
        <label htmlFor='item1'>Изучить JavaScript</label>
        <i className='main__list-item--edit'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z'
              fill='#DFDFDF'
            />
          </svg>
        </i>
        <i className='main__list-item--confirm'>
          <svg
            width='13'
            height='10'
            viewBox='0 0 11 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </i>
      </li>
      <li className='main__list-item'>
        <input id='item2' type='checkbox' placeholder='Изучить JavaScript' />
        <label htmlFor='item2'>
          ReactJS Hooks (useState, useReducer, useEffect и т.д.)
        </label>
        <i className='main__list-item--edit'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z'
              fill='#DFDFDF'
            />
          </svg>
        </i>
        <i className='main__list-item--confirm'>
          <svg
            width='13'
            height='10'
            viewBox='0 0 11 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </i>
      </li>
      <li className='main__list-item'>
        <input id='item3' type='checkbox' placeholder='Изучить JavaScript' />
        <label htmlFor='item3'>Изучить паттерны проектирования</label>
        <i className='main__list-item--edit'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z'
              fill='#DFDFDF'
            />
          </svg>
        </i>

        <i className='main__list-item--confirm'>
          <svg
            width='13'
            height='10'
            viewBox='0 0 11 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </i>
      </li> */}
    </ul>
  );
};

export default TasksList;
