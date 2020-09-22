import React from 'react';
import { useSelector } from 'react-redux';

import close from '../assets/close.svg';

const SidebarList = () => {
  const list = useSelector((state) => state.list);
  list.list.map((el) => console.log(el.id));

  return (
    <ul className='sidebar__list '>
      <li className='sidebar__list-item'>
        <i className='circle circle--green'></i>Покупки
        <i className='close-button'>
          <img src={close} alt='' />
        </i>
      </li>
      <li className='sidebar__list-item sidebar__list-item--active'>
        <i className='circle circle--blue'></i>
        Фронтенд
        <i className='close-button'>
          <img src={close} alt='' />
        </i>
      </li>
      <li className='sidebar__list-item'>
        <i className='circle circle--rose'></i>
        Фильмы и сериалы
        <i className='close-button'>
          <img src={close} alt='' />
        </i>
      </li>
    </ul>
  );
};

export default SidebarList;
