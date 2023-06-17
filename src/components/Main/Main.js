import './main.css'
import postImage from '../../images/60282232-664d-491b-9ba7-bc6cb374d2c8.jpg'
export function Main() {
  return (
    <div className="main">
        <section className='main__post'>
            <img src={postImage} alt="postImage" className='main__post-image'></img>
            <div className='main__post-container'>
                <h2 className='main__post-title'>Update: #160623: Обновление пива!</h2>
                <p className='main__post-text'> Добавленно немного <br />
                &#9679; У половины оружия пиво <br />
                &#9679; В кажвыаыва <br />
                &#9679; выава<br />
                </p>
            </div>
           
        </section>
    </div>
  );
}

