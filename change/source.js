var coins = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
var roundTo = [100, 200, 500, 1000, 2000, 5000];

function play()
{
    var whichCase = randomInt(2);
    var priceToPay = 
         whichCase == 0 ? randomInt(100) * 100 + randomInt(100)
                        : randomInt(10) * 100 + randomInt(100);
    var lowerPowerOf10Inclusive = Math.pow(10, Math.max(Math.floor(Math.log10(priceToPay)) - 1), 0);
    var round = _.chain(roundTo).filter(function(a) { return a >= lowerPowerOf10Inclusive }).shuffle().first();
    // 
    var paid = (Math.ceil(priceToPay / round)) * round;
    return (priceToPay / 100) + " " + (round / 100) + " " + (paid / 100);
}

function randomInt(max)
{
    return Math.floor(Math.random() * (max || 1000));
}

function update()
{
    $("#container").append("<p>" + play() + "</p>");
}

setInterval(update, 1000);
update();