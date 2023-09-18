"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    if (selectedRoast === "all") {
        tbody.innerHTML = renderCoffees(coffees);
    }else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    };
}

function findCoffee(e){
    e.preventDefault();
    var selectedCoffee = searchCoffee.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().indexOf(selectedCoffee) >= 0) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function newCoffee(e) {
    e.preventDefault();
    var coffeeObj = {
        name: addCoffee.value,
        roast: newRoastSelection.value
    };
    coffees.push(coffeeObj);
    tbody.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var searchCoffee = document.querySelector('#coffee-name');
searchCoffee.addEventListener('keyup', findCoffee);

var newSubmitButton = document.querySelector('#submit-coffee');
var newRoastSelection = document.querySelector('#roast-selection-new-coffee');
var addCoffee = document.querySelector('#new-coffee');



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
newSubmitButton.addEventListener('click',newCoffee)
