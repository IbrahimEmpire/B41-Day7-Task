var getdata = new XMLHttpRequest();
getdata.open('GET', 'https://restcountries.com/v3.1/all', true)
getdata.send();
getdata.onload = function(){
    var data = JSON.parse(getdata.response)
    console.log(data)
   
   //a. Get all the countries from the Asia continent /region using the Filter function

   const regi = data.filter(e=> e.region=="Asia")
   console.log(regi)

   // b. Get all the countries with a population of less than 2 lakhs using Filter function

   const population = data.filter(e=> e.population <200000 )
console.log("Population of less than 2 lakhs",population)

// c. Print the following details name, capital, flag using forEach function

data.forEach(e=>{ 
  console.log(e.name)
   console.log(e.capital)
   console.log(e.flags.png)
})

// d. Print the total population of countries using reduce function

const tpopulation = data.reduce((acc,e)=>acc+e.population,0)
console.log("Total population is :",tpopulation)

// e.which uses US Dollars as currency.



var cur = data.filter((element) => element.currencies)
let cur2 = cur.filter((elements) => elements.currencies.USD)
let cur3 = cur2.map((elemat)=> elemat.name.common)
console.log(" country which uses US Dollars as currency.",cur3)


}  