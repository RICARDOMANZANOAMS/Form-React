const Navbar = () => {
    return (
        // The following instanceof. creates a navbar
        <nav className="navbar">  
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New page</a>
            </div>
        </nav>
      );
}
 
export default Navbar;