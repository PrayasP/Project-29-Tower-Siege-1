    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var blockWidth = (180-12)/5;
    var blW = blockWidth;

    function preload() {
        
    }

    function setup(){
        var canvas = createCanvas(1200,400);
        engine = Engine.create();
        world = engine.world;


        Ground1 = new Ground(497,350,180,12);

        //Stack One
           //Level one
           block1 = new Box(430,275+50,(180-12)/5,40);
           var b1pos = block1.body.position;
           block2 = new Box(b1pos.x+blW,275+50,(180-12)/5,40);
           block3 = new Box(b1pos.x+((2)*blW),275+50,(180-12)/5,40);
           block4 = new Box(b1pos.x+((3)*blW),275+50,(180-12)/5,40);
           block5 = new Box(b1pos.x+((4)*blW),275+50,(180-12)/5,40);
           //Level two
           block6 = new Box(430+((blW)/2),235+50,blW,40);
           var b6pos = block6.body.position;
           block7 = new Box(b6pos.x+blW,235+50,blW,40);
           block8 = new Box(b6pos.x+((2)*blW),235+50,blW,40);
           block9 = new Box(b6pos.x+((3)*blW),235+50,blW,40);   
           //Level three
           block10 = new Box(b6pos.x+((blW)/2),196+50,blW,40);
           var b10pos = block10.body.position;
           block11 = new Box(b10pos.x+blW,196+50,blW,40);
           block12 = new Box(b10pos.x+((2)*blW),196+50,blW,40);
           //Level four
           block13 = new Box(b10pos.x+((blW)/2),158+50,blW,40);
           var b13pos = block13.body.position;
           block14 = new Box(b13pos.x+blW,158+50,blW,40);
           //Level five OR Top
           block15 = new Box(b13pos.x+((blW)/2),158-40+50,blW,40);        
                
           polygon = new Polygon(100,300,30);

           StringObj = new String(polygon.body,{x:91,y:250});
    }

    function draw(){
        background(0);
        Engine.update(engine);

        Ground1.display();
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();

        polygon.display();

        StringObj.display();

        keyPressed();

    }

    function mouseDragged(){
        Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    }

    function mouseReleased(){
        StringObj.fly();
    }

    function keyPressed() {

        if(keyCode === 32) {
            Matter.Body.setPosition(polygon.body, {x:100, y:300})
            StringObj.attach(polygon.body);
      }
      
    }