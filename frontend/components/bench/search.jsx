/* eslint-disable react/prop-types */
import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = (props) => {
  const { fetchBenches, benches } = props;
  return (
    <div>
      <BenchMap benches={benches} fetchBenches={fetchBenches} />
      <BenchIndex benches={benches} fetchBenches={fetchBenches} />
    </div>
  );
};

export default Search;
