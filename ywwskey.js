
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

ck =$request.headers.Cookie
var CookieValue = ck.match(/wskey=.+?;/)

data=JSON.parse($response.body)
    data = data.userInfoSns.unickName
    url = '%E4%BD%99%E6%B8%A9wskey%E8%8E%B7%E5%8F%96%E6%8F%90%E9%86%92%E6%82%A8'



console.log(ck)
$notify(decodeURI(url), "京东wskey获取成功", "pin="+data+";"+CookieValue);
    $done();
