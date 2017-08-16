import React from "react";
import ProductTopList from "./ProductTopList";
import NewsTopList from "./NewsTopList";
import InfoDetail from "./InfoDetail";
import UserLogin from "./../components/UserLogin";

import Passport from "./../core/Passport";
let passport = new Passport();
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect
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
                    <li><Link to="/login">用户登录</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={ProductTopList}/>
                <Route path="/products" component={ProductTopList}/>
                <Route exact path="/news" render={(props)=>{
                    if(passport.islogin) //已经登录
                    {
                        return <NewsTopList {...props}/>;
                    }
                    else //没有
                    {
                        return <Redirect to="/login" {...props}/>;
                    }
                }
                }/>
                <Route path="/news/:newsid" component={InfoDetail}/>
                <Route path="/login" render={(props)=>{
                    //使用es2015的对象解构方式传入props
                    return <UserLogin passport={passport} {...props}/>
                }}/>
            </div>
        </Router>;
    }
}