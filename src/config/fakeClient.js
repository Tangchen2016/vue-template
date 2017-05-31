export function Zapya(){}

Zapya.isValidUser = function () {
    return true;
};
Zapya.getUrl = function () {
    return 'http://api.dewmobile.net';
};
Zapya.isLogin = function () {
    return true;
};
Zapya.getUserId = function () {
    // return '25159217';
    return '2969381';
};
Zapya.getToken = function () {
    // return 'autoToken=13087dc1d0b5ce7093cb8e2f72ef50cb'
    return 'autoToken=123f259123b5e7dafac197364f483162'
};
Zapya.getUUID = function () {
    // return '9abbce75-5a6e-3dd8-8843-8bae0dd10f25-198711'
    return '2a8437c8-df23-3ad1-a7a2-ec11111ee448-698987-03'
};
Zapya.getVersionCode = function () {
    return 161;
};

window._vipJSface = {
    getFrom : function () {
      return '';
    }
}
