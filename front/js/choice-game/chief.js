//const { spawn } = require("child_process");

document.getElementById("mailBtn").style.backgroundImage = 'url("../../img/mainPage/bulle.png")';

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}
let nextTxt;
let userAppearance;

socket.emit('getAppearance');
socket.emit('getNextText');
socket.emit('getTreesToPlant');
socket.on('newAppearance', (Appearance)=>{
    //console.log("oui");
    userAppearance = Appearance;
});
socket.on('leProchainTexte', (text) => {
    nextTxt = text;
    startGame();
});

socket.on("newTreesToPlant", (nb) => {
    if(nb == 0){
        document.getElementById("btnTreePlanter").style.backgroundImage = 'url("../../img/mainPage/tree.png")';
    }
    else{
        document.getElementById("btnTreePlanter").style.backgroundImage = 'url("../../img/mainPage/treeNotif.png")';
    }
});

function startGame() {
    state = {}
    showTextNode(nextTxt);
}

var timeLooper;
var textToWrite;
function loop(){
    if(textToWrite.length > 0){
        document.getElementById("textML").innerHTML += textToWrite.shift();
    }
    else{
        clearTimeout(timeLooper);
    }
    timeLooper = setTimeout('loop()', 40);
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

    //console.log("Nb choix :", nbChoix);

    let compt = 0;

    textNode.options.forEach(option => {

        //console.log(textNode.option)
        
        compt++;
        
        if (showOption(option)) {
            
            //console.log(compt);
            if(nbChoix===1){
                textElement.style.display = "none";
                optionButtonsElement.classList.add('zoneDesReponses','m-4', 'rounded-3xl', 'border-rougebouton', 'bg-lightfond', 'border-4');
                /*la photo de ML*/
                var newDivMLphoto = document.createElement("div");
                newDivMLphoto.classList.add('MLphoto','professor','bg-darkfond','border-rougebouton','border-4','rounded-3xl','m-4');
                optionButtonsElement.appendChild(newDivMLphoto);
                    
                /* le texte */
                var newDivMLtext = document.createElement("div");
                newDivMLtext.classList.add('MLtext','flex','items-center','text-justify','m-4','font-pixelise','tracking-widest');
                    
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
                newDivBO2.classList.add('BO2','bg-fonce','h-full','font-pixelise');
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
                //newDivBtext.innerText = textElement.innerText;
                newDivBtext.setAttribute("id","textML");
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

                textToWrite = textNode.text.split("");
    
                loop();
                
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
                    newDivMLtext.classList.add('MLtext','flex','items-center','text-justify','m-4','font-pixelise');

                        /* la bulle */
                    var newDivBcoin1 = document.createElement("div");
                    newDivBcoin1.classList.add('BcoinTR','bg-fonce','h-full',);
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
                    newDivBtext.classList.add('Btext','bg-white','p-4','h-full','flex','items-center','font-pixelise');
                    //newDivBtext.innerText = textElement.innerText;
                    newDivBtext.setAttribute("id","textML");
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

                    textToWrite = textNode.text.split("");
    
                    loop();
            
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
                    //console.log(userAppearance);
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
                        //console.log("oui");
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
                    //console.log(userAppearance);
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
                        //console.log("oui");
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
                    //console.log(userAppearance);
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
                        //console.log("oui");
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
                    //console.log(userAppearance);
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
                        //console.log("oui");
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
                    //console.log(userAppearance);
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
                        //console.log("oui");
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
                    //console.log(userAppearance);
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
                        //console.log("oui");
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
                    //console.log(userAppearance);
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
                        //console.log("oui");
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
    constructor(text_, commentaries_, fol_, folPS_, bh_, img_, appearance_, score_){
        this.text = text_;
        this.commentaries = commentaries_;
        let min = Math.ceil(fol_[0]);
        let max = Math.floor(fol_[1]);
        this.fol = Math.floor(Math.random() * (max - min)) + min;
        this.folPS = folPS_;
        this.bh = bh_;
        this.img = img_;
        this.appearance = appearance_;
        this.score = score_;
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
        let newPost = new Post(option.text, option.commentaries, option.fol, option.folPS, option.bh, option.image, option.appearance, option.score);
        //console.log("New post incoming", newPost);
        socket.emit('newPost', newPost);
        showTextNode(nextTextNodeId);
    }
    else{
        //console.log('C MCLESGO');
        if(option.goBackToHome){
            window.location.href = "../home.html";
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
        else if(option.mj == 4){
            window.location.href = "../fake-invaders.html";
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
                text: 'Welcome to my new account on Ethical Network !\n Unlike you I am the best chief in the world. I plan to share my adventures with you through this account.\n Have fun and follow !',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [20, 80],
                folPS : 2,
                bh : 30,
                nextText: 2,
                image : '../img/characters/chief/kitchen/kitchenCarre',
                appearance : true,
                score : 1
            },
            {
                text: 'Welcome to my new account on Ethical Network !\n I am currently a professional chief. I plan to share my adventures with you through this account.\n Have fun !',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [200, 400],
                folPS : 7,
                bh : 5,
                nextText: 3,
                image : '../img/characters/chief/kitchen/kitchenCarre',
                appearance : true,
                score : 3
            },
            {
                text: 'Welcome to my new account on Ethical Network !\n I love cooking but I\'m not very good at it. However cooking is cool ! I plan to share my adventures with you through this account.',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [200, 300],
                folPS : 5,
                bh : 5,
                nextText: 4,
                image : '../img/characters/chief/kitchen/kitchenCarre',
                appearance : true,
                score : 2
            }
        ]
    },
    {
        id: 2,
        text: 'Hi ! I\'ve been summoned by the master of this game to explain something to you ! You just choose an answer, and it is not really what one would call a "good choice". In other words, be careful of your choice ofr words when you talk to people online. Even if it was meant to be a joke, your words were pretentious and it can hurt some of the people who follow you. Be careful next time, I believe in you and I\'m never gonna give you up !',
        options: [
            {
                text: 'I understand, go next !',
                nextText: 5
            },
        ]
    },
    {
        id: 3,
        text: 'Hi ! I\'ve been summoned by the master of this game to explain something to you ! You just choose a post, and it is really what one would call a "good choice". You explained very clearly your current activity and what are your objectives. Your post was not arrogant and I congratulate you !',
        options: [
            {
                text: 'Thanks, go next !',
                nextText: 5
            },
        ]
    },
    {
        id: 4,
        text: 'Hi ! I\'ve been summoned by the master of this game to explain something to you ! You just choose a post, and it is very close to what one would call a "good choice" ! I\'ll juste give you a new piece of advice : Try to be more active next time, you seemed a little limp. Otherwise it was a great post !',
        options: [
            {
                text: 'Thanks for the advice, go next !',
                nextText: 5,
            },
        ]
    },
    {
        id: 5,
        text: 'Hi I\'m back ! I just wanted to give you insights about your new job ! You\'ll be redirected to your main page. Here you\'ll see all indicators needed to build an "Ethical Network".',
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
                fol : [800, 1500],
                folPS : 10,
                bh : 5,
                nextText: 7,
                image : '../img/characters/chief/posts/mealNice.jpg',
                appearance : false,
                score : 3
            },
            {
                // Medium Food
                text: 'Here is my favorite food, yum yum !',
                commentaries : ['It look so good ! Would want to taste !', 'I would not eat that...'],
                fol : [600, 1000],
                folPS : 8,
                bh : 10,
                nextText: 8,
                image : '../img/characters/chief/posts/mealOk.jpg',
                appearance : false,
                score : 2
            },
            {
                // Bad food
                text: 'Here is my favorite food, yum yum !',
                commentaries : ['It look so good ! Would want to taste !', 'I would not eat that...'],
                fol : [100, 500],
                folPS : 4,
                bh : 15,
                nextText: 9,
                image : '../img/characters/chief/posts/badMeal.jpg',
                appearance : false,
                score : 1
            }
        ]
    },
    {
        id: 7,
        text: 'Hello there, I am back !\n It was a good choice, tasteful food and good for one\'s health !\n Congratulation !',
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
        text: 'Hello there, I am back !\n You were almost right , but be mindful of how healthy the food you share is ! Good luck for what\'s next !',
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
        text: 'Hello there, I am back !\n You were almost right , but be careful, don\'t show fat food everytime ! Good luck for what\'s next !',
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
        // A COMMENTER
        id: 10,
        text: 'Now you can help your followers by posting a great recipe !',
        options: [
            {
                // Nickel
                text: 'Hi everyone ! I thought that it\'d be useful for you to learn how to cook great crepes ! By the way in this recipe I used ',
                commentaries : ['Thanks for the recipe ! I\'ll use it soon !', 'I\'ll try it !'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 5,
                nextText: 11,
                image : '../img/characters/chief/posts/recipe.png',
                appearance : false,
                score : 3
            },
            {
                // Pas trop d'infos
                text: 'Hi everyone ! I thought that it\'d be useful for you to learn how to cook great crepes ! By the way in this recipe I used ',
                commentaries : ['Thanks for the recipe ! I\'ll use it soon !', 'I\'ll try it !'],
                fol : [800, 1500],
                folPS : 10,
                bh : 15,
                nextText: 12,
                image : '../img/characters/chief/posts/recipe.png',
                appearance : false,
                score : 2
            },
            {
                // Information fausse
                text: 'Hi everyone ! I thought that it\'d be useful for you to learn how to cook great crepes ! By the way in this recipe I used ',
                commentaries : ['Thanks for the recipe ! I\'ll use it soon !', 'I\'ll try it !'],
                fol : [600, 1000],
                folPS : 8,
                bh : 10,
                nextText: 13,
                image : '../img/characters/chief/posts/recipe.png',
                appearance : false,
                score : 1
            }
        ]
    },
    {
        id: 11,
        text: 'Hi I\'m back ! Just wanted to talk to you about something. Your post was awesome ! You provided a great recipe and good intels about the ingredients, good job !',
        options: [
            {
                text: 'Thank you professor ! See you next time !',
                nextText: 14,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 12,
        text: 'Hi I\'m back ! Just wanted to talk to you about something. Your post was great, you could have given more intels on which ingredients to use. Was nice nonetheless !',
        options: [
            {
                text: 'Understood, I\'ll try to do better next time !',
                nextText: 14,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 13,
        text: 'Hi I\'m back ! Just wanted to talk to you about something. Your recipe is great, but you have to be careful about what you post. The propriety of the ingredient is not true, don\'t post fake news !',
        options: [
            {
                text: 'Sorry, I\'ll be better next time !',
                nextText: 14,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 14,
        text: 'By the way, concerning fake news, do you know that the spread of fake news is a very dangerous phenomenon ? Everyone should help stopping them ! I propose you to help in this "quest". You\'ll be launch in Fake Invaders, a game where you need to destroy fake news before they reach Earth. Good luck !',
        options: [
            {
                text: 'I\'m ready',
                nextText: 15,
                goBackToHome : true,
                mj : 4
            },
        ]
    },
    {
        id: 15,
        text: 'Your community is growing bigger and a few sponsors wants to collaborate with you. Choose the sponsor you want !',
        options: [
            {
                //SudVPN
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : CHIEF20',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 10,
                nextText: 16,
                mj : 0,
                sponsor : 'SudVPN',
                image : '../img/characters/chief/posts/SudVPN.png',
                appearance : false,
                score : 1.5
            },            
            {
                //Tefol
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : CHIEF20',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [6000, 10000],
                folPS : 40,
                bh : 5,
                nextText: 17,
                mj : 0,
                sponsor : 'Tefol',
                image : '../img/characters/chief/posts/tefolFond.png',
                appearance : false,
                score : 3
            },            
            {
                //Adadas
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : CHIEF20',
                commentaries : ['So cool ! Good job !', 'Exactly what I was expecting...'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 12,
                nextText: 18,
                mj : 0,
                sponsor : 'Adadas',
                image : '../img/characters/sportif/posts/adadas.png',
                appearance : false,
                score : 1.5
            }
        ]
    },
    {
        id: 16,
        text: 'Hello ! I\'m back again. Be careful on your choice of sponsor ! Chose a sponsor according to your community\'s interests and what you post. You could have explained to your fans why you choosed SudVPN as your sponsor. ',
        options: [
            {
                text: 'Sorry, I\'ll try to do better next time !',
                nextText: 19,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 18,
        text: 'Hello ! I\'m back again. Be careful on your choice of sponsor ! Take a sponsor according to your community and what you post. A sport sponsor is a pretty cool idea but your community won\'t be interested.',
        options: [
            {
                text: 'I\'ll try to be better next time, I\'m ready to go next ',
                nextText: 19,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 17,
        text: 'Hello ! I\'m back again. You have made the right choice ! Your community will be interested in this type of sponsor because it\'s related to your main activity.',
        options: [
            {
                text: 'Thank you, I\'m ready to go next !',
                nextText: 19,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 19,
        text: 'You just did a cooking lesson, show it to your followers !',
        options: [
            {
                text: 'Today I made a special cooking lesson, even if people won\'t ever be as good as me, they can always try',
                commentaries : ['Such a nice initiative !', 'Would have loved to be here !'],
                fol : [10000, 15000],
                folPS : 100,
                bh : 30,
                nextText: 20,
                mj : 0,
                image : '../img/characters/chief/posts/groupecuisine.png',
                appearance : false,
                score : 1
            },            
            {
                text: 'Today I made a special cooking lesson, people were quite good.',
                commentaries : ['Such a nice initiative !', 'Would have loved to be here !'],
                fol : [10000, 20000],
                folPS : 300,
                bh : 15,
                nextText: 21,
                mj : 0,
                image : '../img/characters/chief/posts/groupecuisine.png',
                appearance : false,
                score : 2
            },            
            {
                text: 'Today I made a special cooking lesson, this was really cool to do and everybody seemed to have enjoyed it !',
                commentaries : ['Such a nice initiative !', 'Would have loved to be here !'],
                fol : [30000, 50000],
                folPS : 400,
                bh : 5,
                nextText: 22,
                mj : 0,
                image : '../img/characters/chief/posts/groupecuisine.png',
                appearance : false,
                score : 3
            }
        ]
    },
    {
        id: 20,
        text: 'What\'s up ! It\'s McLesgo again ! Your post is too much arrogant ! Be careful for the next one !',
        options: [
            {
                text: 'Sorry for that ! Go next !',
                nextText: 23,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 22,
        text: 'What\'s up ! It\'s McLesgo again ! Very good post, your initiative is perfect. Congratulations !',
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
        id: 21,
        text: 'What\'s up ! It\'s McLesgo again ! Your choice is not very good, you seemed unhappy. Be more enthousiast for your community !',
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
        text: 'Hey ! Today is the universal day of oceans ! In order to show your interest in this cause, post a picture of a fish !',
        options: [
            {
                text: 'Here is what I\'ll cook today, such a nice opportunity. Protect our oceans ! ',
                commentaries : ['Good initiative !','It\'s a nice thing to sensibilize everyone !'],
                fol : [30000, 50000],
                folPS : 1000,
                bh : 5,
                nextText: 24,
                mj : 0,
                image : '../img/characters/chief/posts/poisson.png',
                appearance : false,
                score : 3
            },            
            {
                text: 'Here is what I\'ll cook today, such a nice opportunity.',
                commentaries : ['Good initiative !','It\'s a nice thing to sensibilize everyone !'],
                fol : [10000, 20000],
                folPS : 600,
                bh : 20,
                nextText: 25,
                mj : 0,
                image : '../img/characters/chief/posts/poisson.png',
                appearance : false,
                score : 2
            },            
            {
                text: 'Here is what I\'ll cook today, fish are not that good tasting ',
                commentaries : ['Good initiative !','It\'s a nice thing to sensibilize everyone !'],
                fol : [10000, 15000],
                folPS : 500,
                bh : 30,
                nextText: 26,
                mj : 0,
                image : '../img/characters/chief/posts/poisson.png',
                appearance : false,
                score : 1
            }
        ]
    },
    {
        id: 24,
        text: 'Hi ! It\'s me again ! You did a really great job, sensibilize everyone about this cause is really good !',
        options: [
            {
                text: 'Let\'s go next !',
                nextText: 27,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 25,
        text: 'Hi ! It\'s me again ! Your post was... meh. You did a good job at advertising this cause to people but you could have done more to sensibilize them.\n Keep faith !',
        options: [
            {
                text: 'Thank you ! Let\'s go next !',
                nextText: 27,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 26,
        text: 'Hi ! It\'s me again ! Your post wasn\'t good. You did not a good job at advertising this cause to people and you could have done more to sensibilize them.\n But I\'m never gonna give you up !',
        options: [
            {
                text: 'Sorry for this one, I\'m ready to go next !',
                nextText: 27,
                goBackToHome : false,
                mj : 0
            },
        ]
    },
    {
        id: 27,
        text: 'As today is the world ocean day, you could help association to collect plastic trash from the ocean ! Did you know that globally it\'s estimated that approximately 52% of all sea turtles have eaten plastic ? Let\'s counter this !',
        options: [
            {
                text: 'Let\s save the turtle !',
                nextText: 28,
                goBackToHome : false,
                mj : 1
            },
        ]
    },
    {
        id: 28,
        text: 'You\'ve been called to help homeless people, Red Cross proposed you to cook for them. Did you know that there was 300 000 homeless people in France in 2020 ? And you can help !\n You\'ll be in a supermarket with 100€ to spend. Everything you\'ll collect will be given to homeless people.\n Ready ?! ',
        options: [
            {
                text: 'Go !',
                nextText: 29,
                goBackToHome : false,
                mj : 3
            },
        ]
    },
    {
        id: 29,
        text: 'Your community is growing up and some new sponsors wants to collaborate with you.\n Choose which new sponsor you want !',
        options: [
            {   // Blue Light Legend
                text: 'Hello guys!\n I have a second sponsor who supports me in my projects ! Check out their shop !',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [10000, 15000],
                folPS : 600,
                bh : 10,
                nextText: 30,
                mj : 0,
                sponsor : 'Blue Light Legend',
                image : '../img/characters/chief/posts/blueLightLegend.png',
                appearance : false,
                score : 1.5
            },            
            {   // Epinol
                text: 'Hello guys!\n I have a second sponsor who supports me in my projects ! Check out their shop !',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [50000, 70000],
                folPS : 1500,
                bh : 10,
                nextText: 31,
                mj : 0,
                sponsor : 'Epinol',
                image : '../img/characters/chief/posts/epinolFond.png',
                appearance : false,
                score : 3
            },            
            {   // FAFI 22
                text: 'Hello friends!\n I have a second sponsor who supports me in my projects ! Check out their shop !',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [10000, 15000],
                folPS : 600,
                bh : 10,
                nextText: 32,
                mj : 0,
                sponsor : 'FAFI 22',
                image : '../img/characters/sportif/posts/fafi22.png',
                appearance : false,
                score : 1.5
            }
        ]
    },

    {
        id: 30,
        text: 'Hello !\n I\'m back again. Be careful on your choice of sponsor ! Choose a sponsor according to your community and what you post.\n A video games is a pretty cool idea but your community won\'t be interested.',
        options: [
            {
                text: 'Sorry for this one, I\'m ready to go next !',
                nextText: 82,
                goBackToHome : true,
                mj : 0
            },
        ]
    },

    {
        id: 31,
        text: 'Hello !\n I\'m back again. You have made the right choice ! Your community will be interested in this type of sponsor because it\'s related to your main activity.',
        options: [
            {
                text: 'Thank you ! Let\'s go next !',
                nextText: 33,
                goBackToHome : true,
                mj : 0
            },
        ]
    },

    {
        id: 32,
        text: 'Hello ! I\'m back again. Be careful on your choice of sponsor ! Choose a sponsor according to your community and what you post.\n You could have explained  to your fans why you choosed FAFI22 for sponsor. ',
        options: [
            {
                text: 'Sorry for that ! Go next !',
                nextText: 33,
                goBackToHome : true,
                mj : 0
            },
        ]
    },


    {
        id: 33,
        text: 'You\'ve just been challenge ! You need to cook with a pre-made ingredients\' list. You just have to choose between three options : ',
        options: [
            {  
                text: 'Hi everyone ! I\'ve been challenge to cook something with a pre-selected list of ingredients. I chose to collect ingredients at Carrouf !',
                commentaries : ['Nice challenge, but why at this shop ?', 'Really cool challenge !'],
                fol : [30000, 50000],
                folPS : 600,
                bh : 15,
                nextText: 34,
                mj : 0,
                image : '../img/characters/chief/posts/carrouf.png',
                appearance : false,
                score : 1
            },            
            {   
                text: 'Hi everyone ! I\'ve been challenged to cook something with an already made selection of ingredients. I choosed to collect ingredients at Biocopo !',
                commentaries : ['Nice challenge, but why at this shop ?', 'Really cool challenge !'],
                fol : [70000, 100000],
                folPS : 800,
                bh : 10,
                nextText: 35,
                mj : 0,
                image : '../img/characters/chief/posts/biocopo.png',
                appearance : false,
                score : 2
            },            
            { 
                text: 'Hi everyone ! I\'ve been challenged to cook something with pre-selected ingredients. I chose to collect ingredients at the LocalFood store!',
                commentaries : ['Nice challenge, but why at this shop ?', 'Really cool challenge !'],
                fol : [70000, 100000],
                folPS : 2000,
                bh : 10,
                nextText: 36,
                mj : 0,
                image : '../img/characters/sportif/posts/localFood.png',
                appearance : false,
                score : 3
            }
        ]
    },
    {
        id: 34,
        text: 'Hello there, it\'s McLesgo ! The challenge idea is great, but buying all the ingredients at Carrouf is not a really great idea, all the products are not always fresh... It\'s important to support local economy, and you haven\'t.',
        options: [
            {
                text: 'Sorry for that ! Go next !',
                nextText: 37,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 35,
        text: 'Hello there, it\'s McLesgo ! The challenge idea is great, but Biocopo is not the best shop to buy all of your needs. nonetheless it\'s still better than great distribution ! It\'s important to support local economy, you could have done better.',
        options: [
            {
                text: 'I\'ll be stronger next time ! Go next !',
                nextText: 37,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 36,
        text: 'Hello there, it\'s McLesgo ! The challenge idea is great and the shop where you\'ve bought all the ingredients is really cool ! It\'s important to support local economy, you did great ! ',
        options: [
            {
                text: 'Sorry for that ! Go next !',
                nextText: 37,
                goBackToHome : true,
                mj : 0
            },
        ]
    },
    {
        id: 37,
        text: 'Local economy and local environement need to be supported nowadays. Everyone need to be careful of what they eat or where they\'re going, and you can help ! Help associations by collecting all the toxic barrels and escape the maze !\n Good luck !',
        options: [
            {
                text: 'Let\'s help the planet !',
                nextText: 39,
                goBackToHome : false,
                mj : 2
            },
        ]
    },







    // Fin

    {
        id: 39,
        text: 'Hello there ! I\'m still here !\n I just wanted to thank you for playing, you\'ve finished the game !',
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
        text: 'There is no need to be this rude, did you forget what you\'ve learned ? ',
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
        text: 'I\'m not sure you really meant it.. Can I trust you afterall ?',
        options: [
            {
                text: 'Of course ! Why would I lie to you ?',
                nextText: 42,
                goBackToHome : false,
                mj : 0
            },
            {
                text: 'You\'re clever, this was a joke !',
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
        text: 'So you\'ve finished our game. I hope you enjoyed it !\n If you want to play again to all our minigames you can choose "Freeplay" on the main page !\n Goodluck in your next adventure ! And don\'t forget to give us a point !',
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