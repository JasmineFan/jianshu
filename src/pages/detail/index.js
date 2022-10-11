import React, { Component } from "react";
import { DetailWrapper, Header , Content} from './style'
import {connect} from 'react-redux'
import {actionCreator} from './store'
class Detail extends Component {
  
    render() {
        // console.log(this.props.location.search)  //需要自己处理字符串，麻烦
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                </Content>
            </DetailWrapper>
            )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)  //动态路由
    }
}

const mapState = (state)=>({
    title:state.get('detail').get('title'),
    content:state.get('detail').get('content')
})
const mapDispatch = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreator.getDetail(id))
    }
})
export default connect(mapState, mapDispatch)(Detail)