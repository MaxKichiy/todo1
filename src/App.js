import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { setActiveIndex } from './redux/actions/list';

function App() {
  const dispatch = useDispatch();

  const activeFolderIndex = useSelector((state) => state.list.activeIndex);
  const setActiveFolderIndex = (id) => {
    dispatch(setActiveIndex(id));
  };
  return (
    <main className='page-main'>
      <Sidebar
        activeFolderIndex={activeFolderIndex}
        setActiveFolderIndex={setActiveFolderIndex}
      />
      <Main activeFolderIndex={activeFolderIndex} />
    </main>
  );
}

export default App;
