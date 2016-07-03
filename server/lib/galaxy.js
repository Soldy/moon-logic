

var mLgalaxy=function(){
    this.solarsystems=[]
    this.turnEvents=function(){
        for(var solarsystemi=0;solarsystemi<this.solarsystems.length;solarsystemi++){
            this.planets[planeti].turnEvents();
        }
    }
    //init
    this.solarsystemNumber = Math.floor((Math.random() * 2000) + 1); 
    for (var solarsystemi=0;solarsystemi<this.solarsystemNumber;solarsystemi++)
	this.planets.push(new mLplanet());
}