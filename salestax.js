salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
	var taxresult = {};
	
	for(var i = 0; i < salesData.length; i++){
		for(var j = 0; j < salesData[i]['sales'].length; j++){
			if(!taxresult.hasOwnProperty(salesData[i]['name'])){
				taxresult[salesData[i]['name']] = 
					{	totalSales: salesData[i]['sales'][j], 
						totalTaxes: salesData[i]['sales'][j] * salesTaxRates[salesData[i]['province']]
					};
			}
			else{
				taxresult[salesData[i]['name']]['totalSales'] += salesData[i]['sales'][j];
				taxresult[salesData[i]['name']]['totalTaxes'] += salesData[i]['sales'][j] * salesTaxRates[salesData[i]['province']];
			}
		}
	}
	
	console.log(taxresult);		
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}*/
