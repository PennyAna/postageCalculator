
var postal_type = '';
var postal_choice = '';
document.getElementById('postalType').addEventListener('selectionchange', function() {
                    postal_type = document.getElementById('postalType');
                    postal_choice = postal_type.options[postal_type.selectedIndex].value;
                }
);
document.getElementById('typeBtn').addEventListener('click', setInputMax(postal_choice));
var postal_weight_init = '';
var postal_weight = '';
//creates postal weight div element (label, btn) w/typeBtn onclick event, calls getWeightInput() to create input element
function setInputMax(type) {
    var inner = "<form id='weightForm' name='weightForm' class='postalForm'>";
    inner += "<fieldset id='weightSet' name='weightSet' class='postalSet'>";
    inner += "<label for='postalWeight' class='postalLabel'>How heavy is your mail? </label>";
    if (type == 1 || type == 2) {
        inner += "<input type='number' id='postalWeight' name='postalWeight' min='0'max='3.5' step='.5'>";
        // var postalWeight = getWeightInput(3.5, .5);
    }
    if (type == 3 || type == 4) {           
        inner += "<input type='number' id='postalWeight' name='postalWeight' min='0' max='13' step='1'>";
        // var postalWeight = getWeightInput(13, 1);
    }
    inner += "<button id='weightBtn' name='weightBtn'>Get Price</button></fieldset></form>";
    document.getElementById("weightDiv").innerHTML = inner;
    console.log("Bubbles0");
    console.log(type);
    document.getElementById('postalWeight').addEventListener('change', function() {
        postal_weight_init = document.getElementById('postalWeight');
        postal_weight = postal_weight_init.options[postal_weight_init.selectedIndex].value;
        }
    );
document.getElementById('weightBtn').addEventListener('click', getPostalPrice(postal_weight));
console.log("Bubbles5");
}

//creates postal price p element w/weightBtn onclick event, appends to body
function getPostalPrice(weight) {
    console.log("Bubbles6");
    var priceDiv = document.createElement('div');    
    priceDiv.classList.add('postalDiv');
    priceDiv.setAttribute('id', 'priceDiv');
    priceDiv.setAttribute('name', 'priceDiv');

    var pPrice = document.createElement('p');
    pPrice.setAttribute('class', 'finalPrice');
    pPrice.setAttribute('id', 'finalPrice');
    pPrice.setAttribute('name', 'finalPrice');
    var finalPrice = 0;
    var weightNum = postal_weight.value; 
    var type = postal_choice;
    var typeDescript = "";
    switch(type) {
        case 1:
            finalPrice = getLetterPrice(type, weight);
            typeDescript = 'First Class Letter - Stamped';
            break;
        case 2: 
            finalPrice = getLetterPrice(type, weight);
            typeDescript = 'First Class Letter - Metered';
            break;
        case 3:
            finalPrice = getEnvPrice(weight);
            typeDescript = 'First Class Large Envelopes';
            break;
        case 4:
            finalPrice = getPckgPrice(weight);
            typeDescript = 'First Class Package Service Retail';
            break;
    }
    pPrice.innerText = "Your Price for " + typeDescript + "with weight " + Number(weightNum) + ": $" + Number(finalPrice);
    priceDiv.appendChild(pPrice); 
    document.body.appendChild(priceDiv);
    console.log("Bubbles7")
}
//called by getPostalPrice() using weight to determine final price for return
function getLetterPrice(type, weight) {
    console.log("Bubbles8");
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
    console.log("Bubbles9")
    return price;
}
//called by getPostalPrice() using weight to determine final price for return
//this is a VERY, VERY nasty nested if situ, I will do the math to fix it later
function getEnvPrice(weight) {
    console.log("Bubbles10")
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
    console.log("Bubbles11");
    return price;
}
//called by getPostalPrice() using weight to determine final price for return
function getPckgPrice(weight) {
    console.log("Bubbles12");
    var price = 0;
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
        console.log("Bubbles13");
        return price;
}
