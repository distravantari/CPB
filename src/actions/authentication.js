import axios from "axios"
import * as con from "./const" //ALL CONSTATNTA FIELD
import md5 from 'MD5'

// username = edward
// password = 5202754

export function fetchToken(uname, pass) {
    return dispatch => {
        let url = `${con.BaseURL}/${con.path.GETTOKEN}/`
        let data = {
            username: uname,
            password: md5(pass)
        }

        // return axios({
        //     method: 'post',
        //     url: url,
        //     data: data
        // })
        // .then(response => {
        //     return response.data.token
        // })
        // .then(response => {
        //     fetchUser(uname, pass, response, 'ip', 'session', dispatch)
        // })
        // .catch(error => console.log(error))

        axios({
            method: 'post',
            url: url,
            data: data
        })

    }
}

function fetchUser(uname, pass, token, ip, session, dispatch) {
    let url = `${con.BaseURL}/${con.path.LOGIN}/`
    let data = {
        username: uname,
        password: md5(pass),
        login_ip: ip,
        session: session
    }

    return axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
            authorization: `jwt ${token}`
        }
    })
    .then(response => {
        dispatch(receiveUser(response))
    })
    .catch(error => console.log(error))
}

function receiveUser(response) {
    return {
        type: con.ACTReceiveUser,
        payload: {
            response
        }
    }
}