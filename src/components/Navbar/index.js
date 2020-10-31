import React from 'react';
import Search from "../Search/index"

const styles = {
display:"flex",
justifyContent: "center"
}

function Navbar() {
    return (
        <nav style={styles} className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="search-area col-4">
        <Search />
    </div>
</nav>
    );
}
export default Navbar;