import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const SidebarModalColors = ({ colorHandler, activeColorId }) => {
  const colors = useSelector((state) => state.colors.colors);

  const colorsList = colors.map((color) => (
    <li
      onClick={() => colorHandler(color.id)}
      key={color.id}
      className='sidebar__modal-color'
    >
      <i
        className={classNames('circle', `circle--${color.name}`, {
          'circle--active': activeColorId === color.id,
        })}
      ></i>
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
