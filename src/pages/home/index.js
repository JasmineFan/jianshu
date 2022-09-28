import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import {actionCreator} from './store'


class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0)
    }
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
            {this.props.showScroll?  <BackTop onClick={this.handleScrollTop}>顶部</BackTop>: null}        
        </HomeWrapper>)
    }
    componentDidMount(){
       this.props.changeHomeData()
       //异步请求原来在这里
       this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state)=>({
    showScroll: state.get('home').get('showScroll')
})
const mapDispatch =(dispatch)=>({
    changeHomeData(){
        //1 . 异步挪到了这里 2. 异步拆分到actionCreator 里面（因为有redux-thunk)
        const action =actionCreator.getHomeInfo()
        dispatch(action)
    },
    changeScrollTopShow(e){
        // console.log(e)
        // console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop>100){
            //显示返回顶部按钮
            dispatch(actionCreator.toggleTopShow(true))
        } else {
            dispatch(actionCreator.toggleTopShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home) 