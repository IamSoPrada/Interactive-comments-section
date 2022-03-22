import React from 'react';
import Container from '../Container';
import replyIcon from '../../../images/icon-reply.svg';
import avatarNicole from '../../../images/avatars/image-amyrobson.png';

function App() {
  return (
    <div className='bg-slate-100 mx-auto py-16'>
      <Container>
        <div className='bg-slate-50 relative flex flex-col-reverse sm:flex-row justify-between p-7 max-w-3xl rounded-md gap-6 shadow-lg'>
          <div className='flex sm:flex-col'>
            <button
              type='button'
              className='px-4 py-1 text-purple-400 text-xl font-bold bg-slate-200 transition ease-in-out hover:bg-slate-300 rounded-l-lg sm:rounded-bl-none sm:rounded-tr-lg  cursor-pointer text-center'
            >
              +
            </button>
            <span className='bg-slate-200 flex p-2 justify-center items-center transition ease-in-out text-purple-400 text-center align-middle font-bold'>
              18
            </span>
            <button
              type='button'
              className='px-4 py-1 text-purple-400 text-xl font-bold bg-slate-200 hover:bg-slate-300 rounded-r-lg sm:rounded-tr-none sm:rounded-bl-lg cursor-pointer text-center'
            >
              -
            </button>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 justify-between'>
              <div className='flex flex gap-4 items-center justify-center'>
                <div className='rounded-full w-8 h-8 bg-slate-500'>
                  <img src={avatarNicole} alt='' />
                </div>
                <h3 className='text-gray-800 font-bold text-xl'>nicole</h3>
                <span className='text-gray-600 text-bold text-md'>
                  1 month ago
                </span>
              </div>
              <button
                type='button'
                className='absolute bottom-10 right-8 sm:static text-purple-800 font-bold flex gap-2 items-center'
              >
                <img src={replyIcon} className='App-logo' alt='logo' />
                <span>Reply</span>
              </button>
            </div>
            <p className='text-gray-700'>
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well.
            </p>
          </div>
          <div />
        </div>

        <div className='bg-slate-50 flex flex-col-reverse sm:flex-row justify-between p-7 max-w-3xl w-full rounded-md gap-6 shadow-lg'>
          <div className='flex w-full flex-col sm:flex-row gap-4 justify-between items-start'>
            <div className='hidden sm:block rounded-full w-14 h-10 '>
              <img src={avatarNicole} alt='' />
            </div>
            <textarea
              className='text-gray-600 w-full p-4 text-bold text-md border-2 border-gray-400 transition ease-in-out m-0 rounded-md  focus:text-gray-700 focus:bg-white focus:border-purple-300 focus:outline-none'
              placeholder='Add comment'
              rows='3'
            />
            <button
              type='button'
              className='hidden sm:block bg-purple-800  text-gray-50 rounded-md px-6 py-3 font-bold'
            >
              <span>Reply</span>
            </button>
            <div className='flex w-full gap-4 justify-between sm:hidden'>
              <div className='rounded-full w-8 h-8 bg-slate-500'>
                <img src={avatarNicole} alt='' />
              </div>

              <button
                type='button'
                className='bg-purple-800 block  text-gray-50 rounded-md px-6 py-3 font-bold'
              >
                <span>Reply</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
