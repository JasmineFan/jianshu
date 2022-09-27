import React, {Component} from "react";
import {RecommendWrapper,RecommendItem} from '../style'
import {connect} from 'react-redux'

class Recommend extends Component {
    render(){
        const {list} = this.props
        return (
        <RecommendWrapper>
            {list.map((item)=>(<RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>))}
        </RecommendWrapper>
        )
    }
}

const setState =(state)=>({
    list:state.get('home').get('recommendList')
})
export default connect(setState, null)(Recommend)