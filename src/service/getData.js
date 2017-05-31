import axios from 'axios'

// const host = 'http://210.73.213.236'
const host = 'http://api.dewmobile.net'

var init = (requestHeader) => axios.get(host + '/v4/bizplan/open', {
    headers: {
      "X-CK": "authToken=" + requestHeader.token,
      "X-UserId": requestHeader.uid,
      "X-UUID": requestHeader.uuid
    }
})

export {init}
