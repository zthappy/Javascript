
function operator(oprt) {
	switch(oprt){
		case "*":case "/":
			return 1;
			break;
		case "+":case "-":
			return 0;
			break;
		case "(":
			return 2;
			break;
		case ")":
			return 4;
			break;
	}
}
function splitExpress(value) {
	return value.split("");
}
function toStack(arr) {
	var arrOpt = [];// 存操作符
	var arrExp = [];// 后缀表达式
	for(var i =0;i<arr.length;i++){
		if(!isNaN(arr[i]))// 如果是数字,存入表达式数组中
		{
			arrExp.push(arr[i]);
		}else {// 如果不是数字，存入符号栈中，并比较
			
			while(arrOpt.length > 0){
				var com1 = operator(arr[i]);
				var com2 = operator(arrOpt[arrOpt.length-1]);
				if( com1 <= com2){
					arrExp.push(arrOpt[arrOpt.length-1]);
					arrOpt.pop();
				}else {
					break;
				}
			}
			arrOpt.push(arr[i]);
		}
		if(i == arr.length-1 && arrOpt.length > 0){
			for(var j = arrOpt.length-1; j >= 0 ;j--){
				var index = arrOpt.pop();
				arrExp.push(index);
			}
		}
	}
	return arrExp;
}
function cal(arr) {
	// 后缀表达式计算值
	// 1.从左到右扫描数组，如果是数字则压入栈，
	// 2.遇到操作符则依次计算
	debugger;
	var arrNum = [];
	for(var i = 0;i< arr.length;i++){
		if(!isNaN(arr[i])){
			arrNum.push(Number(arr[i]));
		}
		else {
			var sum = 0;
			var len = arrNum.length;
			switch(arr[i]){
				case "+":
					sum = arrNum[len-1] + arrNum[len-2];
					arrNum.pop();
					arrNum.pop();
					arrNum.push(sum);
					break;
				case "-":
					sum = arrNum[len-2] - arrNum[len-1];
					arrNum.pop();
					arrNum.pop();
					arrNum.push(sum);
					break;
				case "*":
					sum = arrNum[len-1] * arrNum[len-2];
					arrNum.pop();
					arrNum.pop();
					arrNum.push(sum);
					break;
				case "-":
					sum = arrNum[len-2] / arrNum[len-1];
					arrNum.pop();
					arrNum.pop();
					arrNum.push(sum);
					break;
			}
		}
	}
	return arrNum;
}
window.onload = function(){
	var equal = document.getElementById("equal");
	var expression = document.getElementById("expression").innerText;
	equal.onclick = function(){
		alert("aaa");
	}
	var a = splitExpress(expression);
	var b = toStack(a);
	console.log(b);
	var c = cal(b);
	console.log(c);
}