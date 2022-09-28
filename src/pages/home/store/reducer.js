import { fromJS } from 'immutable'
import Pic1 from '../../../statics/1.png'
import Pic2 from '../../../statics/2.png'
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [{
        id: 1,
        imgUrl: Pic1
    }, {
        id: 2,
        imgUrl: Pic2
    }],
    articlePage: 1,
    showScroll:false

})

const changeHomeData= (state, action)=>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
    })
}

const addArticleList = (state, action)=>{
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            //    state.set('topicList',fromJS(action.topicList))
            //         .set('articleList',fromJS(action.articleList))
            return changeHomeData(state,action)
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action)
        case constants.UPDATE_SHOW_SCROLL:
            return state.set('showScroll', action.show)     
        default:
            return state
    }
}