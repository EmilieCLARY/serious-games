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
            if(nbChoix===1){
                    var newDivML = document.createElement("div");
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
                    newDivML.classList.add('macLessgoch', 'm-4');
                    
                    
                    
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
                    optionButtonsElement.appendChild(newDivML);
                
                /* <div class="choicenum1 bg-fonce m-4">
                <section class="portfolio-experiment  h-full">
                    <button  class="w-full h-full btn">
                        <span class="texte text-fonce">Option 1</span>
                        <span class="line -right"></span>
                        <span class="line -top"></span>
                        <span class="line -left"></span>
                        <span class="line -bottom"></span>
                    </button>
                </section>
            </div>
*/
            } else if (nbChoix===3){
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
            } else if(nbChoix===4){
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
                    newDiv1.classList.add('choicenum1c4', 'm-4');
                    
                    
                    
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
                    newDiv2.classList.add('choicenum2c4', 'm-4');
                    
                    
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
                    newDiv.classList.add('choicenum3c4', 'm-4');
                    
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
                if(compt == 4){ // Troisième bouton
                    var newDiv = document.createElement("div");
                    const button = document.createElement('button');
                    var section = document.createElement("SECTION");
                    var span1 = document.createElement('span');
                    var span2 = document.createElement('span');
                    var span3 = document.createElement('span');
                    var span4 = document.createElement('span');
                    var span5 = document.createElement('span');
        
                    span1.innerText = option.text;
                    button.classList.add('w-full','h-full'); // Ajouter une classe c'est comme ça
                    section.classList.add('portfolio-experiment', 'h-full');
                    newDiv.classList.add('choicenum4c4', 'm-4');
                    
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
    //Récupérer les infos de l'option et les envoyer par socket
    showTextNode(nextTextNodeId);
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
                nextText: 2
            },
            {
                text: 'Welcome to my new account on Ethical Network !\n I am currently a professional basketball player and I love this sport. I plan to share my adventures with you via this account.\n Have fun !',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [200, 400],
                folPS : 7,
                bh : 5,
                nextText: 3
            },
            {
                text: 'Welcome to my new account on Ethical Network !\n In life, I love basketball but I\'m not very good at it. But basketball is cool ! I plan to share my adventures with you via this account.',
                commentaries : ['Welcome in Ethical Network !','I\'m interested about your adventures !'],
                fol : [200, 300],
                folPS : 5,
                bh : 5,
                nextText: 4
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
                text: 'Hi guys ! I\'ll explain you my daily training !\nFirst, I woke up early and I go to the gym. In the afternoon, I go to the basketball room with my teammate.\nThe training start with a warm up, then the coach make some exercices specific of basketball (shooting, defense, dribbling). Then, we make a small match with all the team. And finally, we have some recovery exercises.',
                commentaries : ['That\'s a very hard training !', 'Nice training ! Do you have some advices to progress in basketball ?'],
                fol : [800, 1500],
                folPS : 10,
                bh : 5,
                nextText: 8
            },            
            {
                text: 'I\'ll explain you my daily training because mine is the best one !\n First, I wake up early to go to the gym, because the world is in the hands of people who are waking up early, and I am :)\n Next, I\m going to the terrain to smash some noobs. I always win it all !',
                commentaries : ['That\'s a very hard training !', 'Nice training ! Do you have some advices to progress in basketball ?'],
                fol : [100, 500],
                folPS : 4,
                bh : 35,
                nextText: 7
            },            
            {
                text: 'Hi guys ! I\'ll explain you my daily training !\nFirst, I woke up early and I go to the gym. Then I go to the basketball room with my teammate.\n I personnaly do not warm up because I find it useless, I\'m always in condition to do some basketball. So my training start with some exercices specific of basketball (shooting, defense, dribbling). Then, we make a small match with all the team. And finally, we have some recovery exercises.',
                commentaries : ['That\'s a very hard training !', 'Nice training ! Do you have some advices to progress in basketball ?'],
                fol : [600, 1000],
                folPS : 8,
                bh : 15,
                nextText: 9
            }
        ]
    },
    {
        id: 7,
        text: 'Good morning say it back !\n I may have already said it but you need to be kind and cool with your followers ! They\re here to progress or just to chill.\n You just gained BigHead.',
        options: [
            {
                text: 'I\ll try to be better next time, I\'m ready to go next !',
                nextText: 10,
                goBackToHome : true
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
                goBackToHome : true
            },
        ]
    },
    {
        id: 9,
        text: 'Good morning say it back !\n You were almost right ! You just choosed the rights words to explain your training but there\'s a thing... You said that warm-up is useless, but according to science this is not right. Many studies concluded that warm-up reduce the risks of injuries during effort.\n Be careful to what you say onlne !',
        options: [
            {
                text: 'I\ll try to be better next time, I\'m ready to go next !',
                nextText: 10,
                goBackToHome : true
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
                nextText: 11
            },            
            {
                //Photo fruit et légumes
                text: 'Hello my friends ! Here is my favorite meal. Have a great day !',
                commentaries : ['A very nice and healthy meal !', 'Yes I love it too !'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 5,
                nextText: 12
            },            
            {
                //Photo burger frites
                text: 'Hello my friends ! Here is my favorite meal. Have a great day !',
                commentaries : ['Nice but not very good for an athlete like.', 'Yes I love it too !'],
                fol : [600, 1000],
                folPS : 8,
                bh : 10,
                nextText: 13
            },
            {
                //Photo sandwitch
                text: 'Hello my friends ! Here is my favorite meal. Have a great day !',
                commentaries : ['Nice but not very good for an athlete like you.', 'Yes I love it too !'],
                fol : [600, 1000],
                folPS : 8,
                bh : 10,
                nextText: 14
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
                goBackToHome : true
            },
        ]
    },
    {
        id: 12,
        text: 'Hey ! I\'m here again !\n It was a good choice ! You show the healthiest food ! Congratulation !',
        options: [
            {
                text: 'Thank you, I\'m ready to go next !',
                nextText: 15,
                goBackToHome : true
            },
        ]
    },
    {
        id: 13,
        text: 'Hey ! I\'m here again ! So, we need to talk. Were you serious ? You\'re on a sport account and you are publishing pictures of hamburgers.. No need to say that this is not the best idea. Go check this :  https://www.hsph.harvard.edu/nutritionsource/healthy-eating-pyramid/. \n But I still believe in you !',
        options: [
            {
                text: 'Sorry, I\'ll try to do better next time !',
                nextText: 15,
                goBackToHome : true
            },
        ]
    },
    {
        id: 14,
        text: 'Hey ! I\'m here again ! Your post was not that bad but there\'s still a little something.. Sandwiches are not really good for athletes, but don\'t forget to tell people that they need to eat fruits and vegetables.\n You can check why here : https://www.hsph.harvard.edu/nutritionsource/healthy-eating-pyramid/ \n I believe in you !',
        options: [
            {
                text: 'I\'l try to be better next time, I\'m ready to go next !',
                nextText: 15,
                goBackToHome : true
            },
        ]
    },
    {
        id: 15,
        text: 'Your community is growing up and some sponsors wants to collaborate with you. Choose what sponsor you want !',
        options: [
            {
                //BouclierFéroce
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : BASKETBALL20',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 10,
                nextText: 16
            },            
            {
                //BlueLightLegend
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : BASKETBALL20',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [3000, 5000],
                folPS : 20,
                bh : 20,
                nextText: 17
            },            
            {
                //Adadas
                text: 'What\'s up guys ? I have my first sponsor ! Check out their online shop and use the CODE : BASKETBALL20',
                commentaries : ['So cool ! Good job !', 'Not really what I was expecting...'],
                fol : [6000, 10000],
                folPS : 40,
                bh : 12,
                nextText: 18
            }
        ]
    },
    {
        id: 16,
        text: 'Hello ! I\'m back again. Be careful on your choice of sponsor ! Take a sponsor according to your community and what you post. You could have explain well to fans why you choosed BouclierFéroce for sponsor. ',
        options: [
            {
                text: 'Sorry, I\'ll try to do better next time !',
                nextText: 19,
                goBackToHome : true
            },
        ]
    },
    {
        id: 17,
        text: 'Hello ! I\'m back again. Be careful on your choice of sponsor ! Take a sponsor according to your community and what you post. A video games is a pretty cool idea but your community won\'t be interested.',
        options: [
            {
                text: 'I\'l try to be better next time, I\'m ready to go next ',
                nextText: 19,
                goBackToHome : true
            },
        ]
    },
    {
        id: 18,
        text: 'Hello ! I\'m back again. You have made the good choice ! Your community will be interested in this type of sponsor because it\'s according to your main activity.',
        options: [
            {
                text: 'Thank you, I\'m ready to go next !',
                nextText: 19,
                goBackToHome : true
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
                nextText: 20
            },            
            {
                // PHOTO PODIUM COMPLET
                text: 'So happy of the results, thanks for the kinds words ! Congratulation to everyone competing in the tournament !',
                commentaries : ['GG to your team !', 'Amazing !! The other team has not been demerited'],
                fol : [30000, 50000],
                folPS : 400,
                bh : 5,
                nextText: 21
            },            
            {
                // PHOTO SEUL
                text: 'So happy of the results, thanks for the kinds words ! I played it perfectly and I carried my team !',
                commentaries : ['GG to your team !', 'Congratulation, perfect result just like you !'],
                fol : [10000, 15000],
                folPS : 100,
                bh : 40,
                nextText: 22
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
                goBackToHome : true
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
                goBackToHome : true
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
                goBackToHome : true
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
                nextText: 24
            },            
            {
                text: 'Disability is a daily challenge, today i realised how it\'s hard to live with it and was glad to help disabled people through their sport journey',
                commentaries : ['Great initiative !', 'I love this initiative'],
                fol : [30000, 50000],
                folPS : 1000,
                bh : 5,
                nextText: 25
            },            
            {
                text: 'Hey guys, today I helped coaches with a special training for disabled people, it was ok',
                commentaries : ['Great initiative !', 'I love this initiative'],
                fol : [10000, 20000],
                folPS : 600,
                bh : 20,
                nextText: 26
            }
        ]
    },
];

startGame();