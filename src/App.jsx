import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const UserContext = createContext();

function App() {

  // Theme
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('theme') === 'dark-theme');

  const toggleTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  useEffect(() => {
    localStorage.setItem('theme', (isDarkTheme)? 'dark-theme': 'light-theme');
  }, [isDarkTheme]);

  // Popup

  const [popupCardDetails, setPopupCardDetails] = useState(null);

  const handlePopup = (Bio, avatar, createdAt, id, jobTitle, email, firstName, lastName, username) => {
    setPopupCardDetails((prevState) => (null || prevState?.username !==username)? {Bio, avatar, createdAt, id, jobTitle, email, firstName, lastName, username} : null)
  };

  return (
    <UserContext.Provider value={{
      isDarkTheme,
      toggleTheme,
      popupCardDetails,
      setPopupCardDetails,
      handlePopup
    }}>
        <Navbar />
        <Home />
    </UserContext.Provider >
  );
};

export const useContextAPI = () => useContext(UserContext);
export default App;
