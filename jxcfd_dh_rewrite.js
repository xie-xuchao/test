
let obj = JSON.parse($response.body);
$notify("test", "test", "test");
if(obj){
	obj.hongbao[0]["dwState"] = "0";
	}
	
$done({body:JSON.stringify(obj)});
