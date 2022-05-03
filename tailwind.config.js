module.exports = {
  content: ["./front/html/home.html","./front/html/free-play.html" ],
  theme: {
   
  //extends{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        fondmain:'#f5e0c4',
        rougeContour : '#911C1a',
        rougebouton: '#660503',
        white: '#FFFFFFFF',
        fonce: '#303030',
        gris: '#797676'
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
      backgroundImage:{
        'BigHeadpng':"url('/front/img/mainPage/BigHead.png')",
        'Mailpng':"url('/front/img/mainPage/Mail.png')",
        'treepng':"url('/front/img/mainPage/tree.png')",
        'homepng':"url('/front/img/mainPage/home.png')",
        

      }
      //spacing : {
        //enorme : "1500px"
      //}
    //},
  },
  plugins: [],
}
