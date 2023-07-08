import React, { useEffect, useState } from 'react';
import gameBuild from '../../gamebuild/Arena.zip'
import './header.css';

export function Header(props) {

  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
      // ��������� �������� currentUrl ��� �������� � ��������� URL
      setCurrentUrl(window.location.pathname);
    }, []);


  return (
      <header className="header">
        <div className='header__games'>
          <a href='arena' className={currentUrl === "/arena" ? "header__game header__game_selected" : "header__game"}>Arena</a>
          <a href='forwardungeon' className={currentUrl === "/forwardungeon" ? "header__game header__game_selected" : "header__game"}>ForwarDungeon</a>
          <a href='bunker' className={currentUrl === "/bunker" ? "header__game header__game_selected" : "header__game"}>Bunker</a>
        </div>
       
        <a className='header__download-button' href={gameBuild} download={true}>Download {currentUrl.slice(1)}</a>
      </header>
  );
}