import "./main.css";
import { Post } from "../Post/Post";

export function Main(props) {
  return (
    <div className="main">
      {props.posts.map((data, i) => (
        <Post video= {data.video} key={i} image={data.image} title={data.title} text={data.text} />
      ))}
    </div>
  );
}
