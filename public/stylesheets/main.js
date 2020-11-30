var postal_type = document.getElementById('postalType');
postal_type.addEventListener('selectionchange', setInputMax(target.value));
// document.getElementById('typeBtn').addEventListener('', setInputMax(postal_type));
//creates postal weight div element (label, btn) w/typeBtn onclick event, calls getWeightInput() to create input element
function setInputMax(type) {
        console.log("Bubbles0");
        var weightForm = document.createElement('form');
        weightForm.classList.add('postalForm');
        weightForm.setAttribute('id', 'weightForm');
        weightForm.setAttribute('name', 'weightForm');

        var weightSet = document.createElement('fieldset');  
        weightSet.classList.add('postalSet');
        weightSet.setAttribute('id', 'weightSet');
        weightSet.setAttribute('name', 'weightSet');
        
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
        if (type == 1 || type == 2) {
            var postalWeight = getWeightInput(3.5, .5);
        }
        else if (type == 3 || type == 4) {            
            var postalWeight = getWeightInput(13, 1);
        }
        weightDiv.appendChild(weightForm);
        weightDiv.appendChild(weightLabel);
        weightDiv.appendChild(weightLabel);
        weightDiv.appendChild(postalWeight); 
        weightDiv.appendChild(weightBtn);
        document.getElementById('postalDiv').appendChild(weightDiv);
        console.log("Bubbles1");
}
//creates postal weight input element (max, step depend on type passed)
function getWeightInput(max, step) {
    console.log("Bubbles2");
    var postalWeight = document.createElement('input');
    postalWeight.setAttribute('type', 'number');
    postalWeight.setAttribute('id', 'postalWeight');
    postalWeight.setAttribute('name', 'postalWeight');
    postalWeight.setAttribute('min', 0);
    postalWeight.setAttribute('max', max);
    postalWeight.setAttribute('step', step);    
    console.log("Bubbles3");
    return postalWeight;
}
//vars created from new input element
if (postal_weight != null) {
    console.log("Bubbles4");
    var postal_weight = document.getElementById('postalWeight').value; 
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