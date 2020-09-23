import React from 'react';
import { useSelector } from 'react-redux';

import close from '../assets/close.svg';

const SidebarList = () => {
  const list = useSelector((state) => state.list.list);
  const listColor = useSelector((state) => state.colors.colors);
  const listDone =
    list &&
    list.map((el) => (
      <li key={el.id} className='sidebar__list-item'>
        <i
          className={`circle circle--${
            listColor.filter((color) => color.id === el.colorId)[0].name
          }`}
        ></i>
        {el.name}
        <i className='close-button'>
          <img src={close} alt='' />
        </i>
      </li>
    ));

  return <ul className='sidebar__list '>{listDone}</ul>;
};

export default SidebarList;
