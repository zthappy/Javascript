(function(){
	function initTable() {
		var bgTable = document.getElementById("bgTable");
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
	function initThree(valuei,valuej){
		var bgTable = document.getElementById("bgTable");
		var arr = [1,2,3,4,5,6,7,8,9];
		arr.sort(function(){
			return Math.random()-0.5;
		})
		console.log(arr);
		for(var i = valuei-3;i<valuei;i++){
			for(var j = valuej-3;j<valuej;j++){
				bgTable.rows[i].cells[j].val = arr[3*i+j-4*(valuei-3)];
				document.getElementById("td"+i+j).innerHTML = arr[3*i+j-4*(valuei-3)];
				console.log(bgTable.rows[i].cells[j].val);
			}
		}
		
	}
	function initOther(){
		
	}
	function initChar(){
		initThree(3,3);
		initThree(6,6);
		initThree(9,9);

	}
	window.onload = function() {
		initTable();
		initChar();
	}
})()