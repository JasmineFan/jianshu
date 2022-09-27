import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import {actionCreator} from './store'


class Home extends Component {
    render() {
        return (
        <HomeWrapper>
            <HomeLeft>
                <img className="banner-img" src="https://lupic.cdn.bcebos.com/20220107/3085806899_14_600_424.jpg"></img>
                <Topic/>
                <List/>
            </HomeLeft>
            <HomeRight>
                <Recommend/>
                <Writer/>
            </HomeRight>
        </HomeWrapper>)
    }
    componentDidMount(){
       this.props.changeHomeData()
       //异步请求原来在这里
    }
}
const mapDispatch =(dispatch)=>({
    changeHomeData(){
        //1 . 异步挪到了这里 2. 异步拆分到actionCreator 里面（因为有redux-thunk)
        const action =actionCreator.getHomeInfo()
        dispatch(action)
    }
})
export default connect(null, mapDispatch)(Home) 