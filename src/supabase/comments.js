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
  console.log(data, error);
  return data[0];
};

export { addCommentToDB };
