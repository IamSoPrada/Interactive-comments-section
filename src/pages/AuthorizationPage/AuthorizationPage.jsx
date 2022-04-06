import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';

export default function AuthorizationPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='w-full min-h-screen px-8 py-16 bg-gray-100 xl:px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='w-full space-y-5 md:w-3/5 md:pr-16'>
            <p className='font-medium text-blue-500 uppercase'>Проект "Comment section"</p>
            <h2 className='text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl'>
              Войти
            </h2>
            <p className='text-xl text-gray-600 md:pr-16'>
              Введите ваш email и получите письмо с MagicLink для входа.
            </p>
          </div>
          {loading ? (
            'Проверьте ваш email.'
          ) : (
            <form
              onSubmit={handleLogin}
              className='w-full mt-16 md:mt-0 md:w-2/5'
            >
              <div className='relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type='text'
                  name='email'
                  className='block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none'
                  placeholder='Email'
                />

                <div className='block'>
                  <button className='w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg'>
                    Отправить
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
