import { supabase } from './supabaseClient.js';

const addCommentUpvoteRowToDB = async (comment) => {
  const { data, error } = await supabase.from('upvotes').insert({
    comment_id: comment.id,
  });
  console.log(data, error);
};

const addUpvoteOnCommentToDB = async (comment) => {
  /*   const { data, error } = await supabase.rpc('upvote', {
    quote_id: comment.id,
    increment_num: 1,
  }); */

  const { data, error } = await supabase
    .from('upvotes')
    .insert({ comment_id: comment.id, user_id: comment.user_id });

  return data[0];
};

export { addCommentUpvoteRowToDB, addUpvoteOnCommentToDB };
