import axios from "axios"

import * as con from './const'
import base from '../config/db'

export default (context) => {
  return dispatch => {
    base.listenTo('about', {
      context: context,
      asArray: false,
      then(data){
        dispatch(receiveAbout(data))
      }
    })
  }
}

let receiveAbout = (response) => {
    return {
      type: con.ACTReceiveAbout,
      payload:{
        response
      }
    }
}

export const editAbout = (data) => {
  return base.post(`about`,{
      data: data
    })
}
