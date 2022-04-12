import { supabase } from './supabaseClient.js';

const addCommentUpvoteRowToDB = async (comment) => {
  const { data, error } = await supabase.from('comments_upvotes').insert({
    comment_id: comment.id,
  });
  console.log(data, error);
};

const addUpvoteOnCommentToDB = async (comment) => {
  /*   const { data, error } = await supabase.rpc('upvote', {
    quote_id: comment.id,
    increment_num: 1,
  }); */
  if (comment.type === 'comment') {
    const { data, error } = await supabase
      .from('comments_upvotes')
      .insert({ comment_id: comment.id, user_id: comment.user_id });
    return data[0];
  }
  if (comment.type === 'reply') {
    const { data, error } = await supabase
      .from('replies_upvotes')
      .insert({ reply_id: comment.id, user_id: comment.user_id });
    return data[0];
  }
};

const removeUpvoteOnCommentToDB = async (comment) => {
  if (comment.type === 'comment') {
    const { data, error } = await supabase
      .from('comments_upvotes')
      .delete()
      .eq('id', comment.id);
  }
  if (comment.type === 'reply') {
    const { data, error } = await supabase
      .from('replies_upvotes')
      .delete()
      .eq('id', comment.id);
  }
};

export { removeUpvoteOnCommentToDB, addUpvoteOnCommentToDB };
