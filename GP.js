function Nth_of_GP(a, r, N)
{
	return( a * Math.floor(Math.pow(r, N - 1)) );
}
	let a = 2;
	let r = 3;
	let N = 5;
	console.log("The "+ N +"th term of the series is : "
		+ Nth_of_GP(a, r, N));