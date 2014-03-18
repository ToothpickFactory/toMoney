// Convert a number to a formatted Money value
String.prototype.toMoney = function(){
	return "$"+this.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

// Convert a number to a formatted comma value
String.prototype.toComma = function(){
	return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

// Convert a Money OR comma numbered string to number
String.prototype.toNumber = function(){
	return parseFloat(this.replace(/\$|,/g, ''));
};
