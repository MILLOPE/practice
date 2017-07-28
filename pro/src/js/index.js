import React from 'react';
import ReactDOM from 'react-dom';

let teammates=[
    {
        name:"lis",
        age:21
    },
    {
        name:"zhangsan",
        age:23
    }
];

class Team extends React.Component
{
    constructor(){
        super();
        this.abc="BCD";
    }
    render()
    {
        return <div>
            <h1>团队成员</h1>{this.abc}
            {this.props.teammates.map((item)=>{
                return <h2>{item.name}_{item.age}</h2>
            })}
            <h1>项目经理：{this.props.leader}</h1>
            <div>
                <input type="button" value="改变" onClick={()=>{
                    //this.props.leader="abc";
                    this.props.teammates[0].name="王五";
                    //alert(this.props.teammates[0].name);
                    //this.setState();
                    this.forceUpdate();
                }
                }/>
            </div>

        </div>
    }
}

ReactDOM.render(
    <Team teammates={teammates} leader="shenyi" />,
    document.getElementById("root")
);
