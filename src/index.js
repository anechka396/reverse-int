module.exports = function reverse (n) {
	if(n < 0) n *= -1;
	var reverse_n = n%10; 
	while(Math.trunc(n/10) != 0) {
		n = Math.trunc(n/10);
		reverse_n = reverse_n*10 + n%10;
	} 
	return reverse_n;
}
