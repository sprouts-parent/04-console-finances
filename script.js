/* My pseudocode for console finance challenge:

1. Declare the variables required for the task
    - total months
    - total profit/loss
    - average change
    - greatest increase
    - greatest decrease
2. loop through the finances array and add an increment to increase total months value (for, ++)
3.  calculate Profit/Losses over the entire period - add current profit/loss to the total profit loss
    - if it's not the first month, calculate the change in profit/loss from the previous month (if statement)
4. average change calculation and check if  the change is the greatest increase or greatest decrease (if else statements) aka largest number and smallest number
5. calculate average change in profit /loss (total divided by number of months)
6. round the figures to the nearesst 100th (toFixed)
7. print out the results to the console

References used for this assignment:
https://www.w3schools.com/js/js_operators.asp
https://www.w3schools.com/js/js_loop_for.asp
https://www.w3schools.com/jsref/jsref_tofixed.asp 
Javascript A Beginners Guide by John Pollock (5th edition, 2020)
Begin to Code with Javascript by Rob Miles (2022)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment

*/

var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
    ];

// Declare variables

var totalMonths = 0;
var totalProfitLoss = 0;
var averageChange = 0;
var greatestIncrease = ["", 0]; //array
var greatesrDecrease = ["", 0]; //array

//total months calculation -> loop through array and add increments
for (var i = 0; < finances.length; i++) {
    totalMonths++; //increments total months by 1
}

//calculate total profit/loss - addition assignment required for this
totalProfitLoss += finances[i][1]; // will loop through finances array

// if statement to calculate change in profit/loss from the previous month - if it's not the first month (importnat)
if (i > 0) {
    var change = finances[i][0] - finances [i - 1][1];
}

// add change variable to averageChange (addition assignment)
averageChange += change;

// check if the change is the greatest increase or decrease (if/else)
if (change > greatestIncrease[1]) {
    greatestIncrease[0] = finances[i][0];
    greatestIncrease[1] = change;
} else if (change < greatestDecrease[1]) {
greatestDecrease[0] = finances[i][0];
greatestDecrease[1] = change;
}
}

//calculation for average change in profit/loss
averageChange /= totalMonths - 1;

