import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main className='page-main'>
      <Sidebar />
      <Main />
    </main>
  );
}

export default App;
