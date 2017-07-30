import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Team extends React.Component
{
    constructor(props){
        super(props);
        this.loadingBox=[];
        this.state={
            teammates:[],
            leader:""
        }
    }
    showLoading(isShow)
    {
        let display=isShow?"block":"none";
        this.loadingBox.forEach((item)=>{
            item.style.display=display;
        })
    }
    componentWillMount()
    {
        this.showLoading(true);
        axios.get("http://localhost:8900/team.php")
            .then((res)=>{
                this.setState({
                    leader: res.data.leader,
                    teammates: res.data.teammates
                });
                this.showLoading(false);
            })
    }
    render()
    {
        return <div>
            <h1>团队成员</h1>
            <span ref={(span)=>{this.loadingBox.push(span)}}>正在加载...</span>
            {this.state.teammates.map((item)=>{
                return <h2>{item.name}_{item.age}</h2>
            })}
            <h1>项目经理：{this.state.leader}<span ref={(span)=>{this.loadingBox.push(span)}}>加载</span></h1>
            <div>
                <input type="button" value="改变" onClick={()=>{
                    this.state.teammates[0].name="王五";
                    this.setState({
                        leader:"xiawei"
                    });
                }
                }/>
            </div>

        </div>
    }
}

ReactDOM.render(
    <Team />,
    document.getElementById("root")
);
