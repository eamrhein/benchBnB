/* eslint-disable react/prop-types */
import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = (props) => {
  const { fetchBenches, benches, updateFilter } = props;
  return (
    <div className="bench">
      <BenchMap benches={benches} fetchBenches={fetchBenches} updateFilter={updateFilter} />
      <BenchIndex benches={benches} fetchBenches={fetchBenches} />
    </div>
  );
};

export default Search;
