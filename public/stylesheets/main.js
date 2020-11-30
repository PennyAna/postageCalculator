var postal_type = document.getElementById('postalType').value;

document.getElementById('typeBtn').addEventListener('click', setInputMax(postal_type));

//creates postal weight div element (label, btn) w/typeBtn onclick event, calls getWeightInput() to create input element
function setInputMax(type) {
    if (postal_type == 0) {
       var weightDiv = document.createElement('div');    
        weightDiv.classList.add('postalDiv');
        weightDiv.setAttribute('id', 'weightDiv');
        weightDiv.setAttribute('name', 'weightDiv'); 
        var errorTxt = "Please select an option from the list and press submit.";
        weightDiv.innerText = errorTxt;
        document.getElementById('postalDiv').appendChild(weightDiv);
        return;
    }
    else {
        var weightForm = document.createElement('form');
        weightForm.classList.add('postalForm');
        weightDiv.setAttribute('id', 'weightForm');
        weightDiv.setAttribute('name', 'weightForm');
        weightDiv.setAttribute('id', 'weightDiv');
        weightDiv.setAttribute('name', 'weightDiv')

        var weightSet = document.createElement('fieldset');  
        weightSet.classList.add('postalSet');
        weightDiv.setAttribute('id', 'weightDiv');
        weightDiv.setAttribute('name', 'weightDiv')
        
        var weightDiv = document.createElement('div');    
        weightDiv.classList.add('postalDiv');
        weightDiv.setAttribute('id', 'weightDiv');
        weightDiv.setAttribute('name', 'weightDiv');
        
        var weightLabel = document.createElement('label');
        weightLabel.setAttribute('for', 'postalWeight');
        weightLabel.innerText = 'How heavy is your mail?';
        weightLabel.classList.add('postalLabel');
        
        var weightBtn = document.createElement('button');
        weightBtn.setAttribute('id', 'weightBtn');
        weightBtn.setAttribute('name', 'weightBtn');
        weightBtn.classList.add('postalBtn');
        weightBtn.innerText = "Get Price";

        var postalWeight = getWeightInput(type);
        weightDiv.appendChild(weightLabel);
        weightDiv.appendChild(postalWeight); 
        weightDiv.appendChild(weightBtn);
        document.getElementById('postalDiv').appendChild(weightDiv);
    }
}
    //creates postal weight input element (max, step depend on type passed)
function getWeightInput(type) {
    var postalWeight = document.createElement('input');
    postalWeight.setAttribute('type', 'number');
    postalWeight.setAttribute('id', 'postalWeight');
    postalWeight.setAttribute('name', 'postalWeight');
    postalWeight.setAttribute('min', 0);
    if (type == 1 || type == 2) {
        postalWeight.setAttribute('max', 3.5);
        postalWeight.setAttribute('step', .5);
    }
    else if (type == 3 || type == 4) {            
        postalWeight.setAttribute('max', 13);
        postalWeight.setAttribute('step', '1');
    }
    return postalWeight;
}
//vars created from new input element
if (document.getElementById('postalWeight') != null) {
var postal_weight = document.getElementById('postalWeight').value; 
document.getElementById('weightBtn').addEventListener('click', getPostalPrice(postal_weight));
}
//creates postal price p element w/weightBtn onclick event, appends to body
function getPostalPrice(weight) {
    var priceDiv = document.createElement('div');    
    priceDiv.classList.add('postalDiv');
    priceDiv.setAttribute('id', 'priceDiv');
    priceDiv.setAttribute('name', 'priceDiv');

    var pPrice = document.createElement('p');
    pPrice.setAttribute('class', 'finalPrice');
    pPrice.setAttribute('id', 'finalPrice');
    pPrice.setAttribute('name', 'finalPrice');
    var weightNum = Number(postal_weight);
    
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
    
    pPrice.innerText = `Your Price for ${postal_type} with ${weightNum}: $ ${finalPrice};`
    priceDiv.appendChild(pPrice); 
    document.body.appendChild(priceDiv);
}
//called by getPostalPrice() using weight to determine final price for return
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
//called by getPostalPrice() using weight to determine final price for return
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
//called by getPostalPrice() using weight to determine final price for return
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