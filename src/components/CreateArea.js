import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});



    return (
        <div>
            <form>
                <input />
                <textarea />
                <button>+</button>
            </form>
        </div>
    );
}

export default CreateArea;