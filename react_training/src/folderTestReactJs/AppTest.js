
export const Ab = props => {
    let abv = {...props, er: "fghj"}
return <p>Ten toi la {props.ho} {props.va} {props.ten}</p>
}

const Abc = props => {
    return <Ab ho="Bui" va="Dinh" ten="Hieu" />
}

const ComponentCha = (props) => {
    return <ComponentChau {...props} />
  }