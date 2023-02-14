
function ProfitatEnd(n, maxtransact, PriceOfSilicon) {


	let EndProfit = 0;
	let buystocks = 0;
	let sellstocks = 0;


	let transactionstocks = []

	let profits = []

	while (sellstocks < PriceOfSilicon.length) {
		buystocks = sellstocks;


		while (buystocks < PriceOfSilicon.length - 1 && PriceOfSilicon[buystocks] >= PriceOfSilicon[buystocks + 1])
			buystocks = buystocks + 1;

		sellstocks = buystocks + 1;


		while (sellstocks < PriceOfSilicon.length && PriceOfSilicon[sellstocks] >= PriceOfSilicon[sellstocks - 1])
			sellstocks = sellstocks + 1;


		while (transactionstocks.length != 0 && PriceOfSilicon[buystocks] < PriceOfSilicon[transactionstocks[transactionstocks.length - 1][0]]) {
			p = transactionstocks[transactionstocks.length - 1]


			profits.push(PriceOfSilicon[p[1] - 1] - PriceOfSilicon[p[0]]);


			transactionstocks.pop();
		}


		profits.sort((a, b) => b - a)
		while (transactionstocks.length != 0 && PriceOfSilicon[sellstocks - 1] > PriceOfSilicon[transactionstocks[transactionstocks.length - 1][1] - 1]) {
			let p = transactionstocks[transactionstocks.length - 1]


			profits.push(PriceOfSilicon[p[1] - 1] - PriceOfSilicon[buystocks])
			buystocks = p[0];


			transactionstocks.pop();
		}


		transactionstocks.push([buystocks, sellstocks]);
	}

	profits.sort((a, b) => b - a)

	while (transactionstocks.length != 0) {
		profits.push(PriceOfSilicon[transactionstocks[transactionstocks.length - 1][1] - 1] - PriceOfSilicon[transactionstocks[transactionstocks.length - 1][0]])
		transactionstocks.pop()
	}
	profits.sort((a, b) => b - a)

	while (maxtransact != 0 && profits.length != 0) {
		EndProfit += profits[0]
		profits.shift()
		maxtransact = maxtransact - 1;
	}


	return EndProfit;
}



let PriceOfSilicon = [3, 3, 5, 0, 0, 3, 1, 4];
// let PriceOfSilicon.length = PriceOfSilicon.length;
let maxtransact = 2;
document.write("max profit ------", ProfitatEnd(PriceOfSilicon.length, maxtransact, PriceOfSilicon))

