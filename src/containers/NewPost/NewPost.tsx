import {useState} from "react";
import {Post} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";
import Loader from "../../components/Loader/Loader.tsx";


const NewPost = () => {
    const date = new Date();

    const [posts, setPosts] = useState<Post>({
        title: '',
        description: '',
        date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    });

    const [spinner, setSpinner] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPosts(prev => ({ ...prev, [event.target.name]: event.target.value }));
      };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setSpinner(true);
            await axiosApi.post("/blog/posts.json", posts);
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
            <input type="text" className="form-control" name="title" id="title" onChange={handleChange} value={posts.title}/>
            <label htmlFor="description">
                Enter description!
            </label>
            <textarea name="description" id="description" className="form-control" onChange={handleChange} value={posts.description}></textarea>
            <button type="submit" className="btn btn-success mt-2">Save</button>
        </form>
    );
};

export default NewPost;