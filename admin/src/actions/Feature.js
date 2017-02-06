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
  console.log('default')
  return{
    type: con.ACTReceiveFeature,
    payload:{
      response
    }
  }
}
