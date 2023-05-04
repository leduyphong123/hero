import { cv, ctx,hero,monsters, } from "../index.js";



function Map(positer,width,height,img) {
    this.positer =positer;
    this.velocity = {
        x: 0,
        y: 0
    };
    this.width = width,
    this.height = height,
    this.img=img;
    this.draw = function () {
        
        ctx.drawImage(this.img,this.positer.x-this.width,this.positer.y,this.width,this.height);
        ctx.drawImage(this.img,this.positer.x,this.positer.y-this.height,this.width,this.height);
        ctx.drawImage(this.img,this.positer.x-this.width,this.positer.y-this.height,this.width,this.height);
        ctx.drawImage(this.img,this.positer.x-this.width,this.positer.y+this.height,this.width,this.height);
        ctx.drawImage(this.img,this.positer.x+this.width,this.positer.y-this.height,this.width,this.height);

        ctx.drawImage(this.img,this.positer.x,this.positer.y,this.width,this.height);
        ctx.drawImage(this.img,this.positer.x+this.width,this.positer.y,this.width,this.height);
        ctx.drawImage(this.img,this.positer.x,this.positer.y+this.height,this.width,this.height);
        ctx.drawImage(this.img,this.positer.x+this.width,this.positer.y+this.height,this.width,this.height);
        }
    this.update = function () {
        this.draw();
        this.positer.x-=hero.velocity.x;
        this.positer.y-=hero.velocity.y;
        if(this.positer.x< 0-this.width){
            this.positer.x=0;
        }else if(this.positer.x>this.width){
            this.positer.x=0
        }
        if(this.positer.y< 0-this.height){
            this.positer.y=0;
        }if(this.positer.y> this.height){
            this.positer.y=0;
        }
    }
}

export default Map;