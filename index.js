
var wordlist = ['hi','bye','yourmum','vincent','olivia','leon','somayina','text','walk','run','vc','discord','build','win','loose','laugh','swear','smashyourmum','talk','read','write','know','play','kill','to','he','she','you','i','we','they','who', 'what', 'when', 'where','how', 'why', 'be', 'book','computer', ' ', '.', 'not','special', 'dumb', 'smart', 'good','bad', 'stupid', 'left', 'right','up', 'down', 'on', 'go','old', 'young', 'yes', 'no','maybe','the', 'man', 'pedo', 'a','becuase', 'telletubie', 'roof', 'wall','picture', 'desk', 'chair', 'table','bed', 'radiator', 'clothes', 'tshirt','trousers', 'sock', 'socks', 'cupboard','oven', 'so', 'realy', 'very','kindoff', 'slightly', 'quickly', 'slowly','together','but', 'and', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '',]
var realwordlist = ['kek', 'eke', 'weas', 'wpotja','welser', 'wanyo', 'wbazn', 'gor','gu', 'glub', 'gophnia', 'getar','gubo', 'gsa', 'gas', 'gol','goen', 'gqopu', 'gob', 'gab','gub', 'geb', 'goq', 'gaw','q', 'a', 'z', 'w','h', 'p', 'i', 'qu','qe', 'qi', 'qo', 'qa','qy', 'gy', 'wokolena', 'wqtyui','~', ' ', 'sepa', 'va','vetr', 'vatr', 'vor', 'vur','vetr', 'wetf', 'watf', 'wetr','watr', 'pe', 'guili', 'wequty','weqaty', 'kaw', 'kwa', 'kawawa','koto','werut', 'waut', 'wq', 'iop','walt', 'wrat', 'wla', 'wquopou','weloput', 'weltoso', 'weltipia', 'waltiposw','wradiot', 'wloth', 'wlotho', 'wlotha','wlothe', 'wlothese', 'wapana', 'wopa','apppppa', 'alo', 'alo', 'awer','aquqa', 'auwqu', 'avavlo', 'avaloep','valop','olo', 'olerq', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '',]
while(true){
	const prompt = require("prompt-sync")({ sigint: true });
	var str = prompt();
	var nstr= "";
	var arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		var ind = wordlist.indexOf(arr[i])
		if(ind===-1){
			var idk = arr[i].split("");
			idk.reverse();
			arr[i]= idk.join("")
		}
		else{
			arr[i] = realwordlist[ind]
		}
		 
	}
	for (var i = arr.length - 1; i >= 0; i--) {
 		nstr = arr[i]+"~"+nstr
	}
	console.log(nstr);
}