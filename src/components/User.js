import  {useState} from "react";

const User = (props) => {
const [count] = useState(0);
const [count2] = useState(1);

    const {name, place} = props;
    return (
        <div className="user-card">
            <h2>count = {count}</h2>
            <h2>count2 = {count2}</h2>
            <h2>{name}</h2>
            <h3>{place}</h3>
            <h3>@rekhajakhar10</h3>
        </div>
    )
}
export default User;