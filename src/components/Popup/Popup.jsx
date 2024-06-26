import React from 'react';
import './Popup.css';
import { useContextAPI } from '../../App';
import DetailsCard from '../DetailsCard/DetailsCard';

const Popup = () => {

  const {setPopupCardDetails} = useContextAPI();

  return (
    <div className='popup'>
        <button className='popup__exitbtn' onClick={() => setPopupCardDetails(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="exit_svg">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
            </svg>
        </button>
        <DetailsCard />
    </div>
  )
}

export default Popup;