
import { ctx, hero, map } from "../index.js";



function Tree(img) {
    this.positer = {
        x: Math.floor(Math.random() * 1024),
        y: Math.floor(Math.random() * 570),
    };
    this.width = 100,
        this.height = 100,
        this.img = img;
    this.draw = function () {


        ctx.drawImage(this.img, this.positer.x, this.positer.y, this.width, this.height);

    }
    this.update = function () {
        this.draw();
        this.positer.x -= hero.velocity.x;
        this.positer.y -= hero.velocity.y;
        if (this.positer.x < 0 - map.width) {
            this.positer.x = Math.floor(Math.random() * 1024);
        } else if (this.positer.x > map.width) {
            this.positer.x = Math.floor(Math.random() * 1024);
        }
        if (this.positer.y < 0 - map.height) {
            this.positer.y = Math.floor(Math.random() * 570);
        } if (this.positer.y > map.height) {
            this.positer.y = Math.floor(Math.random() * 570);
        }
    }
}

export default Tree;