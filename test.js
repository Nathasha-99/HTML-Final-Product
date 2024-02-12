function pp(){
	alert("Wada Boys");
}

function val(name){
	
	var A = Number(document.getElementById("qty1").value);
	var B = Number(document.getElementById("qty2").value);
	var C = Number(document.getElementById("qty3").value);
	var D = Number(document.getElementById("qty4").value);
	var E = Number(document.getElementById("qty5").value);
	var F = Number(document.getElementById("qty6").value);
	var G = Number(document.getElementById("qty7").value);
	var H = Number(document.getElementById("qty8").value);
	var I = Number(document.getElementById("qty9").value);
	var J = Number(document.getElementById("qty10").value);


	var sum = A+B+C+D+E+F+G+H+I+J;

	var text = sum.toString();
	document.getElementById("cartp").innerHTML = text;
}


function items(){
	
	var text_names;
	var name_arr=[];
	var A = Number(document.getElementById("qty1").value);
	var B = Number(document.getElementById("qty2").value);
	var C = Number(document.getElementById("qty3").value);
	var D = Number(document.getElementById("qty4").value);
	var E = Number(document.getElementById("qty5").value);
	var F = Number(document.getElementById("qty6").value);
	var G = Number(document.getElementById("qty7").value);
	var H = Number(document.getElementById("qty8").value);
	var I = Number(document.getElementById("qty9").value);
	var J = Number(document.getElementById("qty10").value);


		if (A != 0 ){
		name_arr[0] = 'Blue Yaka Mask';
	} else {name_arr[0] = ' ';}

	if (B != 0 ){
		name_arr[1] = 'Kolam Mask';
	}else {name_arr[1] = ' ';}

	if (C != 0 ){
		name_arr[2] = 'Kolam Yellow Mask';
	}else {name_arr[2] = ' ';}

	if (D != 0 ){
		name_arr[3] = 'Raksha Mask';
	}else {name_arr[3] = ' ';}

	if (E != 0 ){
		name_arr[4] = 'Sanni Mask';
	}else {name_arr[4] = ' ';}

	if (F != 0 ){
		name_arr[5] = 'Sanni Yaka Mask';
	}else {name_arr[5] = ' ';}
	
	if (G != 0 ){
		name_arr[6] = 'Mudali Kolama Mask';
	}else {name_arr[6] = ' ';}

	if (H != 0 ){
		name_arr[7] = 'Sunaka Mask';
	}else {name_arr[7] = ' ';}
	if (I != 0 ){
		name_arr[8] = 'Yellow Raksha Mask';
	}else {name_arr[8] = ' ';}

	if (J != 0 ){
		name_arr[9] = 'Raksha Mask - Red Blue';
	}else {name_arr[9] = ' ';}

	text_names = ' '
	var i = 0;
	for(i=0;i<10;i++){
		if(name_arr[i] != ' '){
			text_names += name_arr[i] + '<br>';
		}
	}
	/*text_names = An+ '<br>' +Bn+'<br>'+Cn+'<br>'+Dn+'<br>'+En+ '<br>' +Fn+'<br>'+Gn+'<br>'+Hn+'<br>'+In+'<br>'+Jn;*/

	document.getElementById("item_names").innerHTML = text_names;
}


function payment(){
	var A = Number(document.getElementById("qty1").value);
	var B = Number(document.getElementById("qty2").value);
	var C = Number(document.getElementById("qty3").value);
	var D = Number(document.getElementById("qty4").value);
	var E = Number(document.getElementById("qty5").value);
	var F = Number(document.getElementById("qty6").value);
	var G = Number(document.getElementById("qty7").value);
	var H = Number(document.getElementById("qty8").value);
	var I = Number(document.getElementById("qty9").value);
	var J = Number(document.getElementById("qty10").value);

	var fin_value = (A*500)+(B*600)+(C*200)+(D*500)+(E*400)+(F*500)+(G*300)+(H*400)+(I*700)+(J*800);
	var value_total = fin_value.toString();
	document.getElementById("price").value = 'Rs'+value_total+'.00';
}
