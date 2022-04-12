import { supabase } from './supabaseClient.js';

/* const subscribeToTableEvents = (tableName, action, user_id) => {
  supabase
    .from(tableName)
    .on('*', (payload) => {
      switch (payload.eventType) {
        case 'INSERT':
          if (user_id !== payload.new.user_id) {
            return dispatch(action(payload.new));
          }
          return null;
        default:
          return null;
      }
    })
    .subscribe();
}; */

const addCommentToDB = async (comment) => {
  const { data, error } = await supabase.from('comments').insert({
    ...comment,
  });
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

export { removeCommentFromDB, addCommentToDB };
