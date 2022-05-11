//const { spawn } = require("child_process");

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;  
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
    
    let compt = 0;

    textNode.options.forEach(option => {

        //console.log(textNode.option)
        
        compt++;
        
        if (showOption(option)) {
            
            console.log(compt);
            
            if(compt == 1){ // Premier bouton
                const button = document.createElement('button');
                var span1 = document.createElement('span');
                var span2 = document.createElement('span');
                var span3 = document.createElement('span');
                var span4 = document.createElement('span');
                var span5 = document.createElement('span');

                //console.log("a")

                span1.innerText = option.text;
                button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                
                span1.classList.add('texte','text-fonce');
                span2.classList.add('line','-right');
                span3.classList.add('line','-top');
                span4.classList.add('line','-left');
                span5.classList.add('line','-bottom');              
                
                button.appendChild(span1);
                button.appendChild(span2);
                button.appendChild(span3);
                button.appendChild(span4);
                button.appendChild(span5);
                
                button.addEventListener('click', () => selectOption(option));
                optionButtonsElement.appendChild(button); 
            }
            
            if(compt == 2){ // Deuxième bouton
                const button = document.createElement('button');
                var span = document.createElement('span');
                
                button.innerText = option.text;
                button.classList.add('btn');
                
                button.appendChild(span);
                
                button.addEventListener('click', () => selectOption(option));
                optionButtonsElement.appendChild(button); 
            }

            if(compt == 3){ // Troisième bouton
                const button = document.createElement('button');
                var span = document.createElement('span');
                
                button.innerText = option.text;
                button.classList.add('btn');
                
                button.appendChild(span);

                button.addEventListener('click', () => selectOption(option));
                optionButtonsElement.appendChild(button); 
            }

            if(compt == 4){ // Quatrième bouton
                const button = document.createElement('button');
                var span = document.createElement('span');
                
                button.innerText = option.text;
                button.classList.add('btn');
                
                button.appendChild(span);
                
                button.addEventListener('click', () => selectOption(option));
                optionButtonsElement.appendChild(button);  
            }

        }
    });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

const textNodes = [
    {
        id: 1,
        text: 'Welcome ! It\s now time to do your first post. Remember to tell futures followers what you love. Choose between three posts !',
        options: [
            {
                text: 'Post 1',
                nextText: 2
            },
            {
                text: 'Post 2',
                nextText: 3
            },
            {
                text: 'Post 3',
                nextText: 4
            }
        ]
    },
    {
        id: 2,
        text: '',
        options: [
            {
                text: '',
                nextText: 1
            },
            {
                text: '',
                nextText: 1
            },
            {
                text: '',
                nextText: 1
            },
            {           
                text: '',
                nextText: 1
            },
            {
                text: '',
                nextText: 1
            },
            {
                text: '',
                nextText: 1
            }
        ]
    }
];

startGame();