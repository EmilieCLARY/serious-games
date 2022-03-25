var jsonData = {
    "scenar1": {
        "response": "COUCOU",
        "r1": {
            "choice" : "Yes",
            "response": "COUCOU1",
            "nextChoice": {
                "r1": {
                    "choice" : "Yes",
                    "response": "COUCOU2",
                    "nextChoice": {
                        "r1": "COUCOU",
                        "r2": "COUCOUCOU",
                        "r3": "COUCOUCOUCOU"
                    }
                },
                "r2": {
                    "choice" : "No",
                    "response": "COUCOU2",
                    "nextChoice": {
                        "r1": "COUCOU",
                        "r2": "COUCOUCOU",
                        "r3": "COUCOUCOUCOU"
                    }
                },
                "r3": {
                    "choice" : "Maybe",
                    "response": "COUCOU2",
                    "nextChoice": {
                        "r1": "COUCOU",
                        "r2": "COUCOUCOU",
                        "r3": "COUCOUCOUCOU"
                    }
                }
            }
        },
        "r2": {
            "choice" : "No",
            "response": "COUCOU",
            "nextChoice": {
                "r1": "COUCOU",
                "r2": "COUCOUCOU",
                "r3": "COUCOUCOUCOU"
            }
        },
        "r3": {
            "choice" : "Maybe",
            "response": "COUCOU",
            "nextChoice": {
                "r1": "COUCOU",
                "r2": "COUCOUCOU",
                "r3": "COUCOUCOUCOU"
            }
        }

    }
}//require('../JSON/choice_game/test.JSON')

jsonData = JSON.stringify(jsonData);

let responseHtml = document.getElementById("response");
let choice1 = document.getElementById("1");
choice1.addEventListener("click", event => newResponse(1));
let choice2 = document.getElementById("2");
choice2.addEventListener("click", event => newResponse(2));
let choice3 = document.getElementById("3");
choice3.addEventListener("click", event => newResponse(3));

let scenariiiii = JSON.parse(jsonData);

console.log(scenariiiii.scenar1.response);

responseHtml.textContent = scenariiiii.scenar1.response;
choice1.textContent = scenariiiii.scenar1.r1.choice;
choice2.textContent = scenariiiii.scenar1.r2.choice;
choice3.textContent = scenariiiii.scenar1.r3.choice;

function newResponse(data){
    responseHtml.textContent 
}