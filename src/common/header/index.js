import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SeachInfoItem, SearchInfoList } from './style'
import { connect } from 'react-redux' //让header 组件和store 建立连接
import { actionCreators } from './store'
class Header extends Component {
    getListArea() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜素
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item,index) => {
                                return <SeachInfoItem key={index}>{item}</SeachInfoItem>
                            })
                        }

                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
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
                        <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
                            <NavSearch placeholder="搜素"
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleSearchFocus}
                                onBlur={this.props.handleSearchBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}
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
        list: state.get('header').get('list')
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
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)