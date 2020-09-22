import React from 'react';

const Main = () => {
  return (
    <section className='page-main__main main'>
      <div className='main__wrapper'>
        <h2 className='main__title'>Фронтенд</h2>
        <ul className='main__list'>
          <li className='main__list-item'>Изучить JavaScript</li>
          <li className='main__list-item'>Изучить паттерны проектирования</li>
          <li className='main__list-item'>
            ReactJS Hooks (useState, useReducer, useEffect и т.д.)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Main;
