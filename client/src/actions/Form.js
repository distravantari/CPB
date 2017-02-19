import axios from 'axios'

import * as con from './const'
import base from '../config/db'

export const receiveForm = (subject,text) => {
    return axios ({
        method: 'post',
        url: 'http://localhost:3000/email',
        data: {
            to: 'nensivalentina@gmail.com',
            subject: subject,
            text: text
        }
    }) 
}

export default receiveForm
