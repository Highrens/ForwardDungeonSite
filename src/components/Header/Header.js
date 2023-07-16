import React, { useEffect, useState } from 'react';
import './header.css';
const ArenaDownloadLink = "https://disk.yandex.ru/d/HWBTREwwDdn2TQ";

export function Header(props) {

  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
      // Обновляем значение currentUrl при загрузке и изменении URL
      setCurrentUrl(window.location.pathname);
    }, []);

  
  return (
      <header className="header">
        
        <div className='header__games'>
          <a href='arena' className={currentUrl === "/arena" ? "header__game header__game_selected" : "header__game"}>Arena</a>
          <a href='forwarddungeon' className={currentUrl === "/forwarddungeon" ? "header__game header__game_selected" : "header__game"}>ForwardDungeon</a>
          <a href='bunker' className={currentUrl === "/bunker" ? "header__game header__game_selected" : "header__game"}>Bunker</a>
        </div>
        {/* <button className='header__download-button' onClick={props.downloadClick}>Кнопека</button> */}
        {currentUrl === "/arena" ?
        
         <a className='header__download-button' 
            href={ArenaDownloadLink} 
            download={true}
            target="_blank" rel="noopener noreferrer"
            >
          Скачать {currentUrl.slice(1)}</a> : ""}
        
      </header>
  );
}
