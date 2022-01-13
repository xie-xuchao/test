
// let obj = JSON.parse($response.body);
// /*$notify("test", "test", "test"); */
// if(obj){
// 	obj.hongbao[0]["dwState"] = "0";
// 	}
// obj.data.hongbao[0]["dwState"] = "0";
// $done({body: JSON.stringify(obj)});

var body = $response.body;
var obj = JSON.parse(body);

//$notify("Title", "Subtitle", body); 

console.log(body);

//obj['result'] = 0;
obj.hongbao[1].dwState='0';
body = JSON.stringify(obj);

//console.log(body);

$done(body);
