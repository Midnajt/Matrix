const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol {
    constructor(x,y,fontSize,canvasHeight){
        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ♔♕♖♗♘♙CHESS♚♛♜♝♞♟☀☁❆❅❄♪M♫';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }

    draw(context){
        this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
        context.fillStyle= '#0aff0a';
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    }
}

class Effect {
    constructor(canvasWidth,canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
        // console.log(this.columns)
    }

    #initialize(){
        // console.log(this.columns)
        console.log(this.columns.length)
        // console.log('1')
        for(let i = 0; i < this.columns; i++){
            console.log('ok')
            this.symbols[i] = new Symbol();
        }
        // console.log('2')
    }
}

new Effect(canvas.width,canvas.height);

function animate(){

}