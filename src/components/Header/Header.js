import React, { useEffect, useState } from 'react';
import gameBuild from '../../gamebuild/Arena.zip'
import './header.css';

export function Header(props) {

  return (
      <header className="header">
        <h1 className='header__title'>ForwarDungeon</h1>
        <a className='header__download-button' href={gameBuild} download={true}>Download</a>
      </header>
  );
}
