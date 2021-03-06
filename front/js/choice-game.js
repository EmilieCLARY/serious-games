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

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
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
        text: 'Welcome ! It\'s now time to choose your type of job !',
        options: [
            {
                text: 'Athlete',
                nextText: 2
            },
            {
                text: 'Scientist',
                nextText: 3
            },
            {
                text: 'Gaming',
                nextText: 4
            },
            {
                text: 'Comedian',
                nextText: 5
            }
        ]
    },
    {
        id: 2,
        text: 'Now you can choose between multiple appearances :',
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