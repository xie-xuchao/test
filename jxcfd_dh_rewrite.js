const path = "\/jxbfd\/user\/ExchangeState";

let obj = JSON.parse($response.body);
if( $request.url.index0f(path1) !=-1){
	obj.data.hongbao[0]["dwState"] = "0";
	}
	
$done({body: JSON.stringif(obj)});
