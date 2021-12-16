const path = "\/jxbfd\/user\/ExchangeState";

let obj = JSON.parse($response.body);
$notify("test", "test", obj);
if( $request.url.indexOf(path) != -1){
	obj.data.hongbao[0]["dwState"] = "0";
	}
	
$done({body:JSON.stringify(obj)});
