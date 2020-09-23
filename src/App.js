import React, { useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const [activeFolderIndex, setActiveFolderIndex] = useState(null);

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
