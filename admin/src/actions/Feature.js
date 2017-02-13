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

export const editSlider = (key, data) => {
  return base.post((`feature/slider/${key}`),{
    data : data
  })
}

export const addSlider = (index, data) => {
    return base.post((`feature/slider/big/list/${index}`), {
      data: data
    })
}

export const editVouchers = (key, data) => {
  return base.post((`feature/vouchers/${key}`),{
    data : data
  })
}

export const addVouchers = (index, data) => {
    return base.post((`feature/vouchers/list/${index}`), {
      data: data
    })
}

export const editPackets = (key, data) => {
  return base.post((`feature/packets/${key}`),{
    data : data
  })
}

export const addPackets = (index, data) => {
    return base.post((`feature/packets/list/${index}`), {
      data: data
    })
}
