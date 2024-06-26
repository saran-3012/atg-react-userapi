import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader__line'></div>
      <div className='loader__imgbox'></div>
      <div className='loader__detailsbox'>
        <div className='loader__name'></div>
        <div className='loader__jobtitle'></div>
      </div>
    </div>
  )
}

export default Loader;