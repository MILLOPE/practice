import React from 'react';
import ReactDOM from 'react-dom';
/*----元素------------------------------------*/
let me = <h1>Hello, world!</h1>;
ReactDOM.render(
    me,
    document.getElementById('root')
);

/*----组件，props传递--------------------------*/
function Welcome(props) {
    return <h1>Hello,{props.name}</h1>
}

ReactDOM.render(
    <Welcome name="world" />,
    document.getElementById("root")
);

/*----组件（ES2015语法），props传递--------------*/
class Me extends React.Component
{
    render()
    {
        return <div>
            <h2>{this.props.name}_{this.props.age}</h2>
        </div>
    }
}
ReactDOM.render(
    <Me name="zhangsan" age="19"/>,
    document.getElementById('root')
);

/*----props传递，对象----------------------------*/
let me_params = {
    name:"lisi",
    age:"19"
};
class Me2 extends React.Component
{
    render()
    {
        return <div>
            <h2>{this.props.me.name}_{this.props.me.age}</h2>
        </div>
    }
}
ReactDOM.render(
    <Me2 me={me_params}/>,
    document.getElementById('root')
);
/*----props传递，对象解构--------------------------*/
me_params = {
    name:"shenyi",
    age:"18"
};
class Me3 extends React.Component
{
    render()
    {
        return <div>
            <h2>{this.props.name}_{this.props.age}</h2>
        </div>
    }
}
ReactDOM.render(
    <Me3 {...me_params}/>,
    document.getElementById('root')
);
/*----事件----------------------------------------*/
class Me4 extends React.Component
{
    showMe() {
        alert("点击事件");
    }
    render()
    {
        return <div>
            <h2>{this.props.name}_{this.props.age}</h2>
            <input type="button" onClick={this.showMe} value="按我"/>
        </div>
    }
}
ReactDOM.render(
    <Me4 {...me_params}/>,
    document.getElementById('root')
);
/*----事件,抛出props------------------------------*/
class Me5 extends React.Component
{
    showMe() {
        alert("点击事件");
    }
    render()
    {
        return <div>
            <h2>{this.props.name}_{this.props.age}</h2>
            <input type="button" onClick={()=>{
                    alert(this.props.name);
                }
            } value="按我"/>
            <input type="button" onClick={function(){
                    alert(this.props.name);
                }.bind(this)
            } value="按我"/>
        </div>
    }
}
ReactDOM.render(
    <Me5 {...me_params}/>,
    document.getElementById('root')
);
/*----循环数组对象------------------------------*/
me_params= [
    {
        name:"zhangsan",
        age:18
    },{
        name:"lisi",
        age:19
    }
];
class Me6 extends React.Component
{
    render()
    {
        return <div>
            {this.props.me.map((item)=>{
                return <h2>{item.name}_{item.age}</h2>
        })}
        </div>
    }

}
ReactDOM.render(
    <Me6 me={me_params}/>,
    document.getElementById("root")
);
/*----元素内部表达式里，数组的内容，会被依次渲染成元素---*/
let a =[<h2>hello</h2>,<h2>world</h2>,"pppp"];
let b = <div>{a}</div>;
ReactDOM.render(
    b,
    document.getElementById("root")
);


