import { supabase } from './supabaseClient.js';

const addReplyToDB = async (reply) => {
  const { data, error } = await supabase.from('replies').insert({
    ...reply,
  });

  return data[0];
};

const updateReplyInDB = async (reply, id) => {
  const { data, error } = await supabase
    .from('replies')
    .update({ text: reply.text })
    .match({ id });
  return data[0];
};

export { addReplyToDB, updateReplyInDB };
