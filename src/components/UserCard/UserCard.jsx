import React, { useState } from 'react';
import './UserCard.css'
import fallbackPfp from '../../assets/fallback-profile-pic.jpg';
import { useContextAPI } from '../../App';

const UserCard = ({user}) => {
  const {Bio, avatar, createdAt, id, jobTitle, profile} = user;
  const {email, firstName, lastName, username} = profile;

  const [imgSrc, setImgSrc] = useState(avatar);

  const handleError = () => {
    setImgSrc(fallbackPfp);
  };

  const {handlePopup} = useContextAPI();

  return (
    <div className='usercard' onClick={() => handlePopup(Bio, imgSrc, createdAt, id, jobTitle, email, firstName, lastName, username)}>
      <div className='usercard__line'></div>
      <div className='usercard__imgbox'>
        <img src={imgSrc} alt="Avatar" onError={handleError}/>
      </div>
      <div className='usercard__detailsbox'>
        <strong className='usercard__name'>{`${firstName} ${lastName}`}</strong>
        <span className='usercard__jobtitle'>{jobTitle}</span>
      </div>
    </div>
  )
}

export default UserCard;