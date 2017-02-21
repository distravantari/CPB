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

export const deleteSlider = (index) => {
    return base.remove(`feature/slider/big/list/${index}`)
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

export const deleteVouchers = (index) => {
    return base.remove(`feature/vouchers/list/${index}`)
}

export const editNews = (key, data) => {
  return base.post((`feature/news/${key}`),{
    data : data
  })
}

export const addNews = (index, data) => {
    return base.post((`feature/news/list/${index}`), {
      data: data
    })
}

export const deleteNews = (index) => {
    return base.remove(`feature/news/list/${index}`)
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

export const deletePackets = (index) => {
  return base.remove(`feature/packets/list/${index}`)
}

export const addChild = (indexParent, index, data) => {
    return base.post((`feature/packets/list/${indexParent}/CHILD/list/${index}`), {
      data: data
    })
}

export const editChild = (indexParent, key, data) => {
    return base.post((`feature/packets/list/${indexParent}/CHILD/${key}`), {
      data: data
    })
}

export const deleteChild = (indexParent, index) => {
  console.log(index,'indexchild');
  return base.remove(`feature/packets/list/${indexParent}/CHILD/list/${index}`)
}
