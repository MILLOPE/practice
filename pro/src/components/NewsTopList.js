import React from "react";
import axios from "axios";
export default class NewsTopList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataList:[]
        };
    }
    componentWillMount()
    {
        axios.get("http://localhost:8900/toplist.php?type=news")
            .then((response)=>{
                this.setState({
                    dataList:response.data
                })
            })
    }
    render()
    {
        return <dl>
            <dt>新闻排行</dt>
            {this.state.dataList.map((item)=>{
                return <dd>
                    <div><a href="#">{item.title}</a></div>
                    <div className="newsdes">{item.desc}</div>
                </dd>
            })}
            <dd>
                <a href="#"></a>
            </dd>
        </dl>
    }
}