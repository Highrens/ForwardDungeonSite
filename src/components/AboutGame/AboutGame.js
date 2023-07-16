import "./AboutGame.css";

export function AboutGame(props) {
  return (
    <div className="aboutGame-container">
      <div className="aboutGame__wrapper">
        <img className="aboutGame-icon" src={props.game.icon} alt="GameIcon"></img>
        <h1 className="aboutGame__short-title">
          {props.game.title}
        </h1>
      </div>
      
      <p className="main__post-text">
       {props.game.text}
      </p>
    </div>
  );
}
