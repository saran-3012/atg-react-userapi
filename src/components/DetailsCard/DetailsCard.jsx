import React from 'react';
import './DetailsCard.css';
import { useContextAPI } from '../../App';

const DetailsCard = () => {

  const {popupCardDetails, setPopupCardDetails} = useContextAPI();

  const {Bio, avatar, createdAt, id, jobTitle, email, firstName, lastName, username} = popupCardDetails || {};

  return (
    <div className='detailscard'>
        <div className='detailscard__container'>
          <div className='detailscard__imgbox'>
            <img className='detailscard__avatar' src={avatar} alt="Avatar" />
          </div>
          <div className='detailscard__namebox'>
            <strong className='detailscard__name'>{`${firstName} ${lastName}`}</strong>
            <span className='detailscard__username'>{`@${username}`}</span>
          </div>
        </div>
        <article className='detailscard__bio'>{Bio}</article>
        <div className='detailscard__jobtitle'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
          </svg>
          <span>{jobTitle}</span>
        </div>
        <div className='detailscard__email'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <span>{email}</span>
        </div>
    </div>
  )
}

export default DetailsCard