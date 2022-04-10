function returnFirstTwoDrivers(firstTwo){
    return firstTwo = ["Antonia", "Nuru"]
}

function returnLastTwoDrivers(lastTwo){
    return lastTwo = ["Amari", "Mo"]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(number2){
        return number*number2
    }
}

function fareDoubler(value){
    return value*2
}

function fareTripler(value){
    return value*3
}

function selectDifferentDrivers(arrayOfDrivers, anyTwo){
    return anyTwo(arrayOfDrivers)
}