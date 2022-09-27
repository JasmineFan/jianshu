import { fromJS } from 'immutable'
import Pic1 from '../../../statics/1.png'
import Pic2 from '../../../statics/2.png'
import * as constants from './constants'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[{
        id:1,
        imgUrl: Pic1
    },{
        id:2,
        imgUrl: Pic2
    }]
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
        //    state.set('topicList',fromJS(action.topicList))
        //         .set('articleList',fromJS(action.articleList))
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList)
        })
        
        default:
            return state  
    }
}