// const BASE_URL = 'https://wagon-chat.herokuapp.com';
import { createAsyncAction } from 'redux-promise-middleware-actions';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

// export function fetchMessages(channel) {
  // return {
  //   type: FETCH_MESSAGES,
  //   payload: fetch(url)
  //     .then(response => respsonse.json())
  //     .then((data) => {
  //       debugger
  //       return data;
  //     })
  // }
// }

const url = `/api/v1/channels/general/messages`;

export const fetchMessages = () => createAsyncAction('FETCH_MESSAGES', async () => {
    const result = await fetch(url);
    return result.json();
});


export function createMessage(channel, content) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/channels/${channel}/messages`;
  const body = { content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function selectChannel(channel) {
  return {
    type: CHANNEL_SELECTED,
    payload: channel
  };
}
