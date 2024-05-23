#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.rgb(222,56,356).italic.bold(`\n\t\t----------WELCOME TO ZAIN CURRENCY CONVERTER----------\n`));

let currencyRates : any =
{
  "KWD" : 1,
  "GBP" : 2.61,
  "UAE" : 11.92,
  "SAR" : 12.18,
  "TRY" : 105.30,
  "SDG" : 1902.63,
  "USD" :  3.25,
  "PKR" :  905.61,
  "EUR" :   3.06,
  "JYP" : 500.97, 


};
let answer = await inquirer.prompt(
    [
        {
          name : "fromCurrency",
          type : "list",
          message :chalk.rgb(90,32,61).italic( "Select The Currency To Convert From : "),
          choices : ["KWD","GBP","UAE","SAR","TRY","SDG","USD","PKR","EUR","JYP"] 
        },
        {
          name : "toCurrency",
          type : "list",
          message :chalk.italic.rgb(333,564,206)( "Select The Currency To convert Into :"),
          choices : ["KWD","GBP","UAE","SAR","TRY","SDG","USD","PKR","EUR","JYP"] 
 
        },
        {
          name : "amount",
          type : "number",
          message :chalk.rgb(23,86,90).italic( "Enter The Amount To Convert :")
        }
    ]
);
let fromAmount = currencyRates[answer.fromCurrency];
let toAmount = currencyRates[answer.toCurrency];
let amount = answer.amount

//formula of currency converter:
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let fixAmount = Math.floor(convertedAmount);

if(!answer.amount ){
  console.log(chalk.bold.red(`\n\tERROR.....PLEASE ENTER THE AMOUNT\n `));
  

}else{
  console.log(chalk.italic.bold.rgb(87,908,321)
  (`\n\t\tCONVERTED AMOUNT : ${fixAmount}\n`));
  console.log(chalk.italic.bold.rgb(126,90,254)(`\n\tTHANK YOU FOR USING MY CURRENCY CONVERTER\n`));

}