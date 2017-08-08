import React from 'react';
export default class Agree extends React.Component
{
    componentWillReceiveProps(nextProps)
    {
        //alert("原有的"+this.props.agreeNum+"，新的"+nextProps.agreeNum)
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        if(this.props.agreeNum!=nextProps.agreeNum) return true;
        /*alert("原有的"+this.props.agreeNum+"，新的"+nextProps.agreeNum)
        if(this.props.agreeNum==nextProps.agreeNum)
            return false;
        else
            return true;*/
    }
    render()
    {
        alert("render");
        return <div>
            点赞数:<span>{this.props.agreeNum}</span>
        </div>
    }
}