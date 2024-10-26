import {useEffect, useState} from "react";
import {Post} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";
import Loader from "../../components/Loader/Loader.tsx";
import {useNavigate, useParams} from "react-router-dom";


const NewPost = () => {
    const date = new Date();
    const {id: params} = useParams();
    const navigate = useNavigate();

    const [posts, setPosts] = useState<Post>({
        title: '',
        description: '',
        date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    });

    const [spinner, setSpinner] = useState(false);

    const editPost = async () => {
        const response = await axiosApi.get('/blog/posts/' + params + '.json');
        setPosts(response.data);
    };

    useEffect(() => {
        if (params) {
            editPost();
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPosts(prev => ({ ...prev, [event.target.name]: event.target.value }));
      };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setSpinner(true);
            if (params) {
                await axiosApi.put(`/blog/posts/${params}.json`, posts);
                navigate('/posts/' + params);
            } else {
                await axiosApi.post("/blog/posts.json", posts);
                setPosts({
                    title: '',
                    description: '',
                    date: '',
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSpinner(false);
        }
    };

    if (spinner) {
        return (
            <Loader />
        );
    }

    return (
        <form className="d-flex flex-column gap-1 container w-50" onSubmit={onSubmit}>
            <label htmlFor="title">Title
                Enter title!
            </label>
            <input type="text" className="form-control" name="title" id="title" onChange={handleChange} value={posts.title} required/>
            <label htmlFor="description">
                Enter description!
            </label>
            <textarea name="description" id="description" className="form-control" onChange={handleChange} value={posts.description} required></textarea>
            <button type="submit" className="btn btn-success mt-2">Save</button>
        </form>
    );
};

export default NewPost;