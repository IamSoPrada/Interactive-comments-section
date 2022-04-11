import { supabase } from './supabaseClient.js';

const addReplyToDB = async (reply) => {
  const { data, error } = await supabase.from('replies').insert({
    ...reply,
  });
  console.log(data, error);
  return data[0];
};

export { addReplyToDB };
