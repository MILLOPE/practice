import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class News extends React.Component
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
            <div>
                点赞数:<span>{this.state.agreeNum}</span>
            </div>
            <div>
                <button onClick={()=>{this.agreeSubmit()}}>我要点赞</button>
            </div>
        </div>
    }
}

ReactDOM.render(
    <News newsid="101"/>,
    document.getElementById("root")
)






