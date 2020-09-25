import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main, { MainMemo } from './components/Main';
import Sidebar, { SidebarMemo } from './components/Sidebar';
import { setActiveIndex } from './redux/actions/list';

function App() {
  const dispatch = useDispatch();

  const activeFolderIndex = useSelector((state) => state.list.activeIndex);
  const setActiveFolderIndex = (id) => {
    dispatch(setActiveIndex(id));
  };
  return (
    <main className='page-main'>
      <SidebarMemo
        activeFolderIndex={activeFolderIndex}
        setActiveFolderIndex={setActiveFolderIndex}
      />
      <MainMemo activeFolderIndex={activeFolderIndex} />
    </main>
  );
}

export const AppMemo = React.memo(App);
