module.exports = {
  content: ["./front/html/home.html",
    "./front/html/launch.html",
    "./front/html/free-play.html",
    "./front/html/accueil.html",
    "./front/html/tree-planter.html",
    "./front/html/choice-game/job-appearance.html",
    "./front/html/choice-game/form.html",
    "./front/html/choice-game/athlete.html", 
    "./front/html/turtle-saver.html", 
    "./front/html/choice-game/comedian.html",
    "./front/html/cartes.html",
    "./front/js/choice-game/*.js"
  ],
  theme: {
   
  //extends{
      maxWidth:{
        exempleCG:'80%'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        fondmain:'#f5e0c4',
        lightfond: '#FCF5ED',
        darkfond: '#c4b39c',
        rougeContour : '#911C1a',
        rougebouton: '#660503',
        white: '#FFFFFFFF',
        fonce: '#303030',
        gris: '#797676',
        vertContour : '#175732',
        grisfonce: '#333',
        grisclair: '#9a9191',
        noir: '#00000000',
        noirr: '#00000001',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '12': '12px',
        'contourRouge': '23px',
      },
      fontFamily: {
        pixelise: ["Pixelise", "cursive"],
      },
      
      /*backgroundImage:{
        'BigHeadpng':"url('/front/img/mainPage/BigHead.png')",
        'Mailpng':"url('/front/img/mainPage/Mail.png')",
        'treepng':"url('/front/img/mainPage/tree.png')",
        'homepng':"url('/front/img/mainPage/home.png')",
      }*/
      //spacing : {
        //enorme : "1500px"
      //}
    //},
  },
  plugins: [],
}
