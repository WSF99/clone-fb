import { collection, getFirestore, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";

function Posts() {
  const postsRef = collection(getFirestore(), "posts");
  const [realTimePosts] = useCollection(
    query(postsRef, orderBy("timestamp", "desc"))
  );

  return (
    <div>
      {realTimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
