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

let receiveFeature = (response) => {
    return {
        type: con.ACTReceiveFeature,
        payload: {
            response
        }
    }
}