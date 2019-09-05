/* eslint-disable import/prefer-default-export */
export const fetchBenches = () => (
  $.ajax({
    url: '/api/benches',
    method: 'GET',
    error: (err) => {
      console.log(err);
    },
  })
);
