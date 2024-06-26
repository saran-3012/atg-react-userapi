import React, { useEffect, useState } from 'react';
import { useContextAPI } from '../../App';
import './Home.css';
import Loader from '../Loader/Loader';
import UserCard from '../UserCard/UserCard';
import Popup from '../Popup/Popup';
import spinnerSVG from '../../assets/color-changing-spinner.svg';

const Home = () => {

  const {isDarkTheme, popupCardDetails} = useContextAPI();

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(process.env.REACT_APP_USERAPI_URL );
        const data = await response.json();
        if(Array.isArray(data)){
            setUsers(data);
        }
        else{
            throw new Error(data);
        }
      } 
      catch (err) {
        console.log(err);
        setError(err);
      } 
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={`home container ${isDarkTheme? 'dark-theme' : ''}`}>
        <div className='home__container'>
            {
                isLoading ? (
                    <>
                        {
                          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index, val) => (
                            <Loader key={index * val} />
                          ))
                        }
                    </>
                ) : 
                users.length > 0 ? (
                    <>
                        {users.map((user) => (
                            <UserCard key={user.profile.username} user={user} />
                        ))}
                    </>
                ) : (
                    <>
                        <h2 className='home__error'>{'Something Went Wrong :('}</h2>
                        <a className='home__reload' href='/'>Try again</a>
                    </>
                )
            }
        </div>
        <div className="home__placeholder">
            <img src={spinnerSVG} alt="Spinner" />
        </div>
        {
          popupCardDetails && <Popup />
        }
    </main>
  )
}

export default Home