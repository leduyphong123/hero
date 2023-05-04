import { cv, ctx, hero, monsters } from "../index.js";


// let defual = false;
function Monster(name,img,imgIndex,imgX,imgY) {
    this.name=name;
    this.positer = {
        x: Math.floor(Math.random() * 900),
        y: Math.floor(Math.random() * 500)
    }
    this.width = 70;
    this.height = 70;
    this.img = img;
    this.framX = 0;
    this.framY = 0;
    this.imgIndex = imgIndex;
    this.attackBox = {
        positer: {
            x: this.positer.x,
            y: this.positer.y
        },
        width: this.width,
        height: this.height
    }
    this.status = {
        hpDefault: 100,
        hpNew: 100,
        dmg: 1,
    };
    this.dmgHero = function (name,indexMonter) {
        if(this.status.hpNew>0 && this.name==name){
            this.status.hpNew -= hero.status.dmg;  
        }else{
            monsters.splice(indexMonter,1);
        }
        
    }
    this.draw = function () {
        if(this.status.hpNew>0){
            ctx.fillStyle="#D3D3D3";
            ctx.fillRect(this.positer.x,this.positer.y-10,this.status.hpDefault,10);
            ctx.fillStyle="blue ";
            ctx.fillRect(this.positer.x,this.positer.y-10,this.status.hpNew,10);
            ctx.drawImage(this.img, imgX * this.framX, imgY * this.framY, imgX, imgY, this.positer.x, this.positer.y, this.width, this.height);
        }
    }
    this.update = function () {
        this.framX++;
        if (this.framX > this.imgIndex - 1) {
            this.framX = 0;
        }
        this.draw();
        if (this.positer.x < 0 || this.positer.x > cv.width
            || this.positer.y < 0 || this.positer.y > cv.height) {
            this.positer.x = Math.floor(Math.random() * 900);
            this.positer.y = Math.floor(Math.random() * 500);
        }
        this.attackBox.positer.x = this.positer.x;
        this.attackBox.positer.y = this.positer.y;

    }
}

export default Monster;