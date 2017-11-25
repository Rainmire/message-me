export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: {message}
  })
);

// export const createMessage = message => {
//   debugger;
//   return $.ajax({
//     method: 'POST',
//     url: '/api/messages',
//     data: {message}
//   });
// };

export const fetchMessages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
);

// export const fetchMessages = () => {
//   let foo = $.ajax({
//     method: 'GET',
//     url: '/api/messages',
//     success: function(d){
//       console.log(d);
//     }
//   });
//   debugger;
//   return foo;
// };
