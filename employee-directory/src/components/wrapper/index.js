  import React from "react";

function wrapper(props) {
    return (
        <div className="container">{props.children}</div>
    )
}
 export default wrapper;