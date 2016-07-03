

var mLsolarsystem = function () {
    this.insideThings={
        position : 0,
        planets : [],
        star : "",
    }
    this.turnEvents = function () {
        for (var planeti = 0; planeti < this.insideThings.planets.length; planeti++) {
            this.insideThings.planets[planeti].turnEvents();
        }
    }
    //init
    this.init = function (position) {
        if (this.inited === 1) return false;
        this.insideThings.position = position;
        var planetPosition=10;
        this.planetNumber = Math.floor((Math.random() * 21) + 1);
        for (var planeti = 0; planeti < this.insideThings.planetNumber; planeti++){
            this.insideThings.planets.push(new mLplanet());
            planetPosition+=Math.floor((Math.random() * 100) + 1);
            this.insideThings.planets[planeti].init(planetPosition);
            
        }
        this.inited=1;
    }
    this.reload = function (solarsystem) {
        if (this.inited === 1) return false;        
        if (typeof solarsystem.insideThings !== "undefined"){
            if (typeof solarsystem.insideThings.position !== "undefined")
                this.insideThings.position = solarsystem.insideThings.position;
        }
        if (typeof solarsystem.planets !== "undefined")
        for (var planeti = 0; planeti < solarsystem.planets.length; planeti++){
            this.insideThings.planets.push(new mLplanet);
            this.insideThings.planets[planeti].reload(solarsystem.planets[planeti]);
        }
        if (typeof solarsystem.star !== "undefined"){
            this.insideThings.star=new mLstar();
            this.insideThings.star.reload(solarsystem.star);
        }    
    }
    this.save = function () {
        var out = {
            planets:[],
            insideThings:{
                position:this.insideThings.position,
            }
        };
        for (var planeti = 0; planeti < this.insideThings.planetNumber; planeti++)
           out.planets.push(this.insideThings.planets[planeti].save());
        return out;
    }
    this.inited=0;
}