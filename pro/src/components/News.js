import React from 'react';
import axios from 'axios';
import Agree from './Agree';
export default class News extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            agreeNum: 0
        }
    }
    componentWillMount()
    {
        axios.get('http://localhost:8900/news.php',{
            params: {
                newsid: this.props.newsid
            }
        }).then((res)=>{
            this.setState({
                agreeNum: res.data.agree
            })
        })
    }
    agreeSubmit()
    {
        axios.post("http://localhost:8900/news.php",
            "newsid="+this.props.newsid
        )
            .then((res)=>{
                this.setState({
                    agreeNum: res.data.agree
                })
            })
    }
    render()
    {
        return <div>
            <h1>这是一篇新闻，新闻ID是101</h1>
            <Agree agreeNum={this.state.agreeNum} />
            <div>
                <button onClick={()=>{this.agreeSubmit()}}>我要点赞</button>
                <input type="button" value="原样修改" onClick={()=>{
                    this.setState({
                        agreeNum: 54
                    })
                }} />
            </div>

        </div>
    }
}