import React from 'react';
import { useSelector } from 'react-redux';

const SidebarModalColors = () => {
  const colors = useSelector((state) => state.colors.colors);

  const colorsList = colors.map((color) => (
    <li key={color.id} className='sidebar__modal-color'>
      <i className={`circle circle--${color.name}`}></i>
    </li>
  ));
  return (
    <ul className='sidebar__modal-colors'>
      {colorsList}
      {/* <li className='sidebar__modal-color'>
        <i className='circle circle--green'></i>
      </li>
      <li className='sidebar__modal-color'>
        <i className='circle circle--green'></i>
      </li>
      <li className='sidebar__modal-color'>
        <i className='circle circle--blue'></i>
      </li>
      <li className='sidebar__modal-color'>
        <i className='circle circle--rose'></i>
      </li> */}
    </ul>
  );
};

export default SidebarModalColors;
