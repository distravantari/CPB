import * as con from './const'
import base from '../config/db'

export default(context) =>{
  console.log('default')
  return dispatch => {
    base.listenTo('container', {
      context: context,
      then(data){
        dispatch(receiveContainer(data))
      }
    })
  }
}

let receiveContainer = response => {
  console.log('receiveContainer')
  return {
    type: con.ACTReceiveContainer,
    payload:{
      response
    }
  }
}

export const editHeader = (data) => {
  return base.post((`container/header/IMG`),{
    data : data
  })
}

export const editFooter = (data) => {
  return base.post((`container/footer_components`),{
    data : data
  })
}
