import Axios from 'axios'
import store from '../store'

class Request {
    static send (url: string, type: string) {
        return Axios.get<Response>(url)
            .then((response) => {
                if (response?.data) store.dispatch(type, response.data)
            })
            .catch((err: object) => console.log(err))
    }
}

export default Request
