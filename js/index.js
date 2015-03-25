$(document).ready(function(){


	$("#generate").click(function() {
		var dict = ["AAHS","AALS","ABAC","ABAS","ABBA","ABBE","ABBS","ABED","ABET","ABID","ABLE","ABLY","ABOS","ABRI","ABUT","ABYE","ABYS","ACAI","ACCA","ACED","ACER","ACES","ACHE","ACHY","ACID","ACME","ACNE","BAAL","BAAS","BABA","BABE","BABU","BABY","BACH","BACK","BACS","BADE","BADS","BAEL","BAFF","BAFT","BAGH","BAGS","BAHT","BAHU","BAIL","BAIT","BAJU","BAKE","BALD","BALE","BALK","BALL","BALM","","WAAC","WABS","WACK","WADD","WADE","WADI","WADS","WADT","WADY","WAES","WAFF","WAFT","WAGE","WAGS","WAID","WAIF","WAIL","WAIN","WAIR","WAIS","WAIT","WAKA","WAKE","WAKF","WALD","WALE","WALI","PAAN","PACA","PACE","PACK","PACO","PACS","PACT","PACY","PADI","PADS","PAGE","PAHS","PAID","PAIK","PAIL","PAIN","PAIR","PAIS","PALE","PALL","PALM","PALP","PALS","PALY","PAMS","PAND","PANE","PANG","PANS","PANT","PAPA","PAPE","PAPS","PARA","PARD","PARE","PARK","PARP","PARR","PARS","PART","PASE","PASH","PASS","PAST","PATE","PATH","PATS","PATU","PATY","PAUA","PAUL","PAVE","PAVS","RABI","RACA","RACE","RACH","RACK","RACY","RADE","RADS","RAFF","RAFT","RAGA","RAGE","RAGG","RAGI","RAGS","RAGU","RAHS","RAIA","RAID","RAIK","RAIL","RAIN","RAIS","RAIT","RAJA","RAKE","RAKI","MUST","MUTE","MUTI","MUTS","MUTT","MUZZ","MWAH","MYAL","MYCS","MYNA","MYTH","MYXO","MZEE"]

		var dict2 = [];
		for( i =0; i<dict.length; i++){
			if (dict[i].length == 4){
				dict2.push(dict[i]);
			}
		}
		console.log(dict2);
		var randomNum = function(){
			return  Math.floor((Math.random() * 100) + 1);
		}

		var substrNum = function(){
			return  Math.floor((Math.random() * 2) + 1);
		}
		var text = ""
		var generate = function(randNum){
			text = "" ;
			while(randNum>0){
				var num = randomNum();
				var subNum = substrNum();
				text +=dict[num];
				if(randNum%2 === 0)
					text +=" ";
				else if (randNum%2 != 0 && randNum-1 != 0)
					text +=" ";
				randNum -=1;
			}

			return text;
		}
		generate(1);
		/*$('.container').contents().filter(function() {
			return this.nodeType == 3;
		}).each(function(){
			//this.textContent = this.textContent.replace(text);
			$(this).text(generate(1));
		});*/
		dt = $( "div.container" ).text();
		console.log(dt);
		var words = dt.split(" ");
		for(var i = words.length-1; i--;){
			if (words[i] === "") words.splice(i, 1);
		}
		for(var i =0; i<words.length; i++){
			if(words[i].length == 1){
				words.splice(i,1);
			}
		}
		wordsNew = [];
		for(var i =0; i<words.length; i++){
			if(words[i].length>1){
				wordsNew.push(words[i]);
			}
		}
		wordsNew.splice(0,1);
		wordsNew.splice(0,1);
		wordsNew.splice(142,1);
		console.log(wordsNew);
		/*$('.container').contents().filter(function() {
			return this.nodeType == 3;
		}).each(function(){
				//this.textContent = this.textContent.replace("Dropbox", generate(1));
				$(this).replaceWith(text);
				$(this).text(generate(1));
		});*/

		$('.ref').contents().filter(function() {
			return this.nodeType == 3;
		}).each(function(){
				//this.textContent = this.textContent.replace("Dropbox", generate(1));
				var lgt = $(this).text().split(' ').length;
				$(this).replaceWith(generate(lgt));
				$(this).text(generate(1));
				console.log("new");
				console.log(lgt);
		});
		return false;
	});
});
