import React from 'react';
import './bioCard.scss';

const BioCard = (props) => {
  const {bio_photo, name, position} = props.data;
  return (
    <div className="bio">
      <div className="bio-image">
        <img src={bio_photo}/>
      </div>
      <div className="bio-details">
        <div className="bio-details-wrapper">
          <p className="position-underline">{position}</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default BioCard;