
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 
 const url_list = [
	//{"name":"海星", "url": "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630938453778&ptag=7155.9.47&dwType=4&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&h5st=20210906222733778%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3B02c18f672661872145c0426f8720e453fb8c002a6d7db88ae74949ff5c5594b1&_=1630938453779&sceneval=2&g_login_type=1&callback=jsonpCBKHH&g_ty=ls"},
	{"name":"大海螺", "url": "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630939116602&ptag=7155.9.47&dwType=3&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&h5st=20210906223836603%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3Be25ace6d42baef3a4b30c8c95a4a58c8e78432bfb10f5df3a8c0d43e165bbcac&_=1630939116605&sceneval=2&g_login_type=1&callback=jsonpCBKK&g_ty=ls"},
	{"name":"扇贝", "url": "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630938867356&ptag=7155.9.47&dwType=6&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&h5st=20210906223427357%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3B660eb93a7f01c5571f2a42cfa39f102c01ede426a1b6e4455919b206cf68f25f&_=1630938867358&sceneval=2&g_login_type=1&callback=jsonpCBKT&g_ty=ls"},
	{"name":"小贝壳", "url": "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630940426815&ptag=7155.9.47&dwType=5&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&h5st=20210906230026816%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3Bd0e49860012acf0146259047b18027c1643013d574f42c5bb6bffd01fa3481c0&_=1630940426819&sceneval=2&g_login_type=1&callback=jsonpCBKQ&g_ty=ls"},
	{"name":"小海螺", "url": "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630938667275&ptag=7155.9.47&dwType=2&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&h5st=20210906223107276%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3B493b9d8dcf85210603b441747c42e0a9e9545fc535f6fbe1bab42067529c9059&_=1630938667278&sceneval=2&g_login_type=1&callback=jsonpCBKK&g_ty=ls"},
	{"name":"珍珠", "url": "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630914439639&ptag=7155.9.47&dwType=1&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&h5st=20210906154719639%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3B5cb992ba34babfb8b1d3c1410425812622c44383f34b7d49a3e45a5e64f9069e&_=1630914439642&sceneval=2&g_login_type=1&callback=jsonpCBKLL&g_ty=ls"}
	//{"name":"小贝壳", "url": "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630940426815&ptag=7155.9.47&dwType=5&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&h5st=20210906230026816%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3Bd0e49860012acf0146259047b18027c1643013d574f42c5bb6bffd01fa3481c0&_=1630940426819&sceneval=2&g_login_type=1&callback=jsonpCBKQ&g_ty=ls"},
];
  
const body = ``;
const url = `https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630938453778&ptag=7155.9.47&dwType=4&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&h5st=20210906222733778%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3B02c18f672661872145c0426f8720e453fb8c002a6d7db88ae74949ff5c5594b1&_=1630938453779&sceneval=2&g_login_type=1&callback=jsonpCBKHH&g_ty=ls`;
const method = `GET`;
const headers = {
'Cookie' : `__jd_ref_cls=jingxi_139254_12_1; mba_muid=6019622583932287.1.1630938453773; mba_sid=1.5; defaultHeadId=11983206; gDSId=289; gHeadAddressId=19_1607_3155_62120; gHeadPlanId=19391; gSId=1; PPRD_P=UUID.16309171149091976301998-CT.139224.14.37; __jda=68990090.16309171149091976301998.1630917114.1630925559.1630936432.6; __jdv=68990090%7Cdirect%7C-%7Cnone%7C-%7C1630917114907; __wga=1630937563205.1630937440921.1630925559150.1630900654787.3.5; visitkey=42665975789190532; wq_addr=1094045078%7C19_1607_3155_62120%7C%E5%B9%BF%E4%B8%9C_%E6%B7%B1%E5%9C%B3%E5%B8%82_%E5%8D%97%E5%B1%B1%E5%8C%BA_%E8%A5%BF%E4%B8%BD%E8%A1%97%E9%81%93%7C%E5%B9%BF%E4%B8%9C%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%8D%97%E5%B1%B1%E5%8C%BA%E8%A5%BF%E4%B8%BD%E8%A1%97%E9%81%93%E6%9D%BE%E5%9D%AA%E6%9D%91%E4%B8%89%E6%9C%9F(%E4%B8%9C%E5%8C%BA)%205%E6%A0%8B29b%7C113.956161%2C22.559525; __jdb=68990090.5.16309171149091976301998|6.1630936432; __jdc=68990090; __jxjda=68990090.6019622583932287.1630771242.1630925392.1630935889.20; _tj_rvurl=https%3A//wq.jd.com/cube/front/activePublish/fortune_island/492139.html%3Fptag%3D7155.9.47%26EA_PTAG%3Dundefined%26srv%3D%26isnewuser%3D0%26isjxnewuser%3D0%26sharePin%3Dundefined; channel=; cid=4; clientid=4a717eb53a6145ef68e1779ba843d0a83debc4d6; deviceName=iPhone; deviceOS=iOS; deviceOSVersion=14.3; deviceVersion=5.3.0; equipmentId=eidIf11a812278scfrgj10mQRvuyhkC6IY5%2Fm364JUv6NJA0uLCgNdJcDw1vt78XIvyXRGw2QhndS0famsdix%2FjlJelPaTaZGFqt3ah0n6872X2j5rpr; erp=; fingerprint=5fe07326b5ac739a704b8512047d5709; jxsid_s_t=1630937563592; jxsid_s_u=https%3A//st.jingxi.com/fortune_island/index2.html; retina=1; share_cpin=; share_gpin=; share_open_id=; shshshfp=5139d7c1c113a51ffa52731f038c1052; shshshfpa=3ec11e6f-9464-00b6-1e83-ac013b54c65b-1600691412; shshshfpb=oui9GZuZnba2%20Ouj1%2FtPMFA%3D%3D; shshshsID=d956e10f5534ecdfb738e7e45d3138dd_5_1630937563356; source_module=; wqmnx1=MDEyNjM5Ny9pdG4uZzQ5NW87LmJmYWRlZmkyZEEwLTAwcFBVdUloMEI7NzI3L3BXbGlQIGxPbDYoaSkxMjctNFJIISk%3D; wxa_level=1; pt_key=app_openAAJhM5grADBiT7nsIgSnYYOBDCZiidnPpsKMIp8gYH3Sp_3yE7NSDyMPMn4M41P6mxBZZWhAuMo; pt_pin=jd_497d8aac0f3af; pwdt_id=jd_497d8aac0f3af; sid=37c0dde7dee3c06223f6a5f412fb7cbw; jxsid=16308836447704935502; sc_width=390; webp=1`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Referer' : `https://st.jingxi.com/fortune_island/index2.html?ptag=7155.9.47`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `m.jingxi.com`,
'User-Agent' : `jdpingou;iPhone;5.3.0;14.3;4a717eb53a6145ef68e1779ba843d0a83debc4d6;network/wifi;model/iPhone13,2;appBuild/100637;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/72;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'Accept-Language' : `zh-cn`
};

for(var i=0;i<url_list.length;i++){

		console.log("海滩捡贝壳："+ url_list[i].name);
		const myRequest = {
			url: url_list[i].url,
			method: method,
			headers: headers,
			body: body
			};
		for(var j=0;j<10;j++){
			$task.fetch(myRequest).then(response => {
				console.log(response.statusCode + "\n\n" + response.body.iRet);
				if(response.body.iRet !=0){
					console.log("海滩捡贝壳："+ url_list[i].name + "没捡到，退出");
					break;
				};
				$done();
			}, reason => {
				console.log(reason.error);
				$done();
			});
			console.log("海滩捡贝壳："+ url_list[i].name + "捡到了，继续");
			sleep(2000);
		}
		 
		
		
　　　　/*for(var key in url_list[i]){
		}*/
　	};


function sleep(milliSeconds){
	var startTime = new Date().getTime(); 
	var stayTime = milliSeconds/1000;
	var log_desc = "延迟 " + stayTime + "秒"
	console.log(log_desc);
        while (new Date().getTime() < startTime + milliSeconds) {
            null;
        }//暂停一段时间 10000=1S。
		
  }
