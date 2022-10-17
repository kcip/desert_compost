import React from 'react';
import './partners.scss';

const Partners = (props) => {
  const {URL, project_name} = props.data
  return (
    <div className="outside-link">
      <a href={URL} target="_blank" rel="noreferrer">{project_name}</a>
    </div>
  )
}

export default Partners;