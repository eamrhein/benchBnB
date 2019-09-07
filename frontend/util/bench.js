/* eslint-disable import/prefer-default-export */
export const fetchBenches = (data) => (
  $.ajax({
    url: 'api/benches',
    method: 'GET',
    data,
  })
);

export const createBench = (bench) => (
  $.ajax({
    url: 'api/benches',
    method: 'POST',
    data: { bench },
  })
);
