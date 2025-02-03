import "../styles/navbar.css"


function NavBar(){
    return(
        <div>
            <nav className="Navbar">
                <div>
                    <p>Youtube</p>
                </div>
                <div>
                    <ul className="navbar-links">
                        <li>
                            <input placeholder="search here for more videos" type="search" />
                        </li>
                        <li>
                            <button type="submit">Mic</button>
                        </li>
                       
                    </ul>
                    </div>
                    <div>
                        <ul className="navbar-links">
                            <li>
                                <button type="submit">Cam</button>
                            </li>
                            <li>
                                <button type="submit">Bell</button>
                            </li>
                            <li>
                                <a href="/">logo</a>
                            </li>
                        </ul>
                    </div>
              
            </nav>
        </div>
    );
}

export default NavBar;