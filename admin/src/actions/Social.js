import * as con from './const'
import base from '../config/db'

export default(context) => {
  return dispatch => {
    base.listenTo('social',{
      context: context,
      asArray: true,
      then(data){
        dispatch(receiveSocial(data))
      }
    })
  }
}

let receiveSocial = (response) =>{
  return{
    type: con.ACTReceiveSocial,
    payload:{
      response
    }
  }
}

export const editSocial = (data) => {
  return base.post((`social`),{
    data: data
  })
}

export const editMaps = (data) => {
  return base.post((`social/maps`),{
    data : data
  })
}
