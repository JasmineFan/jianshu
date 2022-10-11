import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link  key={index} to={'/detail/'+item.get('id')}>
                            {/* <Link  key={index} to={'/detail?id='+item.get('id')}> */}
                            
                                <ListItem>
                                    <img className="pic" src={item.get('imgUrl')}></img>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapStatetoprops = (state) => ({
    list: state.get('home').get('articleList'),
    page: state.get('home').get('articlePage')
});

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreator.getMoreList(page))
    }
})

export default connect(mapStatetoprops, mapDispatch)(List);
