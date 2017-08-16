import React from "react";
import ProductTopList from "./ProductTopList";
import NewsTopList from "./NewsTopList";
import InfoDetail from "./InfoDetail";

/*import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';*/
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class MyRouter extends React.Component
{
    render()
    {
        return <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/products">商品排行榜</Link></li>
                    <li><Link to="/news">新闻排行榜</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={ProductTopList}/>
                <Route path="/products" component={ProductTopList}/>
                <Route exact path="/news" component={NewsTopList}/>
                <Route path="/news/:newsid" component={InfoDetail}/>
            </div>
        </Router>
    }
}