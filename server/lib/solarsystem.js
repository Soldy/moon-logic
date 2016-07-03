

var mLsolarsystem=function(){
    this.planets=[]
    this.turnEvents=function(){
        for(var planeti=0;planeti<this.planets.length;planeti++){
            this.planets[planeti].turnEvents();
        }
    }    
    //init
    this.planetNumber = Math.floor((Math.random() * 21) + 1); 
 
    for (var planeti=0;planeti<this.planetNumber;planeti++)
	this.planets.push(new mLplanet());
}