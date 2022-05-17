//const { spawn } = require("child_process");

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}
let nextTxt;
let userAppearance;

socket.emit('getAppearance');
socket.emit('getNextText');
socket.on('newAppearance', (Appearance)=>{
    console.log("oui");
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
                    console.log(userAppearance);
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
                    console.log(userAppearance);
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
                    console.log(userAppearance);
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
                    console.log(userAppearance);
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
                    console.log(userAppearance);
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
                    console.log(userAppearance);
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
                    console.log(userAppearance);
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
        text: 'Welcome ! You are a professionnal chief. It\'s now time to do your first post. Remember to tell futures followers what you love. Choose between three posts !',
        options: [
            {
                text: 'Welcome to my new account on Ethical Network !\n Unlike you I am the best chief in the world. I plan to share my adventures with you through this account.\n Have fun !',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [20, 80],
                folPS : 2,
                bh : 30,
                nextText: 2,
                image : '../img/',
                appearance : true
            },
            {
                text: 'Welcome to my new account on Ethical Network !\n I am currently a professional chief. I plan to share my adventures with you through this account.\n Have fun !',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [200, 400],
                folPS : 7,
                bh : 5,
                nextText: 3,
                image : '../img/',
                appearance : true
            },
            {
                text: 'Welcome to my new account on Ethical Network !\n In life, I love cooking but I\'m not very good at it. But cooking is cool ! I plan to share my adventures with you through this account.',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [200, 300],
                folPS : 5,
                bh : 5,
                nextText: 4,
                image : '../img/',
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
        text: 'Hi ! I\'ve been summoned by the master of this game to explain something to you ! You just choose an answer, and it is really what we call a "good choice". You explain very clearly your current activity and what are your objectives. Your post were not arrogant and I congratulate you !',
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
        text: 'Hi I\'m back ! I just wanted to give you some insights about your new job ! You\'ll be redirected to your main page. Here you\'ll see all indicators needed to build an "Ethical Network".',
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
        text: 'It\'s now time to show the world what type of food you love !',
        options: [
            {
                // Good food
                text: 'Here is my favorite food, yum yum !',
                commentaries : ['It look so good ! Would want to taste !', 'I would not eat that...'],
                fol : [20, 80],
                folPS : 2,
                bh : 30,
                nextText: 7,
                image : '../img/',
                appearance : true
            },
            {
                // Medium Food
                text: 'Here is my favorite food, yum yum !',
                commentaries : ['It look so good ! Would want to taste !', 'I would not eat that...'],
                fol : [200, 400],
                folPS : 7,
                bh : 5,
                nextText: 8,
                image : '../img/',
                appearance : true
            },
            {
                // Bad food
                text: 'Here is my favorite food, yum yum !',
                commentaries : ['It look so good ! Would want to taste !', 'I would not eat that...'],
                fol : [200, 300],
                folPS : 5,
                bh : 5,
                nextText: 9,
                image : '../img/',
                appearance : true
            }
        ]
    },
    {
        id: 7,
        text: 'Good morning say it back !\n It was a good choice, tasteful food and good for health !\n Congratulation !',
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
        id: 8,
        text: 'Good morning say it back !\n You were almost right , but be careful to show fat food everytime ! Good luck for what\'s next !',
        options: [
            {
                text: 'Thank you, go next !',
                nextText: 10,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 9,
        text: 'Good morning say it back !\n You were almost right , but be careful to show fat food everytime ! Good luck for what\'s next !',
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
        text: '',
        options: [
            {
                text: '',
                commentaries : [''],
                fol : [20, 80],
                folPS : 2,
                bh : 30,
                nextText: 7,
                image : '../img/',
                appearance : true
            },
            {
                text: '',
                commentaries : [''],
                fol : [200, 400],
                folPS : 7,
                bh : 5,
                nextText: 8,
                image : '../img/',
                appearance : true
            },
            {
                text: '',
                commentaries : [''],
                fol : [200, 300],
                folPS : 5,
                bh : 5,
                nextText: 9,
                image : '../img/',
                appearance : true
            }
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