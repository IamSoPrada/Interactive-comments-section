import { supabase } from './supabaseClient.js';

const addCommentToDB = async (comment) => {
  const { data, error } = await supabase.from('comments').insert({
    ...comment,
  });
  return data[0];
};

export { addCommentToDB };
