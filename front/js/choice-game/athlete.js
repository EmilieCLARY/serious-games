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

    let nbChoix = 0;

    textNode.options.forEach(option => {
        nbChoix++;
    });

    console.log("Nb choix :", nbChoix);

    let compt = 0;

    textNode.options.forEach(option => {

        //console.log(textNode.option)
        
        compt++;
        
        if (showOption(option)) {
            
            console.log(compt);
            
            if(compt == 1){ // Premier bouton
                var newDiv1 = document.createElement("div");
                const button = document.createElement('button');
                var section = document.createElement("SECTION");
                var span1 = document.createElement('span');
                var span2 = document.createElement('span');
                var span3 = document.createElement('span');
                var span4 = document.createElement('span');
                var span5 = document.createElement('span');


                //console.log("a")

                span1.innerText = option.text;
                button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                section.classList.add('portfolio-experiment', 'h-full');
                newDiv1.classList.add('choicenum1', 'm-4');
                
                
                
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

                section.appendChild(button);
                newDiv1.appendChild(section);
                button.addEventListener('click', () => selectOption(option));
                optionButtonsElement.appendChild(newDiv1); 
            }
            
            if(compt == 2){ // Deuxième bouton
                var newDiv2 = document.createElement("div");
                const button = document.createElement('button');
                var section = document.createElement("SECTION");
                var span1 = document.createElement('span');
                var span2 = document.createElement('span');
                var span3 = document.createElement('span');
                var span4 = document.createElement('span');
                var span5 = document.createElement('span');


                //console.log("a")

                span1.innerText = option.text;
                button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                section.classList.add('portfolio-experiment', 'h-full');
                newDiv2.classList.add('choicenum2', 'm-4');
                
                
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

                section.appendChild(button);
                newDiv2.appendChild(section);
                button.addEventListener('click', () => selectOption(option));
                optionButtonsElement.appendChild(newDiv2);   
            }

            if(compt == 3){ // Troisième bouton
                var newDiv = document.createElement("div");
                const button = document.createElement('button');
                var section = document.createElement("SECTION");
                var span1 = document.createElement('span');
                var span2 = document.createElement('span');
                var span3 = document.createElement('span');
                var span4 = document.createElement('span');
                var span5 = document.createElement('span');


                //console.log("a")

                span1.innerText = option.text;
                button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                section.classList.add('portfolio-experiment', 'h-full');
                newDiv.classList.add('choicenum3', 'm-4');
               
                
                
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

                section.appendChild(button);
                newDiv.appendChild(section);

                button.addEventListener('click', () => selectOption(option));
                optionButtonsElement.appendChild(newDiv);   
            }

            if(compt == 4){ // Quatrième bouton
                while (optionButtonsElement.firstChild) {
                    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
                }
                
                var newDiv1 = document.createElement("div");
                var newDiv2 = document.createElement("div");
                var newDiv3 = document.createElement("div");
                var newDiv4 = document.createElement("div");
               

                const button1 = document.createElement('button');
                var section1 = document.createElement("SECTION");
                var span11 = document.createElement('span');
                var span21 = document.createElement('span');
                var span31 = document.createElement('span');
                var span41 = document.createElement('span');
                var span51 = document.createElement('span');

                const button2 = document.createElement('button');
                var section2 = document.createElement("SECTION");
                var span12 = document.createElement('span');
                var span22 = document.createElement('span');
                var span32 = document.createElement('span');
                var span42 = document.createElement('span');
                var span52 = document.createElement('span');


                const button3 = document.createElement('button');
                var section3 = document.createElement("SECTION");
                var span13 = document.createElement('span');
                var span23 = document.createElement('span');
                var span33 = document.createElement('span');
                var span43 = document.createElement('span');
                var span53 = document.createElement('span');


                const button4 = document.createElement('button');
                var section4 = document.createElement("SECTION");
                var span14 = document.createElement('span');
                var span24 = document.createElement('span');
                var span34 = document.createElement('span');
                var span44 = document.createElement('span');
                var span54 = document.createElement('span');


                span11.innerText = option.text;
                button1.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                section1.classList.add('portfolio-experiment', 'h-full');

                span12.innerText = option.text;
                button2.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                section2.classList.add('portfolio-experiment', 'h-full');

                span13.innerText = option.text;
                button3.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                section3.classList.add('portfolio-experiment', 'h-full');

                span14.innerText = option.text;
                button4.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                section4.classList.add('portfolio-experiment', 'h-full');
                
                newDiv1.classList.add('choicenum1c4', 'm-4');
                newDiv2.classList.add('choicenum2c4', 'm-4');
                newDiv3.classList.add('choicenum3c4', 'm-4');
                newDiv4.classList.add('choicenum4c4', 'm-4');
               
                span11.classList.add('texte','text-fonce');
                span21.classList.add('line','-right');
                span31.classList.add('line','-top');
                span41.classList.add('line','-left');
                span51.classList.add('line','-bottom');

                span12.classList.add('texte','text-fonce');
                span22.classList.add('line','-right');
                span32.classList.add('line','-top');
                span42.classList.add('line','-left');
                span52.classList.add('line','-bottom');              
                
                span13.classList.add('texte','text-fonce');
                span23.classList.add('line','-right');
                span33.classList.add('line','-top');
                span43.classList.add('line','-left');
                span53.classList.add('line','-bottom');

                span14.classList.add('texte','text-fonce');
                span24.classList.add('line','-right');
                span34.classList.add('line','-top');
                span44.classList.add('line','-left');
                span54.classList.add('line','-bottom');

                button1.appendChild(span11);
                button1.appendChild(span21);
                button1.appendChild(span31);
                button1.appendChild(span41);
                button1.appendChild(span51);

                button2.appendChild(span12);
                button2.appendChild(span22);
                button2.appendChild(span32);
                button2.appendChild(span42);
                button2.appendChild(span52);


                button3.appendChild(span13);
                button3.appendChild(span23);
                button3.appendChild(span33);
                button3.appendChild(span43);
                button3.appendChild(span53);


                button3.appendChild(span13);
                button3.appendChild(span23);
                button3.appendChild(span33);
                button3.appendChild(span43);
                button3.appendChild(span53);


                button4.appendChild(span14);
                button4.appendChild(span24);
                button4.appendChild(span34);
                button4.appendChild(span44);
                button4.appendChild(span54);

                section1.appendChild(button1);
                section2.appendChild(button2);
                section3.appendChild(button3);
                section4.appendChild(button4);


                newDiv1.appendChild(section1);
                newDiv2.appendChild(section2);
                newDiv3.appendChild(section3);
                newDiv4.appendChild(section4);
                
                button1.addEventListener('click', () => selectOption(option));
                button2.addEventListener('click', () => selectOption(option));
                button3.addEventListener('click', () => selectOption(option));
                button4.addEventListener('click', () => selectOption(option));

                optionButtonsElement.appendChild(newDiv1);
                optionButtonsElement.appendChild(newDiv2);
                optionButtonsElement.appendChild(newDiv3); 
                optionButtonsElement.appendChild(newDiv4);      
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
                nextText: 2
            },
            {
                text: 'Post 3',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Yo salut à tous c\'est ...',
        options: [
            {
                text: 'David Lafarge Pokemon',
                nextText: 1
            },
            {
                text: 'Miss Jirashi',
                nextText: 1
            },
            {
                text: 'Squeezie',
                nextText: 1
            },
            {           
                text: 'Toinou le meilleur',
                nextText: 1
            }
        ]
    }
];

startGame();