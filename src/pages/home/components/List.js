import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from '../style'
import {connect} from 'react-redux'
import {actionCreator} from '../store'

class List extends Component {
    render() {
        const {list, getMoreList, page} = this.props
        return (
            <div>
                {
                    list.map((item,index)=>{
                        return (
                            <ListItem key={index}>
                            <img className="pic" src={item.get('imgUrl')}></img>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>  
                        )
                    })
                }  
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>           
            </div>
        )
    }
}

const mapStatetoprops = (state) => ({
	list: state.get('home').get('articleList'),
	page: state.get('home').get('articlePage')
});

const mapDispatch = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreator.getMoreList(page))
    }
})

export default connect( mapStatetoprops, mapDispatch )(List);
