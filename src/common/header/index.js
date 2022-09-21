import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SeachInfoItem, SearchInfoList } from './style'
import { connect } from 'react-redux' //让header 组件和store 建立连接
import { actionCreators } from './store'
class Header extends Component {
   
    getListArea() {
        const {focused, list, page, mouseIn, totalPage,  handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
        const newList = list.toJS()
        const pageList = []

        if(newList.length){
            for(let i=(page-1)*10; i<page*10 ;i++){
                console.log(newList[i])  //如果不判断newlist ， 最开始会得到10个undefined
                pageList.push(<SeachInfoItem key={newList[i]}>{newList[i]}</SeachInfoItem>)
            }
        }
       
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}          
                >
                    <SearchInfoTitle>
                        热门搜素
                        <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage)}>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        const {focused, handleSearchBlur, handleSearchFocus} = this.props
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                            <NavSearch placeholder="搜素"
                                className={focused ? 'focused' : ''}
                                onFocus={handleSearchFocus}
                                onBlur={handleSearchBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont' : 'iconfont'}
                        >&#xe637;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addtion>
                    <Button className="writting">
                        <span className="iconfont">&#xe600;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addtion>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        // focused: state.getIn(['header', 'focused'])
        list: state.get('header').get('list'),
        page:state.get('header').get('page'),
        totalPage:state.get('header').get('totalPage'),
        mouseIn:state.get('header').get('mouseIn')
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleSearchFocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleSearchBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage){
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
            
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)