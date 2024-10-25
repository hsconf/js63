import {NavLink} from "react-router-dom";

const ToolBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Blog</a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav ms-auto">
                        <NavLink to='/' className="nav-link">Home</NavLink>
                        <NavLink to='/posts/add' className="nav-link">Add</NavLink>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link">Contacts</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default ToolBar;