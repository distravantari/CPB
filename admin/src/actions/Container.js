import * as con from './const'
import base from '../config/db'

export default(context) =>{
  return dispatch => {
    base.listenTo('container', {
      context: context,
      asArray: true,
      then(data){
        dispatch(receiveContainer(data))
      }
    })
  }
}

let receiveContainer = response => {
  return {
    type: con.ACTReceiveContainer,
    payload:{
      response
    }
  }
}
