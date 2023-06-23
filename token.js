const $=new Env('上观新闻兑换20元话费');
const ckName='sgxwdh20';
const{
	CookieJar,Cookie
}=require('tough-cookie');
const parser=require('@babel/parser');
const{
	log
}=console;
const notify=$.isNode()?require('./sendNotify'):'';
const Notify=1;
let envSplitor=['@','\n'];
let msg='';
let userCookie='13688858060#13688858060';
let dlurl=process.env.sgxwdl;
var HttpsProxyAgent=require('https-proxy-agent');
let sgxwdlurl1=process.env.sgxwdld;
let userList=[];
let userIdx=0;
let userCount=0;
const debug=0;
const CryptoJS=require('crypto-js');
function sjdd(){
	return randomInt(5000,9000);
}
function sjdd1(){
	return randomInt(100000,150000);
}
function DealScriptStr(_0x1ed74f){
	_0x1ed74f=_0x1ed74f.replace(/\/\*.*?\*\//g,' ');
	_0x1ed74f=_0x1ed74f.replace(/\b0(\d+)/g,'0o$1');
	return _0x1ed74f;
}
function dealToken(_0x7e5a8a){
	let _0xdf715e=DealScriptStr(_0x7e5a8a);
	let _0x3b5e2b=_0xdf715e;
	_0x3b5e2b=_0x3b5e2b.replace(/\\u0065\\u0076\\u0061\\u006c/g,'var babelStr=');
	eval(_0x3b5e2b);
	let _0x38a058=parser.parse(babelStr);
	let _0x185efa=_0x38a058.program.body[0].expression.right.value;
	return _0x185efa;
}
async function hqdl(){
	let _0x11effc=sgxwdlurl1.replace('//','/').split('/')[1];
	let _0x2ac27e={'url':''+sgxwdlurl1,'headers':{'Host':_0x11effc,'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','Connection':'Keep-Alive','Accept-Encoding':'gzip','User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'}};
	let _0x1fef28=await httpRequest3('get',_0x2ac27e);
	if(_0x1fef28.status==100){
		let _0x399320=_0x1fef28.data;
		console.log('账号'+this.index+'：🍺获取代理成功🍺');
		return _0x399320;
	}else{
		console.log('获取代理失败，停止脚本');
		process.exit();
	}
}
async function start(){
	console.log('🍺获取代理🍺');
	let _0x3782be=await hqdl();
	taskall=[];
	for(let _0x154de6 of userList){
		taskall.push(_0x154de6.dologin(_0x3782be));
	}
	await Promise.all(taskall);
	await wait(2000);
}
class UserInfo{
	constructor(_0x55d884){
		this.index=++userIdx;
		let _0x5adb01=_0x55d884.split('#');
		this.mobile=_0x5adb01[0];
		this.dhsjh=_0x5adb01[1];
		this.duibaCookieJar=new CookieJar();
	}async['start'](){
		try{
			console.log('\n============= 账号['+this.index+'] =============');
			console.log('🍺获取账号id🍺');
			await this.dologin(agent);
		}catch(_0x4bce65){
			console.log(_0x4bce65);
		}finally{}
	}async['hqdl'](){
		let _0x52598b=dlurl.replace('//','/').split('/')[1];
		let _0x472286={'url':''+dlurl,'headers':{'Host':_0x52598b,'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','Connection':'Keep-Alive','Accept-Encoding':'gzip','User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'}};
		let _0x310a6d=await httpRequest3('get',_0x472286);
		if(_0x310a6d.status==100){
			let _0x4cae54=_0x310a6d.data;
			console.log('账号'+this.index+'：🍺获取代理成功🍺');
			return _0x4cae54;
		}else{
			console.log('获取代理失败，停止脚本');
			process.exit();
		}
	}async['dologin'](_0x49a727){
		let _0x28586d=ts13();
		let _0x576352=CryptoJS.MD5(this.mobile+'$'+_0x28586d+'$rVX9ITrrTPrCurUe').toString();
		let _0x3c221d='times='+_0x28586d+'&devicecode='+this.devicecode+'&mobile='+this.mobile+'&sign='+_0x576352+'&platform=2&versionCode=9.9.5';
		let _0x5200a6='/dologin';
		let _0x1b8aa8={'url':'https://services.shobserver.com'+_0x5200a6,'headers':{'Content-Type':'application/x-www-form-urlencoded','Host':'services.shobserver.com','Connection':'Keep-Alive','Accept-Encoding':'gzip','User-Agent':'okhttp/3.8.0'},'body':_0x3c221d};
		let _0x254cad=_0x49a727[this.index-1].ip;
		let _0x4fb3b7=_0x49a727[this.index-1].port;
		this.dlip=_0x254cad+':'+_0x4fb3b7;
		this.agent=new HttpsProxyAgent('http://'+this.dlip);
		let _0x422575=await httpRequest('post',_0x1b8aa8,this.agent);
		if(_0x422575.breturn==true){
			this.name=_0x422575.object.nickname;
			this.uid=_0x422575.object.id;
			console.log('账号['+this.name+']：拥有'+_0x422575.object.score+'积分，绑定手机号：'+phone_num(_0x422575.object.mobile));
			if(_0x422575.object.score>=5280){
				console.log('账号['+this.name+']：🍺当前账号积分足够执行兑换话费任务🍺');
				await this.duibaHome();
			}else{
				console.log('账号['+this.name+']：积分不足，不执行兑换话费任务');
			}
		}else if(_0x422575==999){
			console.log('账号['+this.name+']：代理过期或失效，重新获取');
			let _0x49a727=await this.hqdl();
			let _0x254cad=_0x49a727[0].ip;
			let _0x4fb3b7=_0x49a727[0].port;
			this.dlip=_0x254cad+':'+_0x4fb3b7;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.dologin1();
		}else{
			console.log('账号['+this.name+']：'+_0x422575.errorinfo);
		}
	}async['dologin1'](){
		let _0x43d352=ts13();
		let _0x30dcbb=CryptoJS.MD5(this.mobile+'$'+_0x43d352+'$rVX9ITrrTPrCurUe').toString();
		let _0xeaffbb='times='+_0x43d352+'&devicecode='+this.devicecode+'&mobile='+this.mobile+'&sign='+_0x30dcbb+'&platform=2&versionCode=9.9.5';
		let _0x4d0f98='/dologin';
		let _0x41adcb={'url':'https://services.shobserver.com'+_0x4d0f98,'headers':{'Content-Type':'application/x-www-form-urlencoded','Host':'services.shobserver.com','Connection':'Keep-Alive','Accept-Encoding':'gzip','User-Agent':'okhttp/3.8.0'},'body':_0xeaffbb};
		let _0x52ffe4=await httpRequest('post',_0x41adcb,this.agent);
		if(_0x52ffe4.breturn==true){
			this.name=_0x52ffe4.object.nickname;
			this.uid=_0x52ffe4.object.id;
			console.log('账号['+this.name+']：拥有'+_0x52ffe4.object.score+'积分，绑定手机号：'+phone_num(_0x52ffe4.object.mobile));
			if(_0x52ffe4.object.score>=5280){
				console.log('账号['+this.name+']：🍺当前账号积分足够执行兑换话费任务🍺');
				await this.duibaHome();
			}else{
				console.log('账号['+this.name+']：积分不足，不执行兑换话费任务');
			}
		}else if(_0x52ffe4==999){
			console.log('账号['+this.name+']：代理过期或失效，重新获取');
			let _0x11d4fd=await this.hqdl();
			let _0x50c805=_0x11d4fd[0].ip;
			let _0x5ddad1=_0x11d4fd[0].port;
			this.dlip=_0x50c805+':'+_0x5ddad1;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.dologin1();
		}else{
			console.log('账号['+this.name+']：'+_0x52ffe4.errorinfo);
		}
	}async['duibaHome'](){
		let _0x497f4f=ts13();
		let _0x2b1917=CryptoJS.MD5(this.uid+'$'+_0x497f4f+'$rVX9ITrrTPrCurUe').toString();
		let _0x511679={'url':'https://services.shobserver.com/duiba/duibaHome','headers':{'Content-Type':'application/x-www-form-urlencoded','Host':'services.shobserver.com','Connection':'Keep-Alive','Accept-Encoding':'gzip','User-Agent':'okhttp/3.8.0'},'body':'times='+_0x497f4f+'&sign='+_0x2b1917+'&userId='+this.uid+'&platform=2&versionCode=9.9.5'};
		let _0x249d9a=await httpRequest('post',_0x511679,this.agent);
		if(_0x249d9a.breturn==true){
			console.log('账号'+this.index+'：获取登陆链接成功');
			await this.autologin(_0x249d9a.object.url);
		}else if(_0x249d9a==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0x5ec880=await this.hqdl();
			let _0x54106c=_0x5ec880[0].ip;
			let _0x5b2055=_0x5ec880[0].port;
			this.dlip=_0x54106c+':'+_0x5b2055;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.duibaHome();
		}else{
			console.log('账号'+this.index+'：'+_0x249d9a.msg);
		}
	}async['third'](_0x253ab0){
		let _0x57ccc9=_0x253ab0.replace('//','/').split('/')[1];
		let _0x30c4a9={'url':''+_0x253ab0,'headers':{'Host':_0x57ccc9,'Connection':'Keep-Alive','Accept-Encoding':'gzip','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','User-Agent':'Mozilla/5.0 (Linux; Android 12; M2007J3SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36wpsystem'},'cookieJar':this.duibaCookieJar};
		let _0x16ea00=await httpRequest2('get',_0x30c4a9,this.agent);
		if(_0x16ea00==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0x1a60d2=await this.hqdl();
			let _0xf331df=_0x1a60d2[0].ip;
			let _0x1eb5d6=_0x1a60d2[0].port;
			this.dlip=_0xf331df+':'+_0x1eb5d6;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.third();
		}else{
			console.log('账号'+this.index+'：获取手机号归属地');
			await this.reg();
			console.log('账号'+this.index+'：获取token');
			let _0x405d7e=await this.getToken();
			console.log('账号'+this.index+'：进行兑换20元话费');
			await this.exchange(_0x405d7e);
		}
	}async['detail'](){
		let _0x47ecc1=ts13();
		let _0x117d20={'url':'https://63373.activity-42.m.duiba.com.cn/mobile/detail?appItemId=218784906777054&dbnewopen','headers':{'Host':'63373.activity-42.m.duiba.com.cn','Connection':'Keep-Alive','Accept-Encoding':'gzip','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','User-Agent':'Mozilla/5.0 (Linux; Android 12; M2007J3SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36wpsystem'},'cookieJar':this.duibaCookieJar};
		let _0x1821c3=await httpRequest2('get',_0x117d20,this.agent);
		if(_0x1821c3==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0x4c5478=await this.hqdl();
			let _0x4474ac=_0x4c5478[0].ip;
			let _0x57b51e=_0x4c5478[0].port;
			this.dlip=_0x4474ac+':'+_0x57b51e;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.detail();
		}else{
			console.log('账号'+this.index+'：'+_0x1821c3.message);
		}
	}async['reg'](){
		let _0x1b29c=ts13();
		let _0xce497c={'url':'https://63373.activity-42.m.duiba.com.cn/phone/reg?tel='+this.dhsjh,'headers':{'Host':'63373.activity-42.m.duiba.com.cn','Connection':'Keep-Alive','Accept-Encoding':'gzip','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','User-Agent':'Mozilla/5.0 (Linux; Android 12; M2007J3SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36wpsystem'},'cookieJar':this.duibaCookieJar};
		let _0x49b754=await httpRequest('get',_0xce497c,this.agent);
		if(_0x49b754.success==true){
			this.sf=_0x49b754.data.province;
			this.yys=_0x49b754.data.catName;
			console.log('账号'+this.index+'：当前充值号码归属地为'+this.yys+this.sf);
		}else if(_0x49b754==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0x1673bc=await this.hqdl();
			let _0x4fbf44=_0x1673bc[0].ip;
			let _0x4f4b45=_0x1673bc[0].port;
			this.dlip=_0x4fbf44+':'+_0x4f4b45;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.reg();
		}else{
			console.log('账号'+this.index+'：'+_0x49b754.message);
		}
	}async['getToken'](){
		let _0x3e7c9b=ts13();
		let _0xd0629e={'url':'https://63373.activity-42.m.duiba.com.cn/gaw/ctoken/getToken?_='+_0x3e7c9b,'headers':{'Host':'63373.activity-42.m.duiba.com.cn','Connection':'keep-alive','Pragma':'no-cache','Cache-Control':'no-cache','Accept':'application/json','User-Agent':'Mozilla/5.0 (Linux; Android 12; M2007J3SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36 Shobserver/9.9.5','X-Requested-With':'XMLHttpRequest','Origin':'https://63373.activity-42.m.duiba.com.cn','Sec-Fetch-Site':'same-origin','Sec-Fetch-Mode':'cors','Sec-Fetch-Dest':'empty','Referer':'https://63373.activity-42.m.duiba.com.cn/mobile/detail?appItemId=218784906777054&dbnewopen','Accept-Encoding':'gzip, deflate','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'},'cookieJar':this.duibaCookieJar};
		let _0x9c7221=await httpRequest('post',_0xd0629e,this.agent);
		if(_0x9c7221.success==true){
			let _0x49deef=dealToken(_0x9c7221.token);
			return _0x49deef;
		}else if(_0x9c7221==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0x45668d=await this.hqdl();
			let _0x31dd21=_0x45668d[0].ip;
			let _0x34f4ff=_0x45668d[0].port;
			this.dlip=_0x31dd21+':'+_0x34f4ff;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.getToken();
		}else{
			console.log('账号'+this.index+'：'+_0x9c7221.message);
		}
	}async['exchange'](_0x55f064){
		let _0x584350={'url':'https://63373.activity-42.m.duiba.com.cn/phonebillExchange/exchange','headers':{'Content-Type':'application/x-www-form-urlencoded','Host':'63373.activity-42.m.duiba.com.cn','Connection':'Keep-Alive','Accept-Encoding':'gzip','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','User-Agent':'Mozilla/5.0 (Linux; Android 12; M2007J3SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36wpsystem'},'cookieJar':this.duibaCookieJar,'body':'appItemId=218784906777054&itemId=1889&phone='+this.dhsjh+'&degreeId=20&phoneCatName='+encodeURIComponent(this.yys)+'&phoneProvince='+encodeURIComponent(this.sf)+'&type=phonebillDingzhi&token='+_0x55f064};
		let _0x55d3f8=await httpRequest('post',_0x584350,this.agent);
		if(_0x55d3f8.success==true){
			let _0xfbe16d=_0x55d3f8.orderId;
			let _0x3c09af=_0x55d3f8.url;
			await this.orderStatusQuery(_0xfbe16d);
		}else if(_0x55d3f8==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0x199929=await this.hqdl();
			let _0x58da19=_0x199929[0].ip;
			let _0x494fbb=_0x199929[0].port;
			this.dlip=_0x58da19+':'+_0x494fbb;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.exchange();
		}else{
			console.log('账号'+this.index+'：'+_0x55d3f8.message);
		}
	}async['orderStatusQuery'](_0xf77616){
		let _0xc6090e={'url':'https://63373.activity-42.m.duiba.com.cn/mobile/orderStatusQuery/','headers':{'Content-Type':'application/x-www-form-urlencoded','Host':'63373.activity-42.m.duiba.com.cn','Connection':'Keep-Alive','Accept-Encoding':'gzip','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','User-Agent':'Mozilla/5.0 (Linux; Android 12; M2007J3SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36wpsystem'},'cookieJar':this.duibaCookieJar,'body':'orderId='+_0xf77616};
		let _0x5a32b0=await httpRequest('post',_0xc6090e,this.agent);
		if(_0x5a32b0.success==true){
			console.log('账号'+this.index+'：🍺🍺'+_0x5a32b0.message+'🍺🍺');
		}else if(_0x5a32b0==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0xc19743=await this.hqdl();
			let _0x5d2365=_0xc19743[0].ip;
			let _0x36b67c=_0xc19743[0].port;
			this.dlip=_0x5d2365+':'+_0x36b67c;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.orderStatusQuery();
		}else{
			console.log('账号'+this.index+'：'+_0x5a32b0.message);
		}
	}async['wc'](_0x619973){
		let _0x4599b0=_0x619973.replace('//','/').split('/')[1];
		let _0x3fc92f={'url':''+_0x619973,'headers':{'Host':_0x4599b0,'Connection':'Keep-Alive','Accept-Encoding':'gzip','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','User-Agent':'Mozilla/5.0 (Linux; Android 12; M2007J3SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36wpsystem'},'cookieJar':this.duibaCookieJar};
		let _0x1c5081=await httpRequest2('get',_0x3fc92f,this.agent);
		if(_0x1c5081==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0xf76449=await this.hqdl();
			let _0x1ac6f2=_0xf76449[0].ip;
			let _0x2ca1df=_0xf76449[0].port;
			this.dlip=_0x1ac6f2+':'+_0x2ca1df;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.wc();
		}
	}async['autologin'](_0x570402){
		let _0x1a17e1=_0x570402.replace('//','/').split('/')[1];
		let _0x4e0b18={'url':''+_0x570402,'headers':{'Host':_0x1a17e1,'Connection':'Keep-Alive','Accept-Encoding':'gzip','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','User-Agent':'Mozilla/5.0 (Linux; Android 12; M2007J3SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36wpsystem'}};
		let _0x238979=await httpRequest1('get',_0x4e0b18,this.agent);
		if(_0x238979.statusCode==302){
			let _0x4e0429=_0x238979.headers['set-cookie'].map(Cookie.parse);
			for(let _0x2a4f5d of _0x4e0429){
				if(_0x2a4f5d.value)this.duibaCookieJar.setCookieSync(_0x2a4f5d,'https://duiba.com.cn');
			}
			await this.third(_0x238979.headers.location);
		}else if(_0x238979==999){
			console.log('账号'+this.index+'：代理过期或失效，重新获取');
			let _0x333d53=await this.hqdl();
			let _0x504483=_0x333d53[0].ip;
			let _0x355edf=_0x333d53[0].port;
			this.dlip=_0x504483+':'+_0x355edf;
			this.agent=new HttpsProxyAgent('http://'+this.dlip);
			await this.autologin();
		}else{
			console.log('账号'+this.index+'：'+_0x238979.message);
		}
	}
}function isJson(_0x268d0c){
	return typeof _0x268d0c=='object'&&Object.prototype.toString.call(_0x268d0c).toLowerCase()==='[object object]'&&!_0x268d0c.length;
}async function httpRequest3(_0xac45e6,_0x401c4b){
	return new Promise(_0x3e18a3=>{
		send1(_0xac45e6,_0x401c4b,async(_0x16ed11,_0x55e456,_0x9f780a)=>{
			if(debug){
				log('\n【debug】=============== 这是  请求 url ===============');
				log(JSON.stringify(_0x401c4b));
			}
			if(debug){
				log('\n\n【debug】===============这是  返回data==============');
				log(JSON.stringify(_0x9f780a));
			}
			if(isJson(_0x9f780a)==true){
				if(_0x9f780a.statusCode==200){
					let _0x294e13=JSON.parse(_0x9f780a.body);
					_0x3e18a3(_0x294e13);
				}else{
					console.log('请求失败，请检查网络');
				}
			}else{
				console.log(''+_0x55e456);
				let _0x28f3e6=JSON.parse('{"status":999}');
				_0x3e18a3(_0x28f3e6);
			}
		});
	});
}function send1(_0x3822e4,_0x553b8f,_0x436ab9=()=>{}){
	if(_0x3822e4!='get'&&_0x3822e4!='post'&&_0x3822e4!='put'&&_0x3822e4!='delete'){
		console.log('无效的http方法：'+_0x3822e4);
		return;
	}
	if(_0x3822e4=='get'&&_0x553b8f.headers){
		delete _0x553b8f.headers['Content-Type'];
		delete _0x553b8f.headers['Content-Length'];
	}else if(_0x553b8f.body&&_0x553b8f.headers){
		if(!_0x553b8f.headers['Content-Type'])_0x553b8f.headers['Content-Type']='application/json';
	}
	if(1==1){
		this.got=this.got?this.got:require('got');
		const{
			url:s,..._0x26caf8
		}=_0x553b8f;
		this.instance=this.got.extend({'followRedirect':false});
		this.instance[_0x3822e4](s,_0x26caf8).then(_0x553b8f=>{
			const{statusCode:_0x26caf8,request:q,headers:r,body:o}=_0x553b8f;
			_0x436ab9(null,q,{'statusCode':_0x26caf8,'headers':r,'body':o});
		},_0x553b8f=>{
			const{message:s,request:q,response:_0x26caf8}=_0x553b8f;
			_0x436ab9(s,q,_0x26caf8);
		});
	}
}async function httpRequest(_0x302f9f,_0x1ea4d5,_0x4437d8){
	return new Promise(_0x467f0e=>{
		send(_0x4437d8,_0x302f9f,_0x1ea4d5,async(_0x382ba7,_0x19cc74,_0x4173e0)=>{
			if(debug){
				log('\n【debug】=============== 这是  请求 url ===============');
				log(JSON.stringify(_0x1ea4d5));
			}
			if(debug){
				log('\n\n【debug】===============这是  返回data==============');
				log(_0x4173e0);
			}
			if(isJson(_0x4173e0)==true){
				if(_0x4173e0.statusCode==200){
					let _0x46b247=JSON.parse(_0x4173e0.body);
					_0x467f0e(_0x46b247);
				}else{
					let _0x12cd14=_0x382ba7.length;
					if(_0x12cd14>0){
						let _0x46b247=999;
						_0x467f0e(_0x46b247);
					}
				}
			}else{
				let _0x1b8613=_0x382ba7.length;
				if(_0x1b8613>0){
					let _0x46b247=999;
					_0x467f0e(_0x46b247);
				}
			}
		});
	});
}async function httpRequest2(_0x14a778,_0x38f9af,_0x31f4df){
	return new Promise(_0x333697=>{
		send(_0x31f4df,_0x14a778,_0x38f9af,async(_0x28627,_0x5f1fd3,_0x475404)=>{
			if(debug){
				log('\n【debug】=============== 这是  请求 url ===============');
				log(JSON.stringify(_0x38f9af));
			}
			if(debug){
				log('\n\n【debug】===============这是  返回data==============');
				log(_0x475404);
			}
			if(isJson(_0x475404)==true){
				if(_0x475404.statusCode==200){
					let _0x539a12=_0x475404.body;
					_0x333697(_0x539a12);
				}else{
					let _0x45ae1a=_0x28627.length;
					if(_0x45ae1a>0){
						let _0x539a12=999;
						_0x333697(_0x539a12);
					}
				}
			}else{
				let _0x47d9d1=_0x28627.length;
				if(_0x47d9d1>0){
					let _0x539a12=999;
					_0x333697(_0x539a12);
				}
			}
		});
	});
}async function httpRequest1(_0x5175e1,_0x57694c,_0x52aa98){
	return new Promise(_0x3474ab=>{
		send(_0x52aa98,_0x5175e1,_0x57694c,async(_0x1c6674,_0x5ac132,_0x121257)=>{
			if(debug){
				log('\n【debug】=============== 这是  请求 url ===============');
				log(JSON.stringify(_0x57694c));
			}
			if(debug){
				log('\n\n【debug】===============这是  返回data==============');
				log(_0x121257);
			}
			if(isJson(_0x121257)==true){
				let _0x437588=_0x121257;
				_0x3474ab(_0x437588);
			}else{
				let _0x5b629e=_0x1c6674.length;
				if(_0x5b629e>0){
					let _0x437588=999;
					_0x3474ab(_0x437588);
				}
			}
		});
	});
}function send(_0xd2dd5a,_0x3e592c,_0x52dfd8,_0x6ab413=()=>{}){
	if(_0x3e592c!='get'&&_0x3e592c!='post'&&_0x3e592c!='put'&&_0x3e592c!='delete'){
		console.log('无效的http方法：'+_0x3e592c);
		return;
	}
	if(_0x3e592c=='get'&&_0x52dfd8.headers){
		delete _0x52dfd8.headers['Content-Type'];
		delete _0x52dfd8.headers['Content-Length'];
	}else if(_0x52dfd8.body&&_0x52dfd8.headers){
		if(!_0x52dfd8.headers['Content-Type'])_0x52dfd8.headers['Content-Type']='application/json';
	}
	if(1==1){
		this.got=this.got?this.got:require('got');
		const{
			url:s,..._0xb62562
		}=_0x52dfd8;
		this.instance=this.got.extend({'followRedirect':false,'agent':{'https':_0xd2dd5a,'http':_0xd2dd5a}});
		this.instance[_0x3e592c](s,_0xb62562).then(_0x52dfd8=>{
			const{statusCode:_0xb62562,request:q,headers:r,body:o}=_0x52dfd8;
			_0x6ab413(null,q,{'statusCode':_0xb62562,'headers':r,'body':o});
		},_0x52dfd8=>{
			const{message:s,request:q,response:_0xb62562}=_0x52dfd8;
			_0x6ab413(s,q,_0xb62562);
		});
	}
}!(async()=>{
	if(!(await checkEnv()))return;
	if(userList.length>0){
		await start();
	}
	await SendMsg(msg);
})().catch(_0x26df60=>console.log(_0x26df60)).finally(()=>$.done());
async function SendMsg(_0xb71713){
	if(!_0xb71713)return;
	if(Notify>0){
		if($.isNode()){
			var _0x44e4a8=require('./sendNotify');
			await _0x44e4a8.sendNotify($.name,_0xb71713);
		}else{
			$.msg(_0xb71713);
		}
	}else{
		log(_0xb71713);
	}
}
function ts13(){
	return Math.round(new Date().getTime()).toString();
}
function randomInt(_0xed8461,_0x32f67b){
	return Math.round(Math.random()*(_0x32f67b-_0xed8461)+_0xed8461);
}
function randomUUID(){
	return randomPattern('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
}
function randomPattern(_0x15be52,_0x597c6e='abcdef0123456789'){
	let _0x701ba='';
	for(let _0x21db87 of _0x15be52){
		if(_0x21db87=='x'){
			_0x701ba+=_0x597c6e.charAt(Math.floor(Math.random()*_0x597c6e.length));
		}else if(_0x21db87=='X'){
			_0x701ba+=_0x597c6e.charAt(Math.floor(Math.random()*_0x597c6e.length)).toUpperCase();
		}else{
			_0x701ba+=_0x21db87;
		}
	}
	return _0x701ba;
}
function phone_num(_0x2e0943){
	if(_0x2e0943.length==11){
		let _0x56c497=_0x2e0943.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2');
		return _0x56c497;
	}else{
		return _0x2e0943;
	}
}
function wait(_0x5deda3){
	return new Promise(function(_0x2f084a){
		setTimeout(_0x2f084a,_0x5deda3);
	});
}
function randomString1(_0x18ade7){
	_0x18ade7=_0x18ade7||32;
	var _0x141b38='123456789',_0x11e969=_0x141b38.length,_0xa18619='';
	for(i=0;i<_0x18ade7;i++)_0xa18619+=_0x141b38.charAt(Math.floor(Math.random()*_0x11e969));
	return _0xa18619;
}
function randomString2(_0x466df0){
	_0x466df0=_0x466df0||32;
	var _0x163cfa='1234567890',_0x8d26d8=_0x163cfa.length,_0x384bbc='';
	for(i=0;i<_0x466df0;i++)_0x384bbc+=_0x163cfa.charAt(Math.floor(Math.random()*_0x8d26d8));
	return _0x384bbc;
}
function randomString(_0x2cd7db){
	_0x2cd7db=_0x2cd7db||32;
	var _0x308d03='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890',_0x46159d=_0x308d03.length,_0x11e818='';
	for(i=0;i<_0x2cd7db;i++)_0x11e818+=_0x308d03.charAt(Math.floor(Math.random()*_0x46159d));
	return _0x11e818;
}
async function checkEnv(){
	if(userCookie){
		let _0x12c6c9=envSplitor[0];
		for(let _0x2183c4 of envSplitor)if(userCookie.indexOf(_0x2183c4)>-1){
			_0x12c6c9=_0x2183c4;
			break;
		}
		for(let _0x2d151f of userCookie.split(_0x12c6c9))_0x2d151f&&userList.push(new UserInfo(_0x2d151f));
		userCount=userList.length;
	}else{
		console.log('未找到CK');
		return;
	}
	return console.log('共找到'+userCount+'个账号'),!0;
};
function Env(t,e){
	class s{
		constructor(t){
			this.env=t
		}send(t,e="GET"){
			t="string"==typeof t?{url:t}:t;
			let s=this.get;
			return "POST"===e&&(s=this.post),new Promise((e,i)=>{
				s.call(this,t,(t,s,r)=>{t?i(t):e(s)})
			})
		}get(t){
			return this.send.call(this.env,t)
		}post(t){
			return this.send.call(this.env,t,"POST")
		}
	}return new class{
		constructor(t,e){
			this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)
		}isNode(){
			return "undefined"!=typeof module&&!!module.exports
		}isQuanX(){
			return "undefined"!=typeof $task
		}isSurge(){
			return "undefined"!=typeof $httpClient&&"undefined"==typeof $loon
		}isLoon(){
			return "undefined"!=typeof $loon
		}toObj(t,e=null){
			try{
				return JSON.parse(t)
			}catch{
				return e
			}
		}toStr(t,e=null){
			try{
				return JSON.stringify(t)
			}catch{
				return e
			}
		}getjson(t,e){
			let s=e;
			const i=this.getdata(t);
			if(i)try{
				s=JSON.parse(this.getdata(t))
			}
			catch{}return s
		}setjson(t,e){
			try{
				return this.setdata(JSON.stringify(t),e)
			}catch{
				return!1
			}
		}getScript(t){
			return new Promise(e=>{
				this.get({url:t},(t,s,i)=>e(i))
			})
		}runScript(t,e){
			return new Promise(s=>{
				let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i=i?i.replace(/\n/g,"").trim():i;
				let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r=r?1*r:20,r=e&&e.timeout?e.timeout:r;
				const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};
				this.post(a,(t,e,i)=>s(i))
			}).catch(t=>this.logErr(t))
		}loaddata(){
			if(!this.isNode())return{};
			{
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);
				if(!s&&!i)return{};
				{
					const i=s?t:e;
					try{
						return JSON.parse(this.fs.readFileSync(i))
					}catch(t){
						return{}
					}
				}
			}
		}writedata(){
			if(this.isNode()){
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);
				s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)
			}
		}lodash_get(t,e,s){
			const i=e.replace(/\[(\d+)\]/g,".$1").split(".");
			let r=t;
			for(const t of i)if(r=Object(r)[t],void 0===r)return s;
			return r
		}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){
			let e=this.getval(t);
			if(/^@/.test(t)){
				const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";
				if(r)try{
					const t=JSON.parse(r);
				}
				catch(t){
					e=""
				}
			}
			return e
		}setdata(t,e){
			let s=!1;
			if(/^@/.test(e)){
				const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";
				try{
					const e=JSON.parse(h);
					this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)
				}catch(e){
					const o={};
					this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)
				}
			}else s=this.setval(t,e);
			return s
		}getval(t){
			return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null
		}setval(t,e){
			return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null
		}initGotEnv(t){
			this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))
		}get(t,e=(()=>{})){
			t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{
				try{
					if(t.headers["set-cookie"]){
						const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
						this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar
					}
				}catch(t){
					this.logErr(t)
				}
			}).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>{
				const{message:s,response:i}=t;
				e(s,i,i&&i.body)
			}))
		}post(t,e=(()=>{})){
			if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t));else if(this.isNode()){
				this.initGotEnv(t);
				const{
					url:s,...i
				}=t;
				this.got.post(s,i).then(t=>{
					const{statusCode:s,statusCode:i,headers:r,body:o}=t;
					e(null,{status:s,statusCode:i,headers:r,body:o},o)
				},t=>{
					const{message:s,response:i}=t;
					e(s,i,i&&i.body)
				})
			}
		}time(t){
			let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};
			/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));
			for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));
			return t
		}msg(e=t,s="",i="",r){
			const o=t=>{
				if(!t)return t;
				if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}
				:this.isSurge()?{url:t}:void 0;
				if("object"==typeof t){
					if(this.isLoon()){
						let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];
						return{openUrl:e,mediaUrl:s}
					}
					if(this.isQuanX()){
						let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;
						return{"open-url":e,"media-url":s}
					}
					if(this.isSurge()){
						let e=t.url||t.openUrl||t["open-url"];
						return{url:e}
					}
				}
			};
			this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));
			let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
			h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)
		}log(...t){
			t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))
		}logErr(t,e){
			const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();
		}wait(t){
			return new Promise(e=>setTimeout(e,t))
		}done(t={}){
			const e=(new Date).getTime(),s=(e-this.startTime)/1e3;
			this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)
		}
	}(t,e)
};
