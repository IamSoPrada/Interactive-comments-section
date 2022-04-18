import { supabase } from './supabaseClient.js';

const addCommentToDB = async (comment) => {
  const { data, error } = await supabase.from('comments').insert({
    ...comment,
  });
  return data[0];
};

const updateCommentInDB = async (comment, id) => {
  const { data, error } = await supabase
    .from('comments')
    .update({ text: comment.text })
    .match({ id });
  return data[0];
};

const removeCommentFromDB = async (comment) => {
  if (comment.type === 'comment') {
    const { data, error } = await supabase
      .from('comments')
      .delete()
      .eq('id', comment.id);
  }
  if (comment.type === 'reply') {
    const { data, error } = await supabase
      .from('replies')
      .delete()
      .eq('id', comment.id);
  }
};

export { removeCommentFromDB, addCommentToDB, updateCommentInDB };
