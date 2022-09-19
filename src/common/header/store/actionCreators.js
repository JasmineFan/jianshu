import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
export const searchFocus = ()=>({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = ()=>({
    type: constants.SEARCH_BLUR
})

const changeList = (data)=>({
    type:constants.CHANGE_LIST,
    data: fromJS(data)
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