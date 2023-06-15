import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './Header.css'

export const Header = (props) => {
    const location = useLocation();
    let url = location.pathname;

    return <header>
                <div className="header-container">
                    {url === '/' ? <Link to="/" className="now">Search</Link> : <Link to="/">Search</Link>}
                    <Link to="/fav" className={(url==='/fav')?'now':""}>Favorite films</Link>
                </div>
           </header>
}