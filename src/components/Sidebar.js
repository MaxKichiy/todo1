import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchingColors } from '../redux/actions/color';
import { fetchingList } from '../redux/actions/list';
import { fetchingTasks } from '../redux/actions/tasks';
import SidebarList, { SidebarListMemo } from './SidebarList';
import SidebarModal, { SidebarModalMemo } from './SidebarModal';
import classNames from 'classnames';

const Sidebar = ({ activeFolderIndex, setActiveFolderIndex }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const onActiveHandler = (id) => {
    setActiveFolderIndex(id);
  };

  useEffect(() => {
    dispatch(fetchingColors());
    dispatch(fetchingList());
    dispatch(fetchingTasks());
  }, [dispatch]);

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <section className='page-main__sidebar sidebar'>
      <div className='sidebar__wrapper'>
        <p
          onClick={() => setActiveFolderIndex(null)}
          className={classNames('sidebar__text', {
            'sidebar__text--active': activeFolderIndex === null,
          })}
        >
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
        <SidebarListMemo
          onActiveHandler={onActiveHandler}
          activeFolderId={activeFolderIndex}
        />
        <button onClick={openModalHandler} className='sidebar__button'>
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
        {openModal && <SidebarModalMemo onClose={closeModalHandler} />}
      </div>
    </section>
  );
};

export const SidebarMemo = React.memo(Sidebar);
