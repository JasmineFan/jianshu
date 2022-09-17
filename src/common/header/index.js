import React from "react";
import { CSSTransition } from "react-transition-group";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper } from './style'
import { connect } from 'react-redux' //让header 组件和store 建立连接
import {actionCreators} from './store'

const Header = (props) => (
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
                <CSSTransition in={props.focused} timeout={200} classNames="slide">
                    <NavSearch placeholder="搜素"
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleSearchFocus}
                        onBlur={props.handleSearchBlur}
                    ></NavSearch>
                </CSSTransition>
                <span className={props.focused ? 'focused iconfont' : 'iconfont'}
                >&#xe637;</span>
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

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}   //state 是store 里面的所有数据

const mapDispathToProps = (dispatch) => {
    return {
        handleSearchFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleSearchBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)