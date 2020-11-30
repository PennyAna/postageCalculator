var postal_type = document.getElementById('postalType').value;

var postal_weight = document.getElementById('postalWeight').value; 
console.log(postal_type, postal_weight);
//input min=0, max=depends on type, step=1
document.getElementById('postalType').addEventListener('change', setInputMax(postal_type));
document.getElementById('postalWeight').addEventListener('change', getPostalPrice(postal_weight));
var set_max = postal_weight.setAttribute('max');
var set_step = postal_weight.setAttribute('step');

function setInputMax(type) {
    switch(type) {
        case 1, 2: 
            set_max = 3.5;
            set_step = .5;
            break;
        case 3, 4:
            set_max = 13;
            set_step = 1;
            break;
    }
}
function getPostalPrice(weight) {
    var type = postal_type;
    var finalPrice = "";
    switch(type) {
        case 1: 
        case 2: 
            finalPrice = getLetterPrice(type, weight);
            break;
        case 3: 
            finalPrice = getEnvPrice(weight);
            break;
        case 4: 
            finalPrice = getPckgPrice(weight);
            break;
        }
        document.getElementById('waitingForPrice').innerHTML = "$" + finalPrice;
}
 
function getLetterPrice(type, weight) {
    if (weight <= 1) {
        if (type == 1) {
            price = .55;
        }
        if (type == 2) {
            price = .5;
        }
        if (weight <= 2) {
            price += .15;
            if (weight <= 3) {
                price += .15;
            if (weight <= 3.5) {
                price += .15;
                }
            }
        } 
    }
    return price;
}
//this is a VERY, VERY nasty nested if situ, I will do the math to fix it later
function getEnvPrice(weight) {
    if (weight <= 1) {
        price = 1;
        if (weight <= 2) {
            price += .2;
            if (weight <= 3) {
                price += .2;
                if (weight <= 4) {
                    price += .2;
                    if(weight <= 5) {
                        price += .2;
                        if (weight <= 6) {
                            price += .2;
                            if (weight <= 7) {
                                price +=.2;
                                if (weight <= 8) {
                                    price += .2;
                                    if (weight <= 9) {
                                        price += .2;
                                        if (weight <= 10) {
                                            price += .2;
                                            if (weight <= 11) {
                                                price += .2;            
                                                if (weight <=12) {
                                                    price += .2;
                                                    if (weight <=13 || weight > 13) {
                                                        price += .2;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
    return price;
}
function getPckgPrice(weight) {
    if (weight <= 4) {
        price = 3.8;
        if (weight <= 8) {
            price += .8;
            if (weight <= 12) {
                price += 1.5;
                if (weight <= 13) {
                    price += .6;
                    }
                }
            }
        }
    return price;
}