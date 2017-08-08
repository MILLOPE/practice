import React from "react";
import ReactDOM from "react-dom";

class Age extends React.Component
{
    render()
    {
        return <div>
            我的年龄是{this.props.myage}
        </div>
    }
}

class Me extends React.Component
{
    render()
    {
        console.log(this.props.children);
        return <div>
            {this.props.children}
        </div>
    }
}
ReactDOM.render(
    <Me myname="shenyi">
        <div>我的名字是shenyi</div>
        <Age myage="20"/>
    </Me>,
    document.getElementById("root")
);





