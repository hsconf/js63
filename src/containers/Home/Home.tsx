import axiosApi from "../../axiosApi.ts";
import {useEffect, useState} from "react";
import {IPosts, PostList} from "../../types.ts";
import {Link} from "react-router-dom";

const Home = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);

    const getPosts = async () => {
      const {data: post} = await axiosApi.get<PostList | null>("blog/posts.json");
      if (post !== null) {
          const data = Object.keys(post).map(id => ({
              ...post[id], id
          }));

          setPosts([...data]);
      }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container">
            <div>
                {posts.map((post) => (
                    <div className="card p-2 mb-2" key={post.id}>
                        <span>{post.date}</span>
                        <h3>{post.title}</h3>
                        <Link to={`posts/${post.id}`} className="btn btn-outline-primary align-self-start">Read more</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;