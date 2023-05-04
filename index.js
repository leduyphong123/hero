import Hero from "./entity/hero.js";
import Monster from "./entity/monster.js";
import Map from "./entity/map.js";
import Tree from "./entity/tree.js";
import { direction, isDirection } from "./service/direction.js";

let cv = document.getElementById("canvas");
let ctx = cv.getContext("2d");
let monsters = [];
let trees = [];
cv.width = 1024;
cv.height = 570;
//audio
let audioGame = new Audio("audio/music.mp3");
let audioHeroAttack = new Audio("audio/hero/sfx_Attack_1.wav");
let audioHeroRun = new Audio("audio/hero/sfx_Fall.wav");

//img monster
let monster = new Image();
monster.src = "./img/monster/BatAlbino_Sheet.png";
let monsterBeatle = new Image();
monsterBeatle.src = "./img/monster/Beatle.png";
let monsterSnake = new Image();
monsterSnake.src = "./img/monster/Snake.png";
//img 
let backgorund = new Image();
backgorund.src = "./img/map/background.png";
let tree = new Image();
tree.src = "./img/map/tree.PNG";
let heroImg = new Image();
heroImg.src = "./img/hero/player.png";
let hero = new Hero({ x: cv.width / 2, y: cv.height / 2 }, heroImg);

let map = new Map({ x: 0, y: 0 }, backgorund.width, backgorund.height, backgorund);
//key
let keyDirection;
let valueAttack = 0;
let stopGame;
function startGame() {
    stopGame = window.requestAnimationFrame(startGame);
    ctx.clearRect(0, 0, cv.width, cv.height);
    map.update();
    hero.update();
    addMonsters();
    addTrees();
    direction();
    valueAttack = 0;
    if (hero.status.hpNew <= 0) {
        window.cancelAnimationFrame(stopGame);
        alert("game over");
        location.reload();
    }
}
//play game
let start = document.getElementById("play");
start.addEventListener("click", play);
let hidden = document.getElementById("status");
cv.style.display = "none";

function play() {
    if (hero.status.hpNew > 0) {
        hidden.style.display = "none";
        cv.style.display = "flex";
        audioGame.play();
        startGame();
    }
}
let name = 1;

function addMonsters() {
    if (monsters.length < 9) {
        monsters.push(new Monster(name, monster, 4, 32, 32));
        monsters.push(new Monster(name + 1, monsterBeatle, 4, 16, 16));
        monsters.push(new Monster(name + 2, monsterSnake, 4, 16, 16));
        name += 3
    }
    for (let i in monsters) {
        monsters[i].update();

    }
}

function addTrees() {
    if (trees.length < 5) {
        trees.push(new Tree(tree));
    }

    for (let i in trees) {
        trees[i].update();

    }
}

//key value
window.addEventListener("keydown", (evt) => {
    switch (evt.code) {
        case "KeyD":
            isDirection.right = true;
            keyDirection = "right";
            hero.attackBox.velocity.x = 30;
            audioHeroRun.play();
            break;
        case "KeyA":
            isDirection.left = true;
            keyDirection = "left";
            hero.attackBox.velocity.x = -30;
            audioHeroRun.play();

            break;
        case "KeyW":
            isDirection.up = true;
            keyDirection = "up";
            hero.attackBox.velocity.y = -30;
            audioHeroRun.play();

            break;
        case "KeyS":
            isDirection.down = true;
            keyDirection = "down";
            hero.attackBox.velocity.y = +30;
            audioHeroRun.play();
            break;
        case "Space":
            isDirection.attack = true;
            if (keyDirection === "right" && isDirection.attack) {
                hero.isAttack = true;
                valueAttack = 1;
                hero.framY = hero.imgOb.attackRight.framY;
                hero.imgIndex = hero.imgOb.attackRight.imgIndex;

            } else if (keyDirection === "left" && isDirection.attack) {
                // hero.framY=hero.imgOb.attackRight;
            } else if (keyDirection === "up" && isDirection.attack) {
                hero.isAttack = true;
                valueAttack = 1;
                hero.framY = hero.imgOb.attackUp.framY;
                hero.imgIndex = hero.imgOb.attackUp.imgIndex;

            } else if (keyDirection === "down" && isDirection.attack) {
                hero.isAttack = true;
                valueAttack = 1;
                hero.framY = hero.imgOb.attackDown.framY;
                hero.imgIndex = hero.imgOb.attackDown.imgIndex;

            }
        audioHeroAttack.play();

            break;
        default:
            break;
    }
})
window.addEventListener("keyup", (evt) => {
    switch (evt.code) {
        case "KeyD":
            isDirection.right = false;
            hero.framY = hero.imgOb.rightIdle.framY;
            hero.imgIndex = hero.imgOb.rightIdle.imgIndex;

            break;
        case "KeyA":
            isDirection.left = false;

            break;
        case "KeyW":
            isDirection.up = false;
            hero.framY = hero.imgOb.upIdle.framY;
            hero.imgIndex = hero.imgOb.upIdle.imgIndex;

            break;
        case "KeyS":
            isDirection.down = false;
            hero.framY = hero.imgOb.downIdle.framY;
            hero.imgIndex = hero.imgOb.downIdle.imgIndex;

            break;
        case "Space":
            isDirection.attack = false;
            if (keyDirection === "right") {
                hero.isAttack = false;
                hero.framY = hero.imgOb.rightIdle.framY;
                hero.imgIndex = hero.imgOb.rightIdle.imgIndex;

            } else if (keyDirection === "left") {
                // hero.framY=hero.imgOb.;
            } else if (keyDirection === "up") {
                hero.isAttack = false;

                hero.framY = hero.imgOb.upIdle.framY;
                hero.imgIndex = hero.imgOb.upIdle.imgIndex;

            } else if (keyDirection === "down") {
                hero.isAttack = false;
                hero.framY = hero.imgOb.downIdle.framY;
                hero.imgIndex = hero.imgOb.downIdle.imgIndex;

            }
            hero.attackBox.velocity.x = 0;
            hero.attackBox.velocity.y = 0;
            break;
        default:
            break;
    }
})
export { cv, ctx, hero, map, monsters, valueAttack }
