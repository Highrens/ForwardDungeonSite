import "./main.css";
import postImage from "../../images/60282232-664d-491b-9ba7-bc6cb374d2c8.jpg";
import post2Image from  "../../images/210623.png"
export function Main() {
  return (
    <div className="main">
       <section className="main__post">
        {/* <iframe
          className="main__post-image"
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/xjS7GoZ--Es"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
        <img src={post2Image} alt="postImage" className="main__post-image"></img>
        <div className="main__post-container">
          <h2 className="main__post-title">
            Update: #210623: Обновление 	&#171;Арена&#187; 
          </h2>
          <p className="main__post-text">
          &#9679; 25+ единиц оружия <br />
          &#9679; 2 типа стрельбы с мгновенным уроном и с летящим выстрелом<br />
          &#9679; Может быть модифицированно предметами <br />
          &#9679; Особое оружие первый представитель которого: кнопка, разово убивающая всех противников <br />
          &#9679; 10+ предметов<br />
          &#9679; Случайный случайный спавн противников <br />
          &#9679; 10 видов противников<br />
          &#9679; мини босс который с 50% шансом дропает бластер который нельзя получить другим способом<br />
            <br />
          </p>
        </div>
      </section>
      <section className="main__post">
        {/* <iframe
          className="main__post-image"
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/xjS7GoZ--Es"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
        <img src={postImage} alt="postImage" className="main__post-image"></img>
        <div className="main__post-container">
          <h2 className="main__post-title">
            Update: #160623: Обновление пива!
          </h2>
          <p className="main__post-text">
            Добавленно немного <br />
            &#9679; У половины оружия пиво <br />
            &#9679; В кажвыаыва <br />
            &#9679; выава
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}
