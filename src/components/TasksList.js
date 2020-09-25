import React from 'react';
import { useDispatch } from 'react-redux';

import close from '../assets/close.svg';
import { deleteTask, taskDone } from '../redux/actions/tasks';
const TasksList = ({ activeId, tasks }) => {
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

      <i onClick={() => deleteTaskHandler(el.id)} className='close-button'>
        <img src={close} alt='' />
      </i>
    </li>
  ));
  return <ul className='main__list'>{taskList}</ul>;
};

export const TasksListMemo = React.memo(TasksList);
