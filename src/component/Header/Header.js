import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Navigation from "./Header.styled";
// import { BurgerIcon } from './'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            isLoggedIn: false,
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    //get user info from local storage if it exists
    componentDidMount() {
        const user = localStorage.getItem("user");
        if (user) {
            this.setState({
                isLoggedIn: true
            });
        }
    }
    //show link s if user is logged in

    handleLogin(e) {
        localStorage.getItem("user") ? this.setState({ isLoggedIn: false }) : this.setState({ isLoggedIn: true });

    }

    //logout user
    handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("user");
        this.setState({
            isLoggedIn: false
        });
    }



    render() {
        const { isExpanded } = this.state;

        return (
            <Navigation>
                <div className="logo">
                    <Link to="/">
                        <p>Abdulkareem</p>
                        <em>
                            <div className="letterhead">
                                <span className="name">deek</span>
                                <span className="gray">.io</span>
                            </div>
                        </em>
                    </Link>
                </div>
                <nav className="nav">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={e => this.handleToggle(e)}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <NavLink activeClassName="active" to="/">
                            <li>home</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/post">
                            <li>Blog</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/login">
                            {this.handleLogin ? <li>Logout</li> :  <li>Login</li>}
                        </NavLink>
                    </ul>
                </nav>
            </Navigation>
        );
    }
}

export default Nav;
