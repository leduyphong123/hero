import { cv, ctx, monsters, hero } from "../index.js";


function Hero(positer, img) {
    this.positer = positer;
    this.velocity = {
        x: 0,
        y: 0
    };
    this.width = 100;
    this.height = 200;
    this.img = img;
    this.framX = 0;
    this.framY = 0;
    this.imgIndex = 6;
    this.imgOb = {
        downIdle: { framX: 0, framY: 0, imgIndex: 6 },
        rightIdle: { framX: 0, framY: 1, imgIndex: 6 },
        upIdle: { framX: 0, framY: 2, imgIndex: 6 },
        downRun: { framX: 0, framY: 3, imgIndex: 6 },
        rightRun: { framX: 0, framY: 4, imgIndex: 6 },
        upRun: { framX: 0, framY: 5, imgIndex: 6 },
        attackDown: { framX: 0, framY: 6, imgIndex: 4 },
        attackRight: { framX: 0, framY: 7, imgIndex: 4 },
        attackUp: { framX: 0, framY: 8, imgIndex: 4 },
        die: { framX: 0, framY: 9, imgIndex: 3 },

    };
    this.attackBox = {
        positer: {
            x: this.positer.x,
            y: this.positer.y
        },
        velocity: {
            x: 0,
            y: 0
        },
        width: this.width,
        height: this.height / 2
    }
    this.isAttack = false;
    this.status = {
        hpDefault: 100,
        hpNew: 100,
        dmg: 10,
    };
    this.isDmgMonster = function (indexMonter) {

        

        let stop = setInterval(() => {
            if (indexMonter.status.hpNew > 0 && hero.status.hpNew>0) {
                this.status.hpNew -= indexMonter.status.dmg;
            } else{
                clearInterval(stop);
            }
        }, 1500);
        
    }
    this.draw = function () {
        if(this.status.hpNew>0){
            ctx.fillStyle = "#D3D3D3";
            ctx.fillRect(this.positer.x, this.positer.y + 60, this.status.hpDefault, 10);
            ctx.fillStyle = "red";
            ctx.fillRect(this.positer.x, this.positer.y + 60, this.status.hpNew, 10);
            ctx.drawImage(this.img, 48 * this.framX, 48 * this.framY, 48, 48, this.positer.x, this.positer.y, this.width, this.height);
            if (this.isAttack) {
                ctx.fillStyle = "rgba(0,0,0,0)";
                ctx.fillRect(this.attackBox.positer.x, this.attackBox.positer.y, this.attackBox.width, this.attackBox.height);
            }
        }
        // else{
        //     this.imgIndex=this.imgOb.die.imgIndex;
        //     this.framY=this.imgOb.die.framY
        //     ctx.drawImage(this.img, 48 * this.framX, 48 * this.framY, 48, 48, this.positer.x, this.positer.y, this.width, this.height);
        // }

    }

    this.update = function () {
        this.framX++;
        if (this.framX > this.imgIndex - 1) {
            this.framX = 0;
        }
        this.draw();

        this.positer.x += this.velocity.x;
        this.positer.y += this.velocity.y;
        this.attackBox.positer.x = this.positer.x + this.attackBox.velocity.x;
        this.attackBox.positer.y = this.positer.y + this.height / 2 + this.attackBox.velocity.y;


    }
}

export default Hero;