import './footer.css';

export function Footer(props) {

    return (
        <footer className="footer">
            <nav className='footer__nav'>
                <ul className='footer__nav-list'>
                    <li className=''>
                        <a  className='footer__nav-link' href='https://t.me/france_make_game'>Telegram</a>
                    </li>
                    {/* <li className=''>
                        <a  className='footer__nav-link' href='https://t.me/france_make_game'>YouTube</a>
                    </li> */}
                </ul>
            </nav>
            <h3 className='footer__nav-link'> &#169; Сергей Панков</h3>
        </footer>
    );
  }
  