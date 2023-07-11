import React, { useEffect, useState } from 'react';
import ArenaBuild from '../../gamebuild/Arena.zip'
import './header.css';

export function Header(props) {

  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
      // Обновляем значение currentUrl при загрузке и изменении URL
      setCurrentUrl(window.location.pathname);
    }, []);


  return (
      <header className="header">
        <div className='header__games'>
          <a href='ForwardDungeonSite/arena' className={currentUrl === "ForwardDungeonSite/arena" ? "header__game header__game_selected" : "header__game"}>Arena</a>
          <a href='ForwardDungeonSite/forwardungeon' className={currentUrl === "ForwardDungeonSite/" ? "header__game header__game_selected" : "header__game"}>ForwarDungeon</a>
          <a href='ForwardDungeonSite/bunker' className={currentUrl === "ForwardDungeonSite/bunker" ? "header__game header__game_selected" : "header__game"}>Bunker</a>
        </div>
        {currentUrl === "/arena" ?
         <a className='header__download-button' href={ArenaBuild} download={true}  >Download {currentUrl.slice(1)}</a> : ""}
        
      </header>
  );
}
