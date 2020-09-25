import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { changeTitle } from '../redux/actions/list';
import { addTask } from '../redux/actions/tasks';
import TasksList from './TasksList';

const Main = ({ activeFolderIndex }) => {
  const lists = useSelector((state) => state.list.list);
  const title = lists.filter((el) => activeFolderIndex === el.id)[0];
  const [setTitle, setSetTitle] = useState('');

  const dispatch = useDispatch();
  const [isNewTask, setIsNewTask] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [isChanging, setIsChanging] = useState(false);
  const tasks = useSelector((state) => state.tasks.tasks);
  const colors = useSelector((state) => state.colors.colors);
  const titleColor =
    title && colors.filter((el) => el.id === title.colorId)[0].hex;

  const inputTitleHandler = (e) => {
    setSetTitle(e.target.value);
  };
  const inputTaskHandler = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmitHandler();
    }
  };

  const onSubmitHandler = () => {
    if (!newTask) {
      return;
    }
    const finalTask = {
      listId: activeFolderIndex,
      text: newTask,
      completed: false,
    };
    dispatch(addTask(finalTask));
    setNewTask('');
    setIsNewTask(false);
  };

  const onSubmitTitleChange = () => {
    if (!setTitle) {
      return;
    }
    const newObj = {
      name: setTitle,
    };
    dispatch(changeTitle(newObj, activeFolderIndex));
    setIsChanging(false);
  };

  return (
    <section className='page-main__main main'>
      <div className='main__wrapper'>
        {!isChanging && (
          <h2 className='main__title' style={{ color: titleColor }}>
            {!activeFolderIndex ? 'Все задачи' : title && title.name}

            {activeFolderIndex && (
              <i onClick={() => setIsChanging(true)}>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z'
                    fill='#000000'
                  />
                </svg>
              </i>
            )}
          </h2>
        )}

        {isChanging && (
          <div className='main__title-input'>
            <input
              autoFocus
              value={setTitle}
              onChange={inputTitleHandler}
              className='text-input'
              type='text'
              placeholder={title.name}
            />
            <i onClick={onSubmitTitleChange} className='main__title-confirm '>
              <svg
                width='13'
                height='10'
                viewBox='0 0 11 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </i>
          </div>
        )}
        <TasksList activeId={activeFolderIndex} tasks={tasks} lists={lists} />
        {activeFolderIndex && isNewTask && (
          <>
            <input
              autoFocus
              value={newTask}
              onChange={inputTaskHandler}
              className='text-input'
              type='text'
              placeholder='Текст задачи'
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={onSubmitHandler}
              className={classNames('main-button', 'button', {
                'button--disabled': !newTask,
              })}
            >
              Добавить
            </button>
            <button
              onClick={() => setIsNewTask(false)}
              className='main-button button button--grey'
            >
              Отмена
            </button>
          </>
        )}
        {!isNewTask && activeFolderIndex && (
          <button
            onClick={() => setIsNewTask(true)}
            className='sidebar__button main__new-task'
          >
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
            Новая задача
          </button>
        )}
      </div>
    </section>
  );
};

export default Main;
