import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import close from '../assets/close.svg';
import { deleteListItem } from '../redux/actions/list';

const SidebarList = ({ onActiveHandler, activeFolderId }) => {
  const disapatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  const tasks = useSelector((state) => state.tasks.tasks);
  const listColor = useSelector((state) => state.colors.colors);

  const listDone =
    list &&
    list.map((el) => (
      <li
        onClick={() => {
          onActiveHandler(el.id);
        }}
        key={el.id}
        className={classNames('sidebar__list-item', {
          'sidebar__list-item--active': el.id === activeFolderId,
        })}
      >
        <i
          className={`circle circle--${
            listColor &&
            listColor.filter((color) => color.id === el.colorId)[0].name
          }`}
        ></i>
        {el.name}
        {`(${tasks.filter((task) => task.listId === el.id).length})`}
        <i
          onClick={() => disapatch(deleteListItem(el.id))}
          className='close-button'
        >
          <img src={close} alt='' />
        </i>
      </li>
    ));

  return <ul className='sidebar__list '>{listDone}</ul>;
};

export default SidebarList;
