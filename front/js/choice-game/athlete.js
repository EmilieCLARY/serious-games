//const { spawn } = require("child_process");

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}
let nextTxt;
let userAppearance;

socket.emit('getNextText');
socket.emit('getAppearance');
socket.on('newAppearance', (Appearance)=>{
    userAppearance = Appearance;
});
socket.on('leProchainTexte', (text) => {
    nextTxt = text;
    startGame();
});

function startGame() {
    state = {}
    showTextNode(nextTxt);
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
            if(nbChoix===1){
                textElement.style.display = "none";
                optionButtonsElement.classList.add('zoneDesReponses','m-4', 'rounded-3xl', 'border-rougebouton', 'bg-lightfond', 'border-4');
                /*la photo de ML*/
                var newDivMLphoto = document.createElement("div");
                newDivMLphoto.classList.add('MLphoto','professor','bg-darkfond','border-rougebouton','border-4','rounded-3xl','m-4');
                optionButtonsElement.appendChild(newDivMLphoto);
                    
                /* le texte */
                var newDivMLtext = document.createElement("div");
                newDivMLtext.classList.add('MLtext','flex','items-center','text-justify','m-4');
                    
                    /* la bulle */
                var newDivBcoin1 = document.createElement("div");
                newDivBcoin1.classList.add('BcoinTR','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBcoin1);
                    
                var newDivBcoin2 = document.createElement("div");
                newDivBcoin2.classList.add('BcoinTL','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBcoin2);
                    
                var newDivBcoin3 = document.createElement("div");
                newDivBcoin3.classList.add('BcoinBL','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBcoin3);
                    
                var newDivBcoin4 = document.createElement("div");
                newDivBcoin4.classList.add('BcoinBR','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBcoin4);

                    
                var newDivBcoteT = document.createElement("div");
                newDivBcoteT.classList.add('BcoteT','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBcoteT);
                    
                var newDivBcoteL = document.createElement("div");
                newDivBcoteL.classList.add('BcoteL','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBcoteL);
                    
                var newDivBcoteR = document.createElement("div");
                newDivBcoteR.classList.add('BcoteR','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBcoteR);
                    
                var newDivBcoteB = document.createElement("div");
                newDivBcoteB.classList.add('BcoteB','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBcoteB);
                    
                var newDivBO1 = document.createElement("div");
                newDivBO1.classList.add('BO1','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBO1);
                    
                var newDivBO2 = document.createElement("div");
                newDivBO2.classList.add('BO2','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBO2);
                    
                var newDivBO3 = document.createElement("div");
                newDivBO3.classList.add('BO3','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBO3);
                    
                var newDivBO4 = document.createElement("div");
                newDivBO4.classList.add('BO4','bg-fonce','h-full');
                newDivMLtext.appendChild(newDivBO4);
                    
                var newDivBO5 = document.createElement("div");
                newDivBO5.classList.add('BO5','bg-white','h-full');
                newDivMLtext.appendChild(newDivBO5);
                    
                var newDivBtext = document.createElement("div");
                newDivBtext.classList.add('Btext','bg-white','p-4','h-full','flex','items-center');
                newDivBtext.innerText = textElement.innerText;
                newDivMLtext.appendChild(newDivBtext);

                var newDivBWT = document.createElement("div");
                newDivBWT.classList.add('BWT','bg-white','h-full');
                newDivMLtext.appendChild(newDivBWT);

                var newDivBWL = document.createElement("div");
                newDivBWL.classList.add('BWL','bg-white','h-full');
                newDivMLtext.appendChild(newDivBWL);

                var newDivBWB = document.createElement("div");
                newDivBWB.classList.add('BWB','bg-white','h-full');
                newDivMLtext.appendChild(newDivBWB);

                var newDivBWR = document.createElement("div");
                newDivBWR.classList.add('BWR','bg-white','h-full');
                newDivMLtext.appendChild(newDivBWR);


                optionButtonsElement.appendChild(newDivMLtext);



                var newDivMLbtn = document.createElement("div")
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
                newDivMLbtn.classList.add('btnML', 'm-4');
                
                    
                    
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
                newDivMLbtn.appendChild(section);
                button.addEventListener('click', () => selectOption(option));
                optionButtonsElement.appendChild(newDivMLbtn);
            
                
            }if(nbChoix===2){
                if(compt==1){
                    textElement.style.display = "none";
                    optionButtonsElement.classList.add('zoneDesReponses','m-4', 'rounded-3xl', 'border-rougebouton', 'bg-lightfond', 'border-4');
                    /*la photo de ML*/
                    var newDivMLphoto = document.createElement("div");
                    newDivMLphoto.classList.add('MLphoto','professor','bg-darkfond','border-rougebouton','border-4','rounded-3xl','m-4');
                    optionButtonsElement.appendChild(newDivMLphoto);

                    /* le texte */
                    var newDivMLtext = document.createElement("div");
                    newDivMLtext.classList.add('MLtext','flex','items-center','text-justify','m-4');

                        /* la bulle */
                    var newDivBcoin1 = document.createElement("div");
                    newDivBcoin1.classList.add('BcoinTR','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBcoin1);

                    var newDivBcoin2 = document.createElement("div");
                    newDivBcoin2.classList.add('BcoinTL','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBcoin2);

                    var newDivBcoin3 = document.createElement("div");
                    newDivBcoin3.classList.add('BcoinBL','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBcoin3);

                    var newDivBcoin4 = document.createElement("div");
                    newDivBcoin4.classList.add('BcoinBR','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBcoin4);


                    var newDivBcoteT = document.createElement("div");
                    newDivBcoteT.classList.add('BcoteT','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBcoteT);

                    var newDivBcoteL = document.createElement("div");
                    newDivBcoteL.classList.add('BcoteL','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBcoteL);

                    var newDivBcoteR = document.createElement("div");
                    newDivBcoteR.classList.add('BcoteR','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBcoteR);

                    var newDivBcoteB = document.createElement("div");
                    newDivBcoteB.classList.add('BcoteB','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBcoteB);
                    
                    var newDivBO1 = document.createElement("div");
                    newDivBO1.classList.add('BO1','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBO1);

                    var newDivBO2 = document.createElement("div");
                    newDivBO2.classList.add('BO2','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBO2);

                    var newDivBO3 = document.createElement("div");
                    newDivBO3.classList.add('BO3','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBO3);

                    var newDivBO4 = document.createElement("div");
                    newDivBO4.classList.add('BO4','bg-fonce','h-full');
                    newDivMLtext.appendChild(newDivBO4);

                    var newDivBO5 = document.createElement("div");
                    newDivBO5.classList.add('BO5','bg-white','h-full');
                    newDivMLtext.appendChild(newDivBO5);
                    
                    var newDivBtext = document.createElement("div");
                    newDivBtext.classList.add('Btext','bg-white','p-4','h-full','flex','items-center');
                    newDivBtext.innerText = textElement.innerText;
                    newDivMLtext.appendChild(newDivBtext);

                    var newDivBWT = document.createElement("div");
                    newDivBWT.classList.add('BWT','bg-white','h-full');
                    newDivMLtext.appendChild(newDivBWT);

                    var newDivBWL = document.createElement("div");
                    newDivBWL.classList.add('BWL','bg-white','h-full');
                    newDivMLtext.appendChild(newDivBWL);

                    var newDivBWB = document.createElement("div");
                    newDivBWB.classList.add('BWB','bg-white','h-full');
                    newDivMLtext.appendChild(newDivBWB);

                    var newDivBWR = document.createElement("div");
                    newDivBWR.classList.add('BWR','bg-white','h-full');
                    newDivMLtext.appendChild(newDivBWR);


                    optionButtonsElement.appendChild(newDivMLtext);



                    var newDivMLbtn = document.createElement("div")
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
                    newDivMLbtn.classList.add('btnML1', 'm-4');
                    


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
                    newDivMLbtn.appendChild(section);
                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivMLbtn);
            
                }
                if(compt==2){
                    var newDivMLbtn = document.createElement("div")
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
                    newDivMLbtn.classList.add('btnML2', 'm-4');
                    


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
                    newDivMLbtn.appendChild(section);
                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivMLbtn);
                }
                
                
            } 
            else if (nbChoix===3){
                if(compt == 1){ // Premier bouton
                    var newDivchoice = document.createElement("div");
                    const button = document.createElement('button');
                    var section = document.createElement("SECTION");
                    var newDivchoicexstruct = document.createElement("div");
                    var newDivchoicexphoto = document.createElement("div");
                    var newDivchoicextext = document.createElement("div");
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    var span3 = document.createElement('span');
                    var span4 = document.createElement('span');
                    var span5 = document.createElement('span');
    
    
                    //console.log("a")
    
                    span1.innerText = option.text;
                    button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                    section.classList.add('portfolio-experiment', 'h-full');
                    newDivchoice.classList.add('choicenum1', 'm-4');
                    
                    
                    
                    span1.classList.add('texte','text-fonce','text-justify','m-4');
                    span2.classList.add('line','-right');
                    span3.classList.add('line','-top');
                    span4.classList.add('line','-left');
                    span5.classList.add('line','-bottom');              
                    newDivchoicexstruct.classList.add('choicexin3struct','h-full','w-full');
                    newDivchoicextext.appendChild(span1);
                    newDivchoicexphoto.classList.add('choicexin3photo','h-1/2','w-full');
                    if(option.appearance){
                        switch (userAppearance) {
                            case 0:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                            case 1:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BG.png")';
                                break;
                            case 2:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YG.png")';
                                break;
                            case 3:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WW.png")';
                                break;
                            case 4:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BW.png")';
                                break;
                            case 5:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YW.png")';
                                break;
                        
                            default:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                        }
                    }
                    else{
                        console.log("oui");
                        newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'")';
                    }
                    newDivchoicexstruct.appendChild(newDivchoicexphoto);
                    newDivchoicexstruct.appendChild(newDivchoicextext);
                    newDivchoicexstruct.appendChild(span2);
                    newDivchoicexstruct.appendChild(span3);
                    newDivchoicexstruct.appendChild(span4);
                    newDivchoicexstruct.appendChild(span5);
                    button.appendChild(newDivchoicexstruct);
                    section.appendChild(button);
                    newDivchoice.appendChild(section);
                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivchoice); 
                }
                
                if(compt == 2){ // Deuxième bouton
                    var newDivchoice = document.createElement("div");
                    const button = document.createElement('button');
                    var section = document.createElement("SECTION");
                    var newDivchoicexstruct = document.createElement("div");
                    var newDivchoicexphoto = document.createElement("div");
                    var newDivchoicextext = document.createElement("div");
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    var span3 = document.createElement('span');
                    var span4 = document.createElement('span');
                    var span5 = document.createElement('span');
    
    
                    //console.log("a")
    
                    span1.innerText = option.text;
                    button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                    section.classList.add('portfolio-experiment', 'h-full');
                    newDivchoice.classList.add('choicenum2', 'm-4');
                    
                    
                    
                    span1.classList.add('texte','text-fonce','text-justify','m-4');
                    span2.classList.add('line','-right');
                    span3.classList.add('line','-top');
                    span4.classList.add('line','-left');
                    span5.classList.add('line','-bottom');           
                    newDivchoicexstruct.classList.add('choicexin3struct','h-full','w-full');   
                    newDivchoicexphoto.classList.add('choicexin3photo','h-1/2','w-full');
                    newDivchoicextext.appendChild(span1);
                    if(option.appearance){
                        switch (userAppearance) {
                            case 0:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                            case 1:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BG.png")';
                                break;
                            case 2:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YG.png")';
                                break;
                            case 3:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WW.png")';
                                break;
                            case 4:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BW.png")';
                                break;
                            case 5:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YW.png")';
                                break;
                        
                            default:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                        }
                    }
                    else{
                        console.log("oui");
                        newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'")';
                    }
                    newDivchoicexstruct.appendChild(newDivchoicexphoto);
                    newDivchoicexstruct.appendChild(newDivchoicextext);
                    newDivchoicexstruct.appendChild(span2);
                    newDivchoicexstruct.appendChild(span3);
                    newDivchoicexstruct.appendChild(span4);
                    newDivchoicexstruct.appendChild(span5);
                    button.appendChild(newDivchoicexstruct);
                    section.appendChild(button);
                    newDivchoice.appendChild(section);
                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivchoice);
                }
    
                if(compt == 3){ // Troisième bouton
                    var newDivchoice = document.createElement("div");
                    const button = document.createElement('button');
                    var section = document.createElement("SECTION");
                    var newDivchoicexstruct = document.createElement("div");
                    var newDivchoicexphoto = document.createElement("div");
                    var newDivchoicextext = document.createElement("div");
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    var span3 = document.createElement('span');
                    var span4 = document.createElement('span');
                    var span5 = document.createElement('span');
    
    
                    //console.log("a")
    
                    span1.innerText = option.text;
                    button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                    section.classList.add('portfolio-experiment', 'h-full');
                    newDivchoice.classList.add('choicenum3', 'm-4');
                    
                    
                    
                    span1.classList.add('texte','text-fonce','text-justify','m-4');
                    span2.classList.add('line','-right');
                    span3.classList.add('line','-top');
                    span4.classList.add('line','-left');
                    newDivchoicexstruct.classList.add('choicexin3struct','h-full','w-full');
                    span5.classList.add('line','-bottom');              
                    newDivchoicexphoto.classList.add('choicexin3photo','h-1/2','w-full');
                    newDivchoicextext.appendChild(span1);
                    if(option.appearance){
                        switch (userAppearance) {
                            case 0:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                            case 1:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BG.png")';
                                break;
                            case 2:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YG.png")';
                                break;
                            case 3:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WW.png")';
                                break;
                            case 4:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BW.png")';
                                break;
                            case 5:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YW.png")';
                                break;
                        
                            default:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                        }
                    }
                    else{
                        console.log("oui");
                        newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'")';
                    }
                    newDivchoicexstruct.appendChild(newDivchoicexphoto);
                    newDivchoicexstruct.appendChild(newDivchoicextext);
                    newDivchoicexstruct.appendChild(span2);
                    newDivchoicexstruct.appendChild(span3);
                    newDivchoicexstruct.appendChild(span4);
                    newDivchoicexstruct.appendChild(span5);
                    button.appendChild(newDivchoicexstruct);
                    section.appendChild(button);
                    newDivchoice.appendChild(section);
                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivchoice);   
                }
            } else if(nbChoix===4){
                if(compt == 1){ // Premier bouton
                    var newDivchoice = document.createElement("div");
                    var newDivchoicexstruct = document.createElement("div");
                    var newDivchoicexphoto = document.createElement("div");
                    var newDivchoicextext = document.createElement("div");
                    //var newDiv1photo = document.createElement("div");
                    //var newDiv1text = document.createElement("div");
                    const button = document.createElement('button');
                    var section = document.createElement("SECTION");
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    var span3 = document.createElement('span');
                    var span4 = document.createElement('span');
                    var span5 = document.createElement('span');
    
                    //console.log("a")
                    newDivchoice.classList.add('choice1in4','m-2');
                    section.classList.add('portfolio-experiment','h-full');
                    button.classList.add('h-full','w-full');
                    newDivchoicexstruct.classList.add('choicexin4struct','h-full','w-full','flex');
                    newDivchoicexphoto.classList.add('choicexin4photo','h-full','w-1/2');
                    newDivchoicextext.classList.add('choicexin4text','h-full','w-1/2','flex','items-center');
                    span1.innerText = option.text;
                    span1.classList.add('texte','text-fonce', 'text-justify');
                    span2.classList.add('line','-right');
                    span3.classList.add('line','-top');
                    span4.classList.add('line','-left');
                    span5.classList.add('line','-bottom');
                    //button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                    //section.classList.add('portfolio-experiment', 'h-full');
                    //newDiv1.classList.add('choicenum1c4', 'm-4');
                    //newDiv1photo.classList.add('choicenum4c4photo');
                    //newDiv1text.classList.add('choicenum4c4text');
                    if(option.appearance){
                        switch (userAppearance) {
                            case 0:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                            case 1:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BG.png")';
                                break;
                            case 2:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YG.png")';
                                break;
                            case 3:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WW.png")';
                                break;
                            case 4:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BW.png")';
                                break;
                            case 5:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YW.png")';
                                break;
                        
                            default:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                        }
                    }
                    else{
                        console.log("oui");
                        newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'")';
                    }
                                  
                    newDivchoicextext.appendChild(span1)
                    newDivchoicexstruct.appendChild(newDivchoicexphoto);
                    newDivchoicexstruct.appendChild(newDivchoicextext);
                    
                    newDivchoicexstruct.appendChild(span2);
                    newDivchoicexstruct.appendChild(span3);
                    newDivchoicexstruct.appendChild(span4);
                    newDivchoicexstruct.appendChild(span5);

                    button.appendChild(newDivchoicexstruct);
                    section.appendChild(button);
                    newDivchoice.appendChild(section);


                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivchoice); 
                }
                
                if(compt == 2){ // Deuxième bouton
                    var newDivchoice = document.createElement("div");
                    var newDivchoicexstruct = document.createElement("div");
                    var newDivchoicexphoto = document.createElement("div");
                    var newDivchoicextext = document.createElement("div");
                    //var newDiv1photo = document.createElement("div");
                    //var newDiv1text = document.createElement("div");
                    const button = document.createElement('button');
                    var section = document.createElement("SECTION");
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    var span3 = document.createElement('span');
                    var span4 = document.createElement('span');
                    var span5 = document.createElement('span');
    
                    //console.log("a")
                    newDivchoice.classList.add('choice2in4','m-2');
                    section.classList.add('portfolio-experiment','h-full');
                    button.classList.add('h-full','w-full');
                    newDivchoicexstruct.classList.add('choicexin4struct','h-full','w-full','flex');
                    newDivchoicexphoto.classList.add('choicexin4photo','h-full','w-1/2');
                    newDivchoicextext.classList.add('choicexin4text','h-full','w-1/2','flex','items-center');
                    span1.innerText = option.text;
                    span1.classList.add('texte','text-fonce', 'text-justify');
                    span2.classList.add('line','-right');
                    span3.classList.add('line','-top');
                    span4.classList.add('line','-left');
                    span5.classList.add('line','-bottom');
                    //button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                    //section.classList.add('portfolio-experiment', 'h-full');
                    //newDiv1.classList.add('choicenum1c4', 'm-4');
                    //newDiv1photo.classList.add('choicenum4c4photo');
                    //newDiv1text.classList.add('choicenum4c4text');
                    if(option.appearance){
                        switch (userAppearance) {
                            case 0:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                            case 1:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BG.png")';
                                break;
                            case 2:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YG.png")';
                                break;
                            case 3:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WW.png")';
                                break;
                            case 4:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BW.png")';
                                break;
                            case 5:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YW.png")';
                                break;
                        
                            default:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                        }
                    }
                    else{
                        console.log("oui");
                        newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'")';
                    }
                                  
                    newDivchoicextext.appendChild(span1)
                    newDivchoicexstruct.appendChild(newDivchoicexphoto);
                    newDivchoicexstruct.appendChild(newDivchoicextext);
                    
                    newDivchoicexstruct.appendChild(span2);
                    newDivchoicexstruct.appendChild(span3);
                    newDivchoicexstruct.appendChild(span4);
                    newDivchoicexstruct.appendChild(span5);

                    button.appendChild(newDivchoicexstruct);
                    section.appendChild(button);
                    newDivchoice.appendChild(section);


                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivchoice);
                }
    
                if(compt == 3){ // Troisième bouton
                    var newDivchoice = document.createElement("div");
                    var newDivchoicexstruct = document.createElement("div");
                    var newDivchoicexphoto = document.createElement("div");
                    var newDivchoicextext = document.createElement("div");
                    //var newDiv1photo = document.createElement("div");
                    //var newDiv1text = document.createElement("div");
                    const button = document.createElement('button');
                    var section = document.createElement("SECTION");
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    var span3 = document.createElement('span');
                    var span4 = document.createElement('span');
                    var span5 = document.createElement('span');
    
                    //console.log("a")
                    newDivchoice.classList.add('choice3in4','m-2');
                    section.classList.add('portfolio-experiment','h-full');
                    button.classList.add('h-full','w-full');
                    newDivchoicexstruct.classList.add('choicexin4struct','h-full','w-full','flex');
                    newDivchoicexphoto.classList.add('choicexin4photo','h-full','w-1/2');
                    newDivchoicextext.classList.add('choicexin4text','h-full','w-1/2','flex','items-center');
                    span1.innerText = option.text;
                    span1.classList.add('texte','text-fonce', 'text-justify');
                    span2.classList.add('line','-right');
                    span3.classList.add('line','-top');
                    span4.classList.add('line','-left');
                    span5.classList.add('line','-bottom');
                    //button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                    //section.classList.add('portfolio-experiment', 'h-full');
                    //newDiv1.classList.add('choicenum1c4', 'm-4');
                    //newDiv1photo.classList.add('choicenum4c4photo');
                    //newDiv1text.classList.add('choicenum4c4text');
                    if(option.appearance){
                        switch (userAppearance) {
                            case 0:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                            case 1:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BG.png")';
                                break;
                            case 2:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YG.png")';
                                break;
                            case 3:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WW.png")';
                                break;
                            case 4:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BW.png")';
                                break;
                            case 5:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YW.png")';
                                break;
                        
                            default:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                        }
                    }
                    else{
                        console.log("oui");
                        newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'")';
                    }
                                  
                    newDivchoicextext.appendChild(span1)
                    newDivchoicexstruct.appendChild(newDivchoicexphoto);
                    newDivchoicexstruct.appendChild(newDivchoicextext);
                    
                    newDivchoicexstruct.appendChild(span2);
                    newDivchoicexstruct.appendChild(span3);
                    newDivchoicexstruct.appendChild(span4);
                    newDivchoicexstruct.appendChild(span5);

                    button.appendChild(newDivchoicexstruct);
                    section.appendChild(button);
                    newDivchoice.appendChild(section);


                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivchoice);
                }
                if (compt==4){
                    var newDivchoice = document.createElement("div");
                    var newDivchoicexstruct = document.createElement("div");
                    var newDivchoicexphoto = document.createElement("div");
                    var newDivchoicextext = document.createElement("div");
                    //var newDiv1photo = document.createElement("div");
                    //var newDiv1text = document.createElement("div");
                    const button = document.createElement('button');
                    var section = document.createElement("SECTION");
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    var span3 = document.createElement('span');
                    var span4 = document.createElement('span');
                    var span5 = document.createElement('span');
    
                    //console.log("a")
                    newDivchoice.classList.add('choice4in4','m-2');
                    section.classList.add('portfolio-experiment','h-full');
                    button.classList.add('h-full','w-full');
                    newDivchoicexstruct.classList.add('choicexin4struct','h-full','w-full','flex');
                    newDivchoicexphoto.classList.add('choicexin4photo','h-full','w-1/2');
                    newDivchoicextext.classList.add('choicexin4text','h-full','w-1/2','flex','items-center');
                    span1.innerText = option.text;
                    span1.classList.add('texte','text-fonce', 'text-justify');
                    span2.classList.add('line','-right');
                    span3.classList.add('line','-top');
                    span4.classList.add('line','-left');
                    span5.classList.add('line','-bottom');
                    //button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                    //section.classList.add('portfolio-experiment', 'h-full');
                    //newDiv1.classList.add('choicenum1c4', 'm-4');
                    //newDiv1photo.classList.add('choicenum4c4photo');
                    //newDiv1text.classList.add('choicenum4c4text');
                    if(option.appearance){
                        switch (userAppearance) {
                            case 0:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                            case 1:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BG.png")';
                                break;
                            case 2:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YG.png")';
                                break;
                            case 3:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WW.png")';
                                break;
                            case 4:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'BW.png")';
                                break;
                            case 5:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'YW.png")';
                                break;
                        
                            default:
                                newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'WG.png")';
                                break;
                        }
                    }
                    else{
                        console.log("oui");
                        newDivchoicexphoto.style.backgroundImage = 'url("../'+option.image+'")';
                    }
                                  
                    newDivchoicextext.appendChild(span1)
                    newDivchoicexstruct.appendChild(newDivchoicexphoto);
                    newDivchoicexstruct.appendChild(newDivchoicextext);
                    
                    newDivchoicexstruct.appendChild(span2);
                    newDivchoicexstruct.appendChild(span3);
                    newDivchoicexstruct.appendChild(span4);
                    newDivchoicexstruct.appendChild(span5);

                    button.appendChild(newDivchoicexstruct);
                    section.appendChild(button);
                    newDivchoice.appendChild(section);


                    button.addEventListener('click', () => selectOption(option));
                    optionButtonsElement.appendChild(newDivchoice);
                }
            }

        }
    });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

class Post{
    constructor(text_, commentaries_, fol_, folPS_, bh_, img_, appearance_){
        this.text = text_;
        this.commentaries = commentaries_;
        let min = Math.ceil(fol_[0]);
        let max = Math.floor(fol_[1]);
        this.fol = Math.floor(Math.random() * (max - min)) + min;
        this.folPS = folPS_;
        this.bh = bh_;
        this.img = img_;
        this.appearance = appearance_;
    }
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    socket.emit('leProchainTextCLui', nextTextNodeId);
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    
    if(option.commentaries != undefined){
        let newPost = new Post(option.text, option.commentaries, option.fol, option.folPS, option.bh, option.image, option.appearance);
        console.log("New post incoming", newPost);
        socket.emit('newPost', newPost);
        showTextNode(nextTextNodeId);
    }
    else{
        console.log('C MCLESGO');
        if(option.goBackToHome){
            window.location.href = "../home.html";
        }
        else if(option.mj == 1){
            window.location.href = "../turtle-saver.html";
        }
        else if(option.mj == 1){
            window.location.href = "../turtle-saver.html";
        }
        else if(option.mj == 2){
            window.location.href = "../maze.html";
        }
        else if(option.mj == 3){
            window.location.href = "../supermarket.html";
        }
        else{
            showTextNode(nextTextNodeId);
        }
    }
    //Récupérer les infos de l'option et les envoyer par socket
    
    if(option.sponsor != undefined){
        socket.emit('newSponsor', option.sponsor);
    }
}

const textNodes = [
    {
        id: 1,
        text: 'Welcome ! You are a professionnal basketball player. It\s now time to do your first post. Remember to tell futures followers what you love. Choose between three posts !',
        options: [
            {
                text: 'Welcome to my new account on Ethical Network !\n Unlike you I am the best basketball champion in the world. I plan to share my adventures with you via this account.\n Have fun !',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [20, 80],
                folPS : 2,
                bh : 30,
                nextText: 2,
                image : '../img/characters/sportif/Carre/bbCourt',
                appearance : true
            },
            {
                text: 'Welcome to my new account on Ethical Network !\n I am currently a professional basketball player and I love this sport. I plan to share my adventures with you via this account.\n Have fun !',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [200, 400],
                folPS : 7,
                bh : 5,
                nextText: 3,
                image : '../img/characters/sportif/Carre/bbCourt',
                appearance : true
            },
            {
                text: 'Welcome to my new account on Ethical Network !\n In life, I love basketball but I\'m not very good at it. But basketball is cool ! I plan to share my adventures with you via this account.',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [200, 300],
                folPS : 5,
                bh : 5,
                nextText: 4,
                image : '../img/characters/sportif/Carre/bbCourt',
                appearance : true
            }
        ]
    },
    {
        id: 2,
        text: 'Hi ! I\'ve been summoned by the master of this game to explain something to you ! You just choose an answer, and it is not really what we call a "good choice". With other words, be careful of how to choose your words when you talk to people online. Even if it was a joke, your words were near of presumption and it can hurt some people. Be careful next time, I believe in you and I\'m never gonna give you up !',
        options: [
            {
                text: 'I understand, go next !',
                nextText: 5
            },
        ]
    },
    {
        id: 3,
        text: 'Hi ! I\'ve been summoned by the master of this game to explain something to you ! You just choose an answer, and it is really what we call a "good choice". You explain very clearly your current activity and what is your objectives. Your post were not arrogant and I congratulate you !',
        options: [
            {
                text: 'Thanks, go next !',
                nextText: 5
            },
        ]
    },
    {
        id: 4,
        text: 'Hi ! I\'ve been summoned by the master of this game to explain something to you ! You just choose an answer, and it is very close to what we call a "good choice" ! I\'ll juste give you a new advice : Try to be more active next time, you seemed a little limp. Otherwise it was a great post !',
        options: [
            {
                text: 'Thanks for the advice, go next !',
                nextText: 5,
            },
        ]
    },
    {
        id: 5,
        text: 'Hi I\'m back ! I just wanted to give you some insights about your new job ! You\'ll be redirected to your main page. Here you\'ll see all indicators needed to build an "ethical network".',
        options: [
            {
                text: 'Thanks for the advice, go next !',
                nextText: 6,
                goBackToHome : true
            },
        ]
    },
    {
        id: 6,
        text: 'It\s now time to explain to your followers your training !  ',
        options: [
            {
                text: 'Hi guys ! I\'ll explain you my daily training !\nFirst, I wake up early and I go to the gym. In the afternoon, I go to the basketball room with my teammate.\nThe training start with a warm up, then the coach make some exercices specific of basketball (shooting, defense, dribbling). Then, we make a small match with all the team. And finally, we have some recovery exercises.',
                commentaries : ['That\'s a very hard training !', 'Nice training ! Do you have some advices to progress in basketball ?'],
                fol : [800, 1500],
                folPS : 10,
                bh : 5,
                nextText: 8,
                mj: 0,
                image : '../img/characters/sportif/posts/training/dailytraining',
                appearance : true
            },            
            {
                text: 'I\'ll explain you my daily training because mine is the best one !\n First, I wake up early to go to the gym, because the world is in the hands of people who are waking up early, and I am :)\n Next, I\'m going to the terrain to smash some noobs. I always win it all !',
                commentaries : ['That\'s a very hard training !', 'Nice training ! Do you have some advices to progress in basketball ?'],
                fol : [100, 500],
                folPS : 4,
                bh : 35,
                nextText: 7,
                mj : 0,
                image : '../img/characters/sportif/posts/training/dailytraining',
                appearance : true
            },            
            {
                text: 'Hi guys ! I\'ll explain you my daily training !\nFirst, I wake up early and I go to the gym. Then I go to the basketball room with my teammate.\n I personnaly do not warm up because I find it useless, I\'m always in condition to do some basketball. So my training start with some exercices specific of basketball (shooting, defense, dribbling). Then, we make a small match with all the team. And finally, we have some recovery exercises.',
                commentaries : ['That\'s a very hard training !', 'Nice training ! Do you have some advices to progress in basketball ?'],
                fol : [600, 1000],
                folPS : 8,
                bh : 15,
                nextText: 9,
                mj : 0,
                image : '../img/characters/sportif/posts/training/dailytraining',
                appearance : true
            }
        ]
    },
    {
        id: 7,
        text: 'Good morning say it back !\n I may have already said it but you need to be kind and cool with your followers ! They\'re here to progress or just to chill.\n You just gained BigHead.',
        options: [
            {
                text: 'I\'ll try to be better next time, I\'m ready to go next !',
                nextText: 10,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 8,
        text: 'Good morning say it back !\n It was a good choice ! You explain your responsible training and in addition you just choosed the rights words ! Congratulation !',
        options: [
            {
                text: 'Thank you, I\'m ready to go next !',
                nextText: 10,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 9,
        text: 'Good morning say it back !\n You were almost right ! You just choosed the rights words to explain your training but there\'s a thing... You said that warm-up is useless, but according to science this is not right. Many studies concluded that warm-up reduce the risks of injuries during effort.\n Be careful to what you say onlne !',
        options: [
            {
                text: 'I\'ll try to be better next time, I\'m ready to go next !',
                nextText: 10,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 10,
        text: 'It\s now time to show your followers your eating habits !',
        options: [
            {
                //Photo protéine
                text: 'Hello my friends ! Here is my favorite meal. Have a great day !',
                commentaries : ['I\'ve never eaten protein. I don\'t know what it tastes like.', 'Yes I love it too !'],
                fol : [800, 1500],
                folPS : 10,
                bh : 15,
                nextText: 11,
                mj : 0,
                image : '../img/characters/sportif/posts/saladeProt.png',
                appearance : false
            },            
            {
                //Photo fruit et légumes
                text: 'Hello my friends ! Here is my favorite meal. Have a great day !',
                commentaries : ['A very nice and healthy meal !', 'Yes I love it too !'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 5,
                nextText: 12,
                mj : 0,
                image : '../img/characters/sportif/posts/fruits.png',
                appearance : false
            },            
            {
                //Photo burger frites
                text: 'Hello my friends ! Here is my favorite meal. Have a great day !',
                commentaries : ['Nice but not very good for an athlete like.', 'Yes I love it too !'],
                fol : [600, 1000],
                folPS : 8,
                bh : 10,
                nextText: 13,
                mj : 0,
                image : '../img/characters/sportif/posts/hamburger.png',
                appearance : false
            },
            {
                //Photo sandwitch
                text: 'Hello my friends ! Here is my favorite meal. Have a great day !',
                commentaries : ['Nice but not very good for an athlete like you.', 'Yes I love it too !'],
                fol : [600, 1000],
                folPS : 8,
                bh : 10,
                nextText: 14,
                mj : 0,
                image : '../img/characters/sportif/posts/sandwich.png',
                appearance : false
            }
        ]
    },
    {
        id: 11,
        text: 'Hey ! I\'m here again ! Your post was not that bad but there\'s still a little something.. Protein is good for athletes, but don\'t forget to tell people that they need to eat fruits and vegetables.\n You can check why here : https://www.hsph.harvard.edu/nutritionsource/healthy-eating-pyramid/ ! I believe in you !',
        options: [
            {
                text: 'I understand, I\'m ready to go next !',
                nextText: 15,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 12,
        text: 'Hey ! I\'m here again !\n It was a good choice ! You show the healthiest food ! Congratulation !',
        options: [
            {
                text: 'Thank you, I\'m ready to go next !',
                nextText: 60,
                goBackToHome : false
            },
        ]
    },
    {
        id: 13,
        text: 'Hey ! I\'m here again ! So, we need to talk. Were you serious ? You\'re on a sport account and you are publishing pictures of hamburgers.. No need to say that this is not the best idea. Go check this :  https://www.hsph.harvard.edu/nutritionsource/healthy-eating-pyramid/. \n But I still believe in you !',
        options: [
            {
                text: 'Sorry, I\'ll try to do better next time !',
                nextText: 60,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 14,
        text: 'Hey ! I\'m here again ! Your post was not that bad but there\'s still a little something.. Sandwiches are not really good for athletes, but don\'t forget to tell people that they need to eat fruits and vegetables.\n You can check why here : https://www.hsph.harvard.edu/nutritionsource/healthy-eating-pyramid/ \n I believe in you !',
        options: [
            {
                text: 'I\'ll try to be better next time, I\'m ready to go next !',
                nextText: 60,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 60,
        text: 'I have a challenge for you ! Now that you know which food is better than another, you can help people with it !\n You\'ve been given 100€ to buy food to help reduce the hunger in the world. Everything you\'ll buy will be given to one association.\n Ready ?',
        options: [
            {
                text: 'Ready !',
                nextText: 15,
                mj : 3
            },
        ]
    },
    {
        id: 15,
        text: 'Your community is growing up and some sponsors wants to collaborate with you. Choose which sponsor you want !',
        options: [
            {
                //BouclierFéroce
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : BASKETBALL20',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 10,
                nextText: 16,
                mj : 0,
                sponsor : 'BouclierFéroce',
                image : '../img/characters/sportif/posts/rhinoshield.png',
                appearance : false
            },            
            {
                //BlueLightLegend
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : BASKETBALL20',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 20,
                nextText: 17,
                mj : 0,
                sponsor : 'BlueLightLegend',
                image : '../img/characters/sportif/posts/blueLightLegend.png',
                appearance : false
            },            
            {
                //Adadas
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : BASKETBALL20',
                commentaries : ['So cool ! Good job !', 'Exactly what I was expecting...'],
                fol : [6000, 10000],
                folPS : 40,
                bh : 12,
                nextText: 18,
                mj : 0,
                sponsor : 'Adadas',
                image : '../img/characters/sportif/posts/adadas.png',
                appearance : false
            }
        ]
    },
    {
        id: 70,
        text: 'Hi ! Did you know that Adadas just created sneakers based on plastic pollution ?\n I have a new challenge for you !\n Help them to collect plastic wastes. It will be useful for the planet !\n Goodluck ! ',
        options: [
            {
                text: 'Going for it !',
                nextText: 19,
                goBackToHome : false,
                mj : 1
            },
        ]
    },
    {
        id: 71,
        text: 'Hi ! Did you know that RhinoFéroce has no bad impact on environment ?\n I have a new challenge for you !\n Help them to collect plastic wastes. It will be useful for the planet !\n Goodluck !',
        options: [
            {
                text: 'Going for it !',
                nextText: 19,
                goBackToHome : false,
                mj : 1
            },
        ]
    },
    {
        id: 72,
        text: 'Hi ! Did you know that BlueLightLegend has some impact on environment ?\n I have a new challenge for you !\n Help them to collect plastic wastes. It will be useful for the planet !\n Goodluck ! ',
        options: [
            {
                text: 'Going for it !',
                nextText: 19,
                goBackToHome : false,
                mj : 1
            },
        ]
    },
    {
        id: 16,
        text: 'Hello ! I\'m back again. Be careful on your choice of sponsor ! Take a sponsor according to your community and what you post. You could have explain well to fans why you choosed BouclierFéroce for sponsor. ',
        options: [
            {
                text: 'Sorry, I\'ll try to do better next time !',
                nextText: 71,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 17,
        text: 'Hello ! I\'m back again. Be careful on your choice of sponsor ! Take a sponsor according to your community and what you post. A video games is a pretty cool idea but your community won\'t be interested.',
        options: [
            {
                text: 'I\'ll try to be better next time, I\'m ready to go next ',
                nextText: 72,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 18,
        text: 'Hello ! I\'m back again. You have made the good choice ! Your community will be interested in this type of sponsor because it\'s according to your main activity.',
        options: [
            {
                text: 'Thank you, I\'m ready to go next !',
                nextText: 70,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 19,
        text: 'You just scored first at a major event ! Congratulation ! Now you need to tell it to your followers, choose your way to do it !',
        options: [
            {
                // PHOTO EQUIPE PODIUM
                text: 'So happy of the results, thanks for the kinds words ! Proud of my team',
                commentaries : ['GG to your team !', 'Amazing !! Good results'],
                fol : [10000, 20000],
                folPS : 300,
                bh : 20,
                nextText: 20,
                mj : 0,
                image : '../img/characters/sportif/posts/podiumTeam.png',
                appearance : false
            },            
            {
                // PHOTO PODIUM COMPLET
                text: 'So happy of the results, thanks for the kinds words ! Congratulation to everyone competing in the tournament !',
                commentaries : ['GG to your team !', 'Amazing !! The other team has not been demerited'],
                fol : [30000, 50000],
                folPS : 400,
                bh : 5,
                nextText: 21,
                mj : 0,
                image : '../img/characters/sportif/posts/podiumComplet.png',
                appearance : false
            },            
            {
                // PHOTO SEUL
                text: 'So happy of the results, thanks for the kinds words ! I played it perfectly and I carried my team !',
                commentaries : ['GG to your team !', 'Congratulation, perfect result just like you !'],
                fol : [10000, 15000],
                folPS : 100,
                bh : 40,
                nextText: 22,
                mj : 0,
                image : '../img/characters/sportif/posts/winner/sportifMedal',
                appearance : true
            }
        ]
    },
    {
        id: 20,
        text: 'Hi my friend !\n It was a nice post, you thanked your team and if feels kind ! You could have thanked all people in the tournament but your post was great anyway ! Good luck for what\'s next ! ',
        options: [
            {
                text: 'It\'s good for me, let\'s go ! !',
                nextText: 23,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 21,
        text: 'Hi my friend ! You made a very good post ! You thanked everyone and words used were perfect !',
        options: [
            {
                text: 'Thank you ! Let\'s go next !',
                nextText: 23,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 22,
        text: 'Hi my friend ! To be honest I\'m a bit disappointed... It was presumptious and your community will not like that. Keep going mate, you can do it !',
        options: [
            {
                text: 'Sorry for this one, I\'m ready to go next !',
                nextText: 23,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 23,
        text: 'You have made some trainings for disabled people. Show it to your community.',
        options: [
            {
                text: 'Today I made a special training for disabled people, even though they won\'t ever be as good as me, they were not sooo bad',
                commentaries : ['Great initiative !', 'I love this initiative'],
                fol : [10000, 15000],
                folPS : 500,
                bh : 40,
                nextText: 24,
                mj : 0,
                image : '../img/characters/sportif/posts/handicape.png'
            },            
            {
                text: 'Disability is a daily challenge, today i realised how it\'s hard to live with it and was glad to help disabled people through their sport journey',
                commentaries : ['Great initiative !', 'I love this initiative'],
                fol : [30000, 50000],
                folPS : 1000,
                bh : 5,
                nextText: 25,
                mj : 0,
                image : '../img/characters/sportif/posts/handicape.png'
            },            
            {
                text: 'Hey guys, today I helped coaches with a special training for disabled people, it was ok',
                commentaries : ['Great initiative !', 'I love this initiative'],
                fol : [10000, 20000],
                folPS : 600,
                bh : 20,
                nextText: 26,
                mj : 0,
                image : '../img/characters/sportif/posts/handicape.png'
            }
        ]
    },
    {
        id: 24,
        text: 'What\'s up ! It\'s McLesgo again ! Your post is too much arrogant ! Be careful for the next one !',
        options: [
            {
                text: 'Sorry for that ! Go next !',
                nextText: 27,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 25,
        text: 'What\'s up ! It\'s McLesgo again ! Very great post, your initiative is perfect. Congratulation !',
        options: [
            {
                text: 'Thank you ! Let\'s go next !',
                nextText: 27,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 26,
        text: 'What\'s up ! It\'s McLesgo again ! Your choice is not very good, you seems unhappy. Be more attractive for your community !',
        options: [
            {
                text: 'Sorry for this one, I\'m ready to go next !',
                nextText: 27,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 27,
        text: 'Your community is growing up and some new sponsors wants to collaborate with you.\n Choose which new sponsor you want !',
        options: [
            {   // SudVPN
                text: 'Hello friends!\n I have a second sponsor who supports me in my projects ! Check out their shop !',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [10000, 15000],
                folPS : 600,
                bh : 10,
                nextText: 28,
                mj : 0,
                sponsor : 'SudVPN',
                image : '../img/characters/sportif/posts/SudVPN.png',
                appearance : false
            },            
            {   // Decat'court
                text: 'Hello friends!\n I have a second sponsor who supports me in my projects ! Check out their shop !',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [50000, 70000],
                folPS : 1500,
                bh : 10,
                nextText: 29,
                mj : 0,
                sponsor : 'Decatcour',
                image : '../img/characters/sportif/posts/decathcour.png',
                appearance : false
            },            
            {   // FAFI 22
                text: 'Hello friends!\n I have a second sponsor who supports me in my projects ! Check out their shop !',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [10000, 15000],
                folPS : 600,
                bh : 10,
                nextText: 30,
                mj : 0,
                sponsor : 'FAFI 22',
                image : '../img/characters/sportif/posts/fafi22.png',
                appearance : false
            }
        ]
    },
    {
        id: 28,
        text: 'Hello ! I\'m back again. Be careful on your choice of sponsor ! Take a sponsor according to your community and what you post.\n You could have explain well to fans why you choosed SudVPN for sponsor. ',
        options: [
            {
                text: 'Sorry for that ! Go next !',
                nextText: 80,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 80,
        text: 'Do you know that SudVPN is engaged in reducing their environemental impact ? I have a new challenge for you ! You\'ll be teleported in a maze and you need to collect all the barrels before they poison the forest. \nGood luck !',
        options: [
            {
                text: 'Let\'s go !',
                nextText: 31,
                goBackToHome : false,
                mj : 2
            },
        ]
    },
    {
        id: 29,
        text: 'Hello !\n I\'m back again. You have made the good choice ! Your community will be interested in this type of sponsor because it\'s according to your main activity.',
        options: [
            {
                text: 'Thank you ! Let\'s go next !',
                nextText: 81,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 81,
        text: 'Do you know that Decath\'Court is engaged in reducing their environemental impact ? I have a new challenge for you ! You\'ll be teleported in a maze and you need to collect all the barrels before they poison the forest. \nGood luck !',
        options: [
            {
                text: 'Let\'s go !',
                nextText: 31,
                goBackToHome : false,
                mj : 2
            },
        ]
    },
    {
        id: 30,
        text: 'Hello !\n I\'m back again. Be careful on your choice of sponsor ! Take a sponsor according to your community and what you post.\n A video games is a pretty cool idea but your community won\'t be interested.',
        options: [
            {
                text: 'Sorry for this one, I\'m ready to go next !',
                nextText: 82,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 82,
        text: 'Do you know that FAFI22 is engaged in reducing their environemental impact ? I have a new challenge for you ! You\'ll be teleported in a maze and you need to collect all the barrels before they poison the forest. \nGood luck !',
        options: [
            {
                text: 'Let\'s go !',
                nextText: 31,
                goBackToHome : false,
                mj : 2
            },
        ]
    },
    {
        id: 31,
        text: 'You will make a little tutorial to train at home. Choose the post you want !',
        options: [
            {
                text: 'Hi guys !\n I have done exercices for you but be careful it\'s very difficult, only me can do it easily.\nCheck out this link : https://www.youtube.com/watch?v=r8cexmYOknI',
                commentaries : ['Thanks a lot I will try them !', 'Cool ! I was looking for exercices like them !'],
                fol : [20000, 30000],
                folPS : 600,
                bh : 40,
                nextText: 32,
                mj : 0,
                image : '../img/characters/sportif/posts/prog.png',
                appearance : false
            },            
            {
                text: 'Hi guys !\n That\'s not very important to make sport every day but if you want to, check out this link : https://www.youtube.com/watch?v=r8cexmYOknI',
                commentaries : ['Thanks a lot I will try them !', 'Cool ! I was looking for exercices like them !'],
                fol : [10000, 30000],
                folPS : 800,
                bh : 20,
                nextText: 33,
                mj : 0,
                image : '../img/characters/sportif/posts/prog.png',
                appearance : false
            },            
            {
                text: 'Hi guys !\n I found perfect exercices for you and your family to train your body and improve your health !\nCheck out this link : https://www.youtube.com/watch?v=r8cexmYOknI',
                commentaries : ['Thanks a lot I will try them !', 'Cool ! I was looking for exercices like them !'],
                fol : [50000, 70000],
                folPS : 2000,
                bh : 5,
                nextText: 34,
                mj : 0,
                image : '../img/characters/sportif/posts/prog.png',
                appearance : false
            }
        ]
    },
    {
        id: 32,
        text: 'Here I am again !\n Your post was presumptious and your community will not like that. Be careful to what you post !\n Keep going mate, you can do it !',
        options: [
            {
                text: 'So sorry for that ! Go next !',
                nextText: 35,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 33,
        text: 'Here I am again !\n Your post was not really great. You need to motivate people to do sport. Multiple studies have shown that sport is benefic for health.\n But keep going, you can do it ! ',
        options: [
            {
                text: 'I\'ll think about it next time, thanks !',
                nextText: 35,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 34,
        text: 'Here I am again !\n Very great post, your initiative is perfect.\n Congratulation !',
        options: [
            {
                text: 'Thank you ! Let\'s go next !',
                nextText: 35,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 35,
        text: 'You and your team won the cup.\n Choose the post you want to share with your followers !',
        options: [
            {
                //PHOTO TOUTE L'EQUIPE
                text: 'Hi guys ! I\'m really happy to share you the picture of the cup we won this season. Thanks for all your support !',
                commentaries : ['Amazing wow ! GG to you and your team !', 'Excellent results !'],
                fol : [70000, 100000],
                folPS : 600,
                bh : 5,
                nextText: 36,
                mj : 0,
                image : '../img/characters/sportif/posts/podiumTeam.png',
                appearance : false
            },            
            {
                //PHOTO SEUL AVEC LA COUPE
                text: 'Hi guys ! I\'m really happy to share you the picture of the cup we won this season. Thanks for all your support !',
                commentaries : ['Amazing wow ! GG to you and your team !', 'Excellent results !'],
                fol : [30000, 50000],
                folPS : 800,
                bh : 30,
                nextText: 37,
                mj : 0,
                image : '../img/characters/sportif/posts/winner/sportifMedal',
                appearance : true
            },            
            {
                //PHOTO DE LA COUPE
                text: 'Hi guys ! I\'m really happy to share you the picture of the cup we won this season. Thanks for all your support !',
                commentaries : ['Amazing wow ! GG to you and your team !', 'Excellent results !'],
                fol : [50000, 70000],
                folPS : 2000,
                bh : 10,
                nextText: 38,
                mj : 0,
                image : '../img/characters/sportif/posts/podiumComplet.png',
                appearance : false
            }
        ]
    },
    {
        id: 36,
        text: 'Here I am again !\n Your post was presumptious and your community will not like that. Be careful to what you post ! You could have added a message for your team or other opponents.\n Keep going mate, you can do it !',
        options: [
            {
                text: 'So sorry for that ! Go next !',
                nextText: 39,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 37,
        text: 'Here I am again !\n Your post was okay. Remember to add a message of support for your team !\n But keep going, you can do it ! ',
        options: [
            {
                text: 'Ok ! I will do better next time ! Go next !',
                nextText: 39,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 38,
        text: 'Here I am again !\n Very great post, your initiative is perfect.\n Congratulation !',
        options: [
            {
                text: 'Thank you ! Let\'s go next !',
                nextText: 39,
                goBackToHome : false,
                mj : 0
            },
        ]
    },

    // Fin

    {
        id: 39,
        text: 'Hello there ! I\'m still here !\n I just wanted to thank you, you\'ve finished the game !',
        options: [
            {
                text: 'Yes, finally !',
                nextText: 40,
                goBackToHome : false,
                mj : 0
            },
            {
                text: 'Oh really ? I\'m so sad !',
                nextText: 41,
                goBackToHome : false,
                mj : 0
            }
        ]
    },
    {
        id: 40,
        text: 'Calm down, you don\'t need to be this rude, did you forget what you\'ve learned ?! ',
        options: [
            {
                text: 'Yes sorry..',
                nextText: 42,
                goBackToHome : false,
                mj : 0
            }
        ]
    },
    {
        id: 41,
        text: 'I\'m not sure you really mean it.. Can I trust you afterall ?',
        options: [
            {
                text: 'Of course ! Why would I lie to you ?',
                nextText: 42,
                goBackToHome : false,
                mj : 0
            },
            {
                text: 'You\'re smart, this was a joke !',
                nextText: 42,
                goBackToHome : false,
                mj : 0
            }
        ]
    },
    {
        id: 42,
        text: 'Nevermind..\n Okay now let\'s talk about real things !',
        options: [
            {
                text: 'Okay let\'s go !',
                nextText: 43,
                goBackToHome : false,
                mj : 0
            }
        ]
    },
    {
        id: 43,
        text: 'So you\'ve finished our game. I hope that you enjoyed it !\n If you want to play again to all our minigames you can choose "Freeplay" on the main page !\n Goodluck in your next adventure ! And don\'t forget to give us a point !',
        options: [
            {
                text: 'Thank you MacLesgo !',
                nextText: 43,
                goBackToHome : true,
                mj : 0
            }
        ]
    }
];