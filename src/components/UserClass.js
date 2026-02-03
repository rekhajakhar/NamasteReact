import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            count:0,
            count2:2
        }
    }

    render() {
        const {name, place} = this.props;
        const {count, count2}=this.state;
        return (
        <div className="user-card">
            {/*<h2>count={count}</h2>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1
                })
            }}>Count Increment</button>
            <h2>count2={count2}</h2>*/}
            <h2>{name}</h2>
            <h3>{place}</h3>
            <h3>@rekhajakhar10</h3>
        </div>
        )
    }
}

export default UserClass;