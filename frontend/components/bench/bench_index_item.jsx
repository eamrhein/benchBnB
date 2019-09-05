/* eslint-disable react/prop-types */
import React from 'react';

const BenchIndexItem = (props) => {
  const { bench } = props;
  return (
    <li>
      <span> {bench.lat}, {bench.lng}</span>
      <p>{bench.description}</p>
    </li>
  );
};

export default BenchIndexItem;
