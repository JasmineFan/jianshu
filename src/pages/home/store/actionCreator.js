import axios from "axios"
import * as constants from './constants'
import { fromJS } from "immutable"

const changeHomeData = (result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList: result.articleList
})

const addHomeList = (result,nextPage)=>({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(result),
    nextPage
})
export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            const result = res.data.data
            // console.log(result)
            dispatch(changeHomeData(result))
        })      
    }
}

export const getMoreList = (page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then(res=>{
            const result = res.data.data
            // console.log(result)
            dispatch(addHomeList(result,page+1))
        })      
    }
}