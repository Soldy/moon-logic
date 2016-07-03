


var mLplanet = function (){    
    this.insideThings={
        buildings:[],
        satelits:[],
        minerals:{},
        plans:[],
        animals:[],
        microbe:[],
        radioactivity:0,
        mass:0,
        size:0,
        position:0,
        terraFormated:0,
    }
    this.turnEvent=function(){
        for (var buildingi = 0; buildingi< this.insideThings.buildings.length; buildingi++) {
            this.insideThings.buildings[buildingi].turnEvents();
        }
        for (var sateliti = 0; sateliti< this.insideThings.satelits.length; sateliti++) {
            this.insideThings.satelits[sateliti].turnEvents();
        }
        for (var plani = 0; plani< this.insideThings.plans.length; plani++) {
            this.insideThings.plans[plani].turnEvents();
        }
        for (var animali = 0; plani< this.insideThings.animals.length; animali++) {
            this.insideThings.animals[animali].turnEvents();
        }
    }
    this.init = function () {
        
    }
    this.reload = function (planet) {
        
    }
    this.save = function () {
        var out = {
            planets:[],
            insideThings:{
                minerals:this.insideThings.minerals,
                radioactivity:this.insideThings.radioactivity,
                mass:this.insideThings.mass,  
                size:this.insideThings.size,                  
                position:this.insideThings.position,
                terraFormated:this.insideThings.terraFormated, 
            }
        };
        for (var planeti = 0; planeti < this.insideThings.planetNumber; planeti++)
           out.planets.push(this.insideThings.planets[planeti].save());
        return out;        
    }
    this.inited=0;
}