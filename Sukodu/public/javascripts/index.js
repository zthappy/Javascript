(function(){
	// 初始化棋盘
	function initTable(bgTable) {
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
	// 初始化对角线大三角
	function initThree(valuei,valuej,bgTable){
		var arr = [1,2,3,4,5,6,7,8,9];
		arr.sort(function(){
			return Math.random()-0.5;
		})
		for(var i = valuei-3;i<valuei;i++){
			for(var j = valuej-3;j<valuej;j++){
				bgTable.rows[i].cells[j].val = arr[3*i+j-4*(valuei-3)];
				document.getElementById("td"+i+j).innerHTML = arr[3*i+j-4*(valuei-3)];
			}
		}
		
	}
	// 初始化对角线大三角之外
	function initOther(bgTable){
		debugger;
		for(var i = 0;i<3;i++){
			for(var j = 3;j<6;j++){
				// i=0;j=3;
				console.log(bgTable.rows[i].cells[j]);
				var arrEsist1 = [];
				for(var k = 0;k<j;k++){
					
					arrEsist1.push(bgTable.rows[i].cells[k].val);
					console.log(arrEsist1);
				}
				for(var z = 3;z < )
			}
		}
	}
	function initChar(bgTable){
		initThree(3,3,bgTable);
		initThree(6,6,bgTable);
		initThree(9,9,bgTable);

	}
	window.onload = function() {
		var bgTable = document.getElementById("bgTable");
		initTable(bgTable);
		initChar(bgTable);
		initOther(bgTable);
		
	}
})()