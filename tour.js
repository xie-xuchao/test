
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
// var $sleep = sleep();

const url_list = [
	{"name":"damai", "url": "https://m.jingxi.com/jxbfd/user/EmployTourGuide?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1631025566636&ptag=7155.9.47&strBuildIndex=food&dwIsFree=0&ddwConsumeCoin=22435&_stk=_cfd_t%2CbizCode%2CddwConsumeCoin%2CdwEnv%2CdwIsFree%2Cptag%2Csource%2CstrBuildIndex%2CstrZone&_ste=1&h5st=20210907223926637%3B6643784587768162%3B10032%3Btk01w70cc1ae930nRh457OXwIfBGBmGZDhR78XxROzOpcDYb1M6AFoD0wdTKlMNJxl%2F5F5f90Sgu4HLdgz5h2bTn83Zx%3B3216d8bc70792f7a361de7a5dae7fc6433372dc3c11a8d4e94b2e9a29ff9c4ae&_=1631025566639&sceneval=2&g_login_type=1&callback=jsonpCBKBB&g_ty=ls"},
	{"name":"shizai", "url": "https://m.jingxi.com/jxbfd/user/EmployTourGuide?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1631025568147&ptag=7155.9.47&strBuildIndex=shop&dwIsFree=0&ddwConsumeCoin=24104&_stk=_cfd_t%2CbizCode%2CddwConsumeCoin%2CdwEnv%2CdwIsFree%2Cptag%2Csource%2CstrBuildIndex%2CstrZone&_ste=1&h5st=20210907223928147%3B6643784587768162%3B10032%3Btk01w70cc1ae930nRh457OXwIfBGBmGZDhR78XxROzOpcDYb1M6AFoD0wdTKlMNJxl%2F5F5f90Sgu4HLdgz5h2bTn83Zx%3Be54e1217a0621aec330f06e3bca144259a5b7d28dffe5b592757abde5fccbe3f&_=1631025568149&sceneval=2&g_login_type=1&callback=jsonpCBKEE&g_ty=ls"},
	{"name":"mianmian", "url": "https://m.jingxi.com/jxbfd/user/EmployTourGuide?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630917129909&ptag=7155.9.47&strBuildIndex=sea&dwIsFree=0&ddwConsumeCoin=25670&_stk=_cfd_t%2CbizCode%2CddwConsumeCoin%2CdwEnv%2CdwIsFree%2Cptag%2Csource%2CstrBuildIndex%2CstrZone&_ste=1&h5st=20210906163209910%3B6643784587768162%3B10032%3Btk01wcf5e1d6830nkvPoW02mjwWkRhH%2BGQcgoi5wg5dwZ7dbX3OAK2mzlxuiEq2Ya4ZyBjgNTQV3tlFixW1zyzzJqRn%2B%3B92d1750c12cc117a894e46a3b243f8680acde42d4ae1ae19dabfb5998fbc9f39&_=1630917129911&sceneval=2&g_login_type=1&callback=jsonpCBKL&g_ty=ls"},
	//{"name":"ale", "url": "https://m.jingxi.com/jxbfd/user/EmployTourGuide?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1631010019140&ptag=7155.9.47&strBuildIndex=fun&dwIsFree=0&ddwConsumeCoin=20661&_stk=_cfd_t%2CbizCode%2CddwConsumeCoin%2CdwEnv%2CdwIsFree%2Cptag%2Csource%2CstrBuildIndex%2CstrZone&_ste=1&h5st=20210907182019140%3B6643784587768162%3B10032%3Btk01w70cc1ae930nRh457OXwIfBGBmGZDhR78XxROzOpcDYb1M6AFoD0wdTKlMNJxl%2F5F5f90Sgu4HLdgz5h2bTn83Zx%3Ba4c96180539b809a881ff65feda2f3cd748726538476db05b770a0a68e5f4365&_=1631010019142&sceneval=2&g_login_type=1&callback=jsonpCBKP&g_ty=ls"}
];

const cookie_list = [
"pt_key=app_openAAJhM5grADBiT7nsIgSnYYOBDCZiidnPpsKMIp8gYH3Sp_3yE7NSDyMPMn4M41P6mxBZZWhAuMo; pt_pin=jd_497d8aac0f3af;"
];

const url_damai = `https://m.jingxi.com/jxbfd/user/EmployTourGuide?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=1630969037305&ptag=7155.9.47&strBuildIndex=shop&dwIsFree=0&ddwConsumeCoin=23530&_stk=_cfd_t%2CbizCode%2CddwConsumeCoin%2CdwEnv%2CdwIsFree%2Cptag%2Csource%2CstrBuildIndex%2CstrZone&_ste=1&h5st=20210907065717305%3B6643784587768162%3B10032%3Btk01w70cc1ae930nRh457OXwIfBGBmGZDhR78XxROzOpcDYb1M6AFoD0wdTKlMNJxl%2F5F5f90Sgu4HLdgz5h2bTn83Zx%3Bea6fd66485f39db52e256dffd1162eba98260f2e4f26f4ff0295f1d62537822e&_=1630969037307&sceneval=2&g_login_type=1&callback=jsonpCBKN&g_ty=ls`;
const method = `GET`;
const body = ``;
const headers = {
'Cookie' : `__jd_ref_cls=jingxi_139254_11_13; mba_muid=6019622583932287.1.1630969037302; mba_sid=1.6; defaultHeadId=11983206; gDSId=289; gHeadAddressId=19_1607_3155_62120; gHeadPlanId=19391; gSId=1; __jdv=68990090%7Cdirect%7C-%7Cnone%7C-%7C1630917114907; visitkey=42665975789190532; wq_addr=1094045078%7C19_1607_3155_62120%7C%E5%B9%BF%E4%B8%9C_%E6%B7%B1%E5%9C%B3%E5%B8%82_%E5%8D%97%E5%B1%B1%E5%8C%BA_%E8%A5%BF%E4%B8%BD%E8%A1%97%E9%81%93%7C%E5%B9%BF%E4%B8%9C%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%8D%97%E5%B1%B1%E5%8C%BA%E8%A5%BF%E4%B8%BD%E8%A1%97%E9%81%93%E6%9D%BE%E5%9D%AA%E6%9D%91%E4%B8%89%E6%9C%9F(%E4%B8%9C%E5%8C%BA)%205%E6%A0%8B29b%7C113.956161%2C22.559525; __jda=68990090.16309171149091976301998.1630917114.1630967141.1630968982.12; __jdb=68990090.6.16309171149091976301998|12.1630968982; __jdc=68990090; _tj_rvurl=https%3A//wq.jd.com/cube/front/activePublish/fortune_island/492139.html%3Fptag%3D7155.9.47%26EA_PTAG%3Dundefined%26srv%3D%26isnewuser%3D0%26isjxnewuser%3D0%26sharePin%3Dundefined; deviceName=iPhone; deviceOS=iOS; deviceOSVersion=14.3; deviceVersion=5.3.0; equipmentId=eidIf11a812278scfrgj10mQRvuyhkC6IY5%2Fm364JUv6NJA0uLCgNdJcDw1vt78XIvyXRGw2QhndS0famsdix%2FjlJelPaTaZGFqt3ah0n6872X2j5rpr; fingerprint=e7c25b7d7d5fbc30fab88b633c5ec944; jxsid_s_t=1630968983129; jxsid_s_u=https%3A//st.jingxi.com/fortune_island/index2.html; PPRD_P=UUID.16309171149091976301998-CT.139224.14.37; __jxjda=68990090.6019622583932287.1630771242.1630967141.1630968982.25; __wga=1630968982427.1630967141729.1630937440921.1630900654787.5.6; channel=; cid=4; clientid=4a717eb53a6145ef68e1779ba843d0a83debc4d6; erp=; retina=1; share_cpin=; share_gpin=; share_open_id=; shshshfp=b65a67208bd9db659a8ecaf8f6280efd; shshshfpa=3ec11e6f-9464-00b6-1e83-ac013b54c65b-1600691412; shshshfpb=oui9GZuZnba2%20Ouj1%2FtPMFA%3D%3D; shshshsID=ab67adc4f33b03cd24d8e271d8dc334c_6_1630968982624; source_module=; wqmnx1=MDEyNjM5MnRqbV9ubDU0OGRQLmE2MWQ0cm9ucDAvLTAwMEExeW9lQ3BQc2FfYmx0OzVuUDEgKWIxTUdiNGZmQlZDVSg%3D; wxa_level=1; pt_key=app_openAAJhM5grADBiT7nsIgSnYYOBDCZiidnPpsKMIp8gYH3Sp_3yE7NSDyMPMn4M41P6mxBZZWhAuMo; pt_pin=jd_497d8aac0f3af; pwdt_id=jd_497d8aac0f3af; sid=37c0dde7dee3c06223f6a5f412fb7cbw; jxsid=16308836447704935502; sc_width=390; webp=1`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Referer' : `https://st.jingxi.com/fortune_island/index2.html?ptag=7155.9.47`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `m.jingxi.com`,
'User-Agent' : `jdpingou;iPhone;5.3.0;14.3;4a717eb53a6145ef68e1779ba843d0a83debc4d6;network/wifi;model/iPhone13,2;appBuild/100637;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/73;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'Accept-Language' : `zh-cn`
};


//等待60秒
    sleep(60000);
	
	for(var i=0;i<url_list.length;i++){

		console.log("请导游："+ url_list[i].name);
		const myRequest = {
			url: url_list[i].url,
			method: method,
			headers: headers,
			body: body
			};
		 $task.fetch(myRequest).then(response => {
			console.log(response.statusCode + "\n\n" + response.body);
			$done();
		}, reason => {
			console.log(reason.error);
			$done();
		});
		sleep(15000);
		
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
