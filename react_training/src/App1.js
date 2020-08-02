import React from "react"

const App2 = props => 
{
return <p>Ten toi la {props.ho} {props.ten}</p>
}

let hoten = {
    ho: "Bui Dinh",
    ten: "Hieu"
}

export const App1 = props => {
    return <App2 {...hoten} />
}


