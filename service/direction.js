import { hero, map, cv, monsters, valueAttack } from "../index.js";

let isDirection = {
    right: false,
    left: false,
    up: false,
    down: false,
    attack: false,
}

function direction() {
    if (
        isDirection.right
        && isDirection.left == false
        && isDirection.up == false
        && isDirection.down == false
    ) {

        hero.velocity.x = 5;
        hero.framY = hero.imgOb.rightRun.framY;
        //va cham monster

        for (let i in monsters) {

            monsters[i].positer.x -= 5;

        }
    } else if (
        isDirection.left
        && isDirection.right == false
        && isDirection.up == false
        && isDirection.down == false
    ) {
        hero.velocity.x = -5;
        for (let i in monsters) {

            monsters[i].positer.x += 5;
        }

    } else if (
        isDirection.up
        && isDirection.right == false
        && isDirection.left == false
        && isDirection.down == false
    ) {
        hero.velocity.y = -5;
        hero.framY = hero.imgOb.upRun.framY;

        for (let i in monsters) {

            monsters[i].positer.y += 5;
        }
    } else if (
        isDirection.down
        && isDirection.right == false
        && isDirection.left == false
        && isDirection.up == false
    ) {
        hero.velocity.y = 5;
        hero.framY = hero.imgOb.downRun.framY;

        for (let i in monsters) {

            monsters[i].positer.y -= 5;
        }


    } else if (
        isDirection.right
        && isDirection.up
        && isDirection.left == false
        && isDirection.down == false
    ) {
        hero.velocity.x = 5;
        hero.velocity.y = -5;
        for (let i in monsters) {

            monsters[i].positer.x -= 5;
            monsters[i].positer.y += 5;
        }

    } else if (
        isDirection.right
        && isDirection.down
        && isDirection.left == false
        && isDirection.up == false
    ) {
        hero.velocity.x = 5;
        hero.velocity.y = 5;
        for (let i in monsters) {

            monsters[i].positer.x -= 5;
            monsters[i].positer.y -= 5;
        }

    }
    else if (
        isDirection.left
        && isDirection.up
        && isDirection.right == false
        && isDirection.down == false
    ) {
        hero.velocity.x = -5;
        hero.velocity.y = -5;
        for (let i in monsters) {

            monsters[i].positer.x += 5;
            monsters[i].positer.y += 5;
        }
    }
    else if (
        isDirection.left
        && isDirection.down
        && isDirection.right == false
        && isDirection.up == false
    ) {
        hero.velocity.x = -5;
        hero.velocity.y = 5;
        for (let i in monsters) {

            monsters[i].positer.x += 5;
            monsters[i].positer.y -= 5;
        }
    }
    else {
        hero.velocity.x = 0;
        hero.velocity.y = 0;

    }


    if (hero.positer.x < 0) {
        hero.positer.x = 0;
    }
    else if (hero.positer.x > cv.width - hero.width) {

        hero.positer.x = cv.width - hero.width;
    }
    if (hero.positer.y < 0) {
        hero.positer.y = 0;
    } else if (hero.positer.y > cv.height - hero.height) {
        hero.positer.y = cv.height - hero.height;
    }

    for (let i in monsters) {
        if (hero.attackBox.positer.x + hero.attackBox.width >= monsters[i].positer.x
            && hero.attackBox.positer.x <= monsters[i].positer.x + monsters[i].width
            && hero.attackBox.positer.y + hero.attackBox.height >= monsters[i].positer.y
            && hero.attackBox.positer.y <= monsters[i].positer.y + monsters[i].height
            && hero.isAttack
            && valueAttack == 1
        ) {
            monsters[i].isDmgHero();
            hero.isDmgMonster(monsters[i],i);
        }
    }

}

export { direction, isDirection };