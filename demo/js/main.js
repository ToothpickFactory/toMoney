$(document).on('click', '#toMoney>button', convertToMoney);
$(document).on('click', '#toComma>button', convertToComma);
$(document).on('click', '#toNumber>button', convertToNumber);

function convertToMoney(){
	$('#toMoney>p').text(
		$('#toMoney>input').val().toMoney()
	);
}


function convertToComma(){
	$('#toComma>p').text(
		$('#toComma>input').val().toComma()
	);
}

function convertToNumber(){
	$('#toNumber>p').text(
		$('#toNumber>input').val().toNumber()
	);
}