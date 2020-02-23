import React from 'react';
import T from 'prop-types';

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        className="TaskEditor-input"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};

export default Filter;
