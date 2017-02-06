import axios from "axios"

import * as con from './const'
import base from 'app_path/config/db'

export default (context) => {
    return dispatch => {
        base.listenTo('feature', {
            context: context,
            asArray: true,
            then(data){
                dispatch(receiveFeature(data))
            }
        })
    }
}

const receiveFeature = (response) => {
    return {
        type: con.ACTReceiveFeature,
        payload: {
            response
        }
    }
}

//add
export const addEmail = (name, email, text) => {
    base.push('inbox/list', {
      data: {
        name: name,
        email: email,
        text: text
      }
    }).then(newLocation => {
      var generatedKey = newLocation.key;
    })
}

// edit
export const editEmail = (key) => {
  base.post(`inbox/list/${key}`, {
    data: {
      name: 'Tyler McGinnis',
      age: 25
    }
  }).then(() => {
    Router.transitionTo('dashboard');
  })
}
