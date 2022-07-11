class Game{
    constructor(){
        this.b1 = createButton("1.Niharo")
        this.b2 = createButton("2.Nohari")
        this.b3 = createButton("3.Novara")
        this.b4 = createButton("4.Nohara")
        this.score = 0;
        this.displayScore = createElement("h2")

        this.b5 = createButton("1.Jasmine")
        this.b6 = createButton("2.Rose")
        this.b7 = createButton("3.Sunflower")
        this.b8 = createButton("4.Lotus")

        this.b9 = createButton("1.Shinchan's neighbour")
        this.b10 = createButton("2.Shinchan's Bestfriend")
        this.b11= createButton("3.Shinchan's mother")
        this.b12= createButton("4.Shinchan's sister")

        this.b13 = createButton("1.Nene sakaurda")
        this.b14 = createButton("2.ichan")
        this.b15 = createButton("3.Misae")
        this.b16 = createButton("4.Neneko Nohara")

        this.Img1 = createImg("images/image for Q1.jpg")
        this.Img2 = createImg("images/image for Q2.jpg")
        this.Img3 = createImg("images/image for Q3.jpg")
        this.Img4 = createImg("images/image for Q4.jpg")


        this.question1 = createElement('h1');
        this.next1 = createButton('Next')
        this.question2 = createElement('h1');
        this.next2 = createButton('Next');
        this.question3 = createElement('h1');
        this.next3 = createButton('Next');
        this.question4 = createElement('h1');
        this.next4 = createButton('Next');
    }
    getState() { 
        var gameStateRef = database.ref("gameState"); 
        gameStateRef.on("value", function(data) { gameState = data.val(); }); 
    } 

    update(state) { 
        database.ref("/").update({ gameState: state }); 
    }

    hideQ1(){
        this.question1.hide();
        this.b1.hide();
        this.b2.hide();
        this.b3.hide();
        this.b4.hide();
        this.Img1.hide();
        this.next1.hide();
        
    }
    hideQ2(){
        this.question2.hide();
        this.b5.hide();
        this.b6.hide();
        this.b7.hide();
        this.b8.hide();
        this.Img2.hide();
        this.next2.hide();
    }
   
    hideQ3(){
        this.question3.hide();
        this.b9.hide();
        this.b10.hide();
        this.b11.hide();
        this.b12.hide();
        this.Img3.hide();
        this.next3.hide();
    }

    hideQ4(){
        this.question4.hide();
        this.b13.hide();
        this.b14.hide();
        this.b15.hide();
        this.b16.hide();
        this.Img4.hide();
        this.next4.hide();
    }

    start(){
        form = new Form();
        form.display();
    }

    play(){
        form.hide();
        console.log("gameStatePlay");
        this.displayScore.html(`score ${this.score}`)
        this.displayScore.position(650,20)
        this.question1.html('1.What is the surname of Shinchan?');
        this.question1.position(400,80);
        
        

        
        this.Img1.position(0,80);
        this.Img1.size(300,400);
        
        this.b1.position(400,160);
        this.b1.class("customButton");
        this.b2.position(400,250);
        this.b2.class("customButton");
        this.b3.position(400,330);
        this.b3.class("customButton");
        this.b4.position(400,410);
        this.b4.class("customButton");
        
        this.b4.mousePressed(()=>{
        this.score = this.score+1
        console.log("hi")
        })

        this.next1.position(1000,500);
        this.next1.class("nextButton");
        this.next1.mousePressed(()=>{
        this.hideQ1()

         this.question2.html('2.Shinchan is in which school group?');
         this.question2.position(400,80);
         this.Img2.position(0,100);
         this.Img2.size(300,400);
         this.b5.position(400,160);
        this.b5.class("customButton");
        this.b6.position(400,240);
        this.b6.class("customButton");
        this.b7.position(400,330);
        this.b7.class("customButton");
        this.b8.position(400,410);
        this.b8.class("customButton");
        this.next2.position(1000,500);
        this.next2.class("nextButton");

        })
    this.next2.mousePressed(( )=>{
    this.hideQ2()
    this.question3.html('3.Who is Himawari?');
    this.question3.position(400,80);
    this.Img3.position(0,100);
    this.Img3.size(300,400);
    this.b9.position(400,160);
   this.b9.class("customButton");
   this.b10.position(400,240);
   this.b10.class("customButton");
   this.b11.position(400,330);
   this.b11.class("customButton");
   this.b12.position(400,410);
   this.b12.class("customButton");
   this.next3.position(1000,500);
   this.next3.class("nextButton");

    })

    
        
        
        
    this.next3.mousePressed(( )=>{
    this.hideQ3()
   
    this.question4.html('4.Who likes shinchan the most?');
    this.question4.position(400,80);
    this.Img4.position(0,100);
    this.Img4.size(300,400);
    this.b13.position(400,160);
   this.b13.class("customButton");
   this.b14.position(400,240);
   this.b14.class("customButton");
   this.b15.position(400,330);
   this.b15.class("customButton");
   this.b16.position(400,410);
   this.b16.class("customButton");
   this.next4.position(1000,500);
   this.next4.class("nextButton");

    })
    this.next4.mousePressed(( )=>{
        this.hideQ4()
    })        


    }
    end(){

    }
}