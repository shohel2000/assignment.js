// ===== Kilometer To Meter Part =====
function kilometerToMeter(kilo){
    if(kilo >= 0){
        var meter = kilo * 1000;
        return meter;
    }
    else{
        return 'Please given positive value.';
    }
}
var resultMeter = kilometerToMeter(5);
console.log(resultMeter);


// ===== Budget Calculation Part =====
function budgetCalculator(watch, phone, laptop) {
    totalCost = 0;
    if (watch < 0 || phone < 0 || laptop < 0) {
       return 'Please given all value Correct or Positive. Otherwise donot show result';
    }
    else{
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        totalCost = watchPrice + phonePrice + laptopPrice;
    }
    return totalCost;
}
 var totalBudget = budgetCalculator(10, 2, 5);
 console.log(totalBudget);


// ===== Calculate of Hotel Cost Part
function hotelCost(day){
    cost = 0;
    if(day <= 10 && day > 0){
        cost = day * 100;
    }
    else if(day <= 20 && day > 0){
        var firstTenDay = 10 * 100;
        var residual = day - 10;
        var secondTenDay = residual * 80;
        cost = firstTenDay + secondTenDay;
    }
    else if(day > 20){
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var residual = day - 20;
        var remainingDay = residual * 50;
        cost = firstTenDay + secondTenDay + remainingDay;
    }
    else if(day == 0){
        return 'You stay 0 Days.';
    }
    else{
        return 'invalid';
    }
    return cost;
}
var totalCost = hotelCost(21);
console.log(totalCost);


// ===== Mega Friend Part ======
function megaFriend(friends){
    var numberOfChar = 0;
    var largeName;
    for(var i = 0; i<friends.length; i++){
        if(friends[i].length > numberOfChar){
            numberOfChar = friends[i].length;
            largeName = friends[i];
        }
    }
    return largeName;
}
var friendsName = ['shohel', 'karim', 'Ikhteer Uddin', 'rana'];
var friendLargeName = megaFriend(friendsName);
console.log(friendLargeName);

