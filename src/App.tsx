import Home from "./containers/Home/Home.tsx";
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import {Route, Routes} from "react-router-dom";
import NewPost from "./containers/NewPost/NewPost.tsx";
import PostItem from "./containers/PostItem/PostItem.tsx";
import About from "./containers/About/About.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";

const App = () => {
    return (
        <>
            <header>
                <ToolBar />
            </header>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/posts/add" element={<NewPost />} />
                <Route path="/posts/:id" element={<PostItem />} />
                <Route path="/posts/:id/edit" element={<NewPost />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    );
};

export default App;
