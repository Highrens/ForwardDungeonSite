import "./Post.css";

export function Post(props) {
  return (
    <section className="main__post">
      <img src={props.image} alt="postImage" className="main__post-image"></img>
      <div className="main__post-container">
        <h2 className="main__post-title"> {props.title} </h2>
        <p className="main__post-text"> {props.text}</p>
      </div>
    </section>
  );
}
