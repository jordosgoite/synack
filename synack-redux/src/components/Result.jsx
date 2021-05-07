import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ title, descrip, url }) => (
  <div className="result-container">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span className="result-url">{url}</span>
      <span>{title}</span>
    </a>
    <p>{descrip}</p>
  </div>
);

Result.propTypes = {
  title: PropTypes.string,
  descrip: PropTypes.string,
  url: PropTypes.string,
};

Result.defaultProps = {
  title: 'test',
  descrip: 'test',
  url: 'test',
};

export default Result;
