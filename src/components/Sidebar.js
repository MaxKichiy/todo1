import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchColors } from '../redux/actions/color';
import { fetchingList } from '../redux/actions/list';
import { fetchingTasks } from '../redux/actions/tasks';
import SidebarList from './SidebarList';

const Sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingList());
    dispatch(fetchColors());
    dispatch(fetchingTasks());
  }, []);
  return (
    <section className='page-main__sidebar sidebar'>
      <div className='sidebar__wrapper'>
        <p className='sidebar__text'>
          <i>
            <svg
              width='14'
              height='12'
              viewBox='0 0 14 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.96 5.10001H5.74001C5.24321 5.10001 5.20001 5.50231 5.20001 6.00001C5.20001 6.49771 5.24321 6.90001 5.74001 6.90001H10.96C11.4568 6.90001 11.5 6.49771 11.5 6.00001C11.5 5.50231 11.4568 5.10001 10.96 5.10001ZM12.76 9.60001H5.74001C5.24321 9.60001 5.20001 10.0023 5.20001 10.5C5.20001 10.9977 5.24321 11.4 5.74001 11.4H12.76C13.2568 11.4 13.3 10.9977 13.3 10.5C13.3 10.0023 13.2568 9.60001 12.76 9.60001ZM5.74001 2.40001H12.76C13.2568 2.40001 13.3 1.99771 13.3 1.50001C13.3 1.00231 13.2568 0.600006 12.76 0.600006H5.74001C5.24321 0.600006 5.20001 1.00231 5.20001 1.50001C5.20001 1.99771 5.24321 2.40001 5.74001 2.40001ZM2.86001 5.10001H1.24001C0.743212 5.10001 0.700012 5.50231 0.700012 6.00001C0.700012 6.49771 0.743212 6.90001 1.24001 6.90001H2.86001C3.35681 6.90001 3.40001 6.49771 3.40001 6.00001C3.40001 5.50231 3.35681 5.10001 2.86001 5.10001ZM2.86001 9.60001H1.24001C0.743212 9.60001 0.700012 10.0023 0.700012 10.5C0.700012 10.9977 0.743212 11.4 1.24001 11.4H2.86001C3.35681 11.4 3.40001 10.9977 3.40001 10.5C3.40001 10.0023 3.35681 9.60001 2.86001 9.60001ZM2.86001 0.600006H1.24001C0.743212 0.600006 0.700012 1.00231 0.700012 1.50001C0.700012 1.99771 0.743212 2.40001 1.24001 2.40001H2.86001C3.35681 2.40001 3.40001 1.99771 3.40001 1.50001C3.40001 1.00231 3.35681 0.600006 2.86001 0.600006Z'
                fill='#7C7C7C'
              />
            </svg>
          </i>
          Все задачи
        </p>
        <SidebarList />
        <button className='sidebar__button'>
          <i>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 1V11'
                stroke='#868686'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1 6H11'
                stroke='#868686'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </i>
          Добавить папку
        </button>
        <div className='sidebar__modal'>
          <div className='sidebar__modal-wrapper'>
            <input
              className='text-input'
              type='text'
              placeholder='Название папки'
            />
            <ul className='sidebar__modal-colors'>
              <li className='sidebar__modal-color'>
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
              </li>
            </ul>
            <button className='sidebar__modal-button button'>Добавить</button>
            <button className='sidebar__modal-close'>
              <i>
                <svg
                  width='10'
                  height='10'
                  viewBox='0 0 10 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.24741 5L9.73899 1.50842C9.9047 1.343 9.99791 1.11853 9.99812 0.884393C9.99832 0.650251 9.90551 0.425617 9.74009 0.259907C9.57468 0.0941973 9.35021 0.000986589 9.11606 0.000779811C8.88192 0.000573033 8.65729 0.0933872 8.49158 0.258804L5 3.75038L1.50842 0.258804C1.34271 0.0930948 1.11796 0 0.883613 0C0.649264 0 0.424514 0.0930948 0.258804 0.258804C0.0930948 0.424514 0 0.649264 0 0.883613C0 1.11796 0.0930948 1.34271 0.258804 1.50842L3.75038 5L0.258804 8.49158C0.0930948 8.65729 0 8.88204 0 9.11639C0 9.35074 0.0930948 9.57549 0.258804 9.7412C0.424514 9.90691 0.649264 10 0.883613 10C1.11796 10 1.34271 9.90691 1.50842 9.7412L5 6.24962L8.49158 9.7412C8.65729 9.90691 8.88204 10 9.11639 10C9.35074 10 9.57549 9.90691 9.7412 9.7412C9.90691 9.57549 10 9.35074 10 9.11639C10 8.88204 9.90691 8.65729 9.7412 8.49158L6.24741 5Z'
                    fill='#000000'
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
