import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Post} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";

const PostItem = () => {
    const {id: params} = useParams();

    const [post, setPost] = useState<Post>({
        title: '',
        description: '',
        date: '',
    });

    const getPost = async () => {
        const posts = await axiosApi.get<Post>('/blog/posts/' + params + '.json');

        setPost(prev => ({
            ...prev,
            ...posts.data
        }));
    };

    const navigate = useNavigate();

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className="container">
            <div className="card w-50 mx-auto">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div>{post.title}</div>
                    <div>{post.date}</div>
                </div>
                <div className="card-body py-5 px-3">
                    {post.description}
                </div>
                <div className="card-footer d-flex align-items-center gap-2">
                    <button className="btn btn-danger ms-auto" onClick={async () => {
                        await axiosApi.delete('/blog/posts/' + params + '.json');
                        navigate('/');
                    }}>Delete</button>
                    <Link to="edit" className="btn btn-primary">Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default PostItem;