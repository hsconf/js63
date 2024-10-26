import {NavLink} from "react-router-dom";

const ToolBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Blog</NavLink>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav ms-auto">
                        <NavLink to='/' className="nav-link">Home</NavLink>
                        <NavLink to='/posts/add' className="nav-link">Add</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default ToolBar;