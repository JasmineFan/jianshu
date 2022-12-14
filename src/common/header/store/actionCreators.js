import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data)=>({
    type:constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
})

export const searchFocus = ()=>({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = ()=>({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = ()=>({
    type: constants.MOUSE_ENTER
})
export const mouseLeave = ()=>({
    type: constants.MOUSE_LEAVE
})
export const changePage = (page)=>({
    type:constants.CHANGE_PAGE,
    page
})


export const getList = ()=>{
    return (dispatch)=>{
        //在这写异步请求
        axios.get('/api/headerList.json').then((res)=>{
            // console.log(res.data)
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(()=>{
            console.log('error')
        })

    }
}