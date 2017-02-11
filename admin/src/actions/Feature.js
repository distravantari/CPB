import * as con from './const'
import base from '../config/db'

export default(context) => {
  return dispatch => {
    base.listenTo('feature',{
      context: context,
      asArray: true,
      then(data){
        dispatch(receiveFeature(data))
      }
    })
  }
}

let receiveFeature = (response) =>{
  return{
    type: con.ACTReceiveFeature,
    payload:{
      response
    }
  }
}

export const editContact = (key, data) => {
  return base.post((`feature/${key}`),{
    data: data
  })
}

export const editPackets = (key, data) => {
  return base.post((`feature/packets/${key}`),{
    data: data
  })
}
