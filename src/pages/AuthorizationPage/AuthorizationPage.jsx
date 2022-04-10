import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import Logo from '../../../images/icon-bolt.svg';

export default function AuthorizationPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user, error } = await supabase.auth.signIn({ email });
      console.log(user);
      if (error) throw error;
      alert('Проверьте ваш email');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='w-full min-h-screen px-8 py-16 bg-purple-800 xl:px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col items-center'>
          <div>
            <img className='min-w-2xl w-full' src={Logo} alt='' />
          </div>
          {loading ? (
            'Проверьте ваш email.'
          ) : (
            <form
              onSubmit={handleLogin}
              className='w-full mt-16 md:mt-0 md:w-2/5'
            >
              <div className='relative z-10 h-auto p-8 py-10 overflow-hidden   rounded-lg  px-7'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type='text'
                  name='email'
                  className='block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none'
                  placeholder='Email'
                />

                <div className='block'>
                  <button className='w-full px-3 py-4 font-medium text-white bg-purple-600 rounded-lg'>
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
