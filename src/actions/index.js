const BASE_URL = 'https://wagon-chat.herokuapp.com';

// ACTIONS HERE
export function fetchMessages(channel) {
  // CALL API HERE
  const messages = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      return data.messages;
    })
    .catch((error) => {
      console.log("ERROR");
      const messages = []
    });

  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  }
}

export function createMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'NEW_MESSAGE',
    payload: promise // Will be resolved by redux-promise
  };
}

// export function createMessage(channel, author, content) {
//   // TODO
//   const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
//   // const data = { author, content };
//   const data = { author: author, content: content };
//   console.log(data);
//   const promise = fetch(url, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   }).then(r => r.json());

//   return {
//     type: 'NEW_MESSAGE',
//     payload: promise
//   }
// }



