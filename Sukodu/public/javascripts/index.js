(function(){
	// 定义27个数组，横9，竖9，九宫格9 
	// 每次循环的时候都去判断一下，对应的3个数组
	var heng = [];
	var shu = [];
	var square = [];
	for(var i = 0;i< 9;i++){
		heng[i]= new Array();
		shu[i] = new Array();
		square[i] = new Array();
	}
		for(var i = 0;i<9;i++){
			var tr = document.createElement("tr");
			tr.className = "tr";
			tr.id = "tr" + i;
			bgTable.appendChild(tr);
			for(var j = 0; j< 9 ;j++){
				var td = document.createElement("td");
				td.className = "td";
				td.id = "td"+i+j;
				tr.appendChild(td);
			}
		}
	}
	function squareIndex(i,j) {
		var temp = Math.floor((j+i*9)/3);
		var z;
		switch(temp){
			case 0:
			case 3:
			case 6:
				z=0;
				break;
			case 1:
			case 4:
			case 7:
				z=1;
				break;
			case 2:
			case 5:
			case 8:
				z=2;
				break;
			case 9:
			case 12:
			case 15:
				z=3;
				break;
			case 10:
			case 13:
			case 16:
				z=4;
				break;
			case 11:
			case 14:
			case 17:
				z=5;
				break;
			case 18:
			case 21:
			case 24:
				z=6;
				break;
			case 19:
			case 22:
			case 25:
				z=7;
				break;
			case 20:
			case 23:
			case 26:
				z=8;
				break;
		}
		return z;
	}
		var arr = [1,2,3,4,5,6,7,8,9];
		arr.sort(function(){
			return Math.random()-0.5;
		})
		for(var i = valuei-3;i<valuei;i++){
			for(var j = valuej-3;j<valuej;j++){
				bgTable.rows[i].cells[j].val = arr[3*i+j-4*(valuei-3)];
				document.getElementById("td"+i+j).innerHTML = arr[3*i+j-4*(valuei-3)];
				heng[i].push(arr[3*i+j-4*(valuei-3)]);
				shu[j].push(arr[3*i+j-4*(valuei-3)]);
				var index = squareIndex(i,j);
				square[index].push(arr[3*i+j-4*(valuei-3)]);
			}
		}
		
	}
	// 数组去重 合并过123456789 之后去重，剩下的就是没填过的数字
	function arrayOnly(arr){
		var hash = {};
		var arr2 = [];
		var arr3 = [1,2,3,4,5,6,7,8,9];
		var arrFinally = [];
		for(var i = 0;i<arr.length;i++) {
			if(!hash[arr[i]]){
				arr2.push(arr[i]);
				hash[arr[i]] = true;
			}
		}
		for(var i = 0 ;i< arr2.length;i++){
			var j = arr3.indexOf(arr2[i]);
			if(j>-1){
				arr3.splice(j,1);
			}
			
					arrEsist1.push(bgTable.rows[i].cells[k].val);
					console.log(arrEsist1);
		}
		return arr3;
	}
	function initOther(i1,j1,i2,j2){
		debugger;
		var bgTable = document.getElementById("bgTable");
		for(var i = i1;i<i2;i++){
			for(var j = j1;j<j2;j++){
				var z = squareIndex(i,j);
				var temp = heng[i].concat(shu[j],square[z]);
				var temponly = arrayOnly(temp);
				if(temponly.length == 0){
					console.log("error")
					return;
				}
				var index = Math.floor(Math.random()*temponly.length);
				bgTable.rows[i].cells[j].val = temponly[index];
				document.getElementById("td"+i+j).innerHTML = temponly[index];
				heng[i].push(temponly[index]);
				shu[j].push(temponly[index]);
				var index2 = squareIndex(i,j);
				square[index2].push(temponly[index]);
			}
		}
	}
		initOther(0,3,3,9);
		initOther(3,0,9,3);
		initOther(3,6,6,9);
		initOther(6,3,9,6);

	}
	function create
	window.onload = function() {
		var bgTable = document.getElementById("bgTable");
		initTable(bgTable);
		initChar(bgTable);
		initOther(bgTable);
		
	}
})()