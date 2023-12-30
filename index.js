function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun()); // This Saturday, I want to roller-skate!
function saturdayFun2(activity = "bathe my dog!"){
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun2());//'This Saturday, I want to bathe my dog!

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}; 

console.log(mondayWork()); // This Monday, I will go to the office.

const mondayWork2 = function (activity = "work from home") {
    return `This Monday, I will ${activity}.`;
};

console.log(mondayWork2("work from home")); // This Monday, I will work from home.

function wrapAdjective(flair = "*") {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const highlightStar = wrapAdjective("*");
const highlightPipe = wrapAdjective("||");

console.log(highlightStar("awesome")); //You are *awesome*!
console.log(highlightPipe("amazing")); // You are ||amazing||!

