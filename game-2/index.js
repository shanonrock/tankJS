const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
var height = canvas.height
var width = canvas.width
ctx.font = '30px Arial'

// CREATE PLAYERS
var player1 = { // PLAYER 1
    id: '1',
    x: 50,
    y: 225,
    size: 50,
    color: "red",
    mSpeed: 5,
    aSpeed: 1,
    up1: false,
    down1: false,
    left1: false,
    right1: false,
    hp1: 10,
}

var player2 = { // PLAYER 2
    id: '2',
    x: 900,
    y: 225,
    size: 50,
    color: "red",
    mSpeed: 5,
    aSpeed: 1,
    up2: false,
    down2: false,
    left2: false,
    right2: false,
    shooting2: false,
    shoot2: false,
    hp2: 10,
}

function rect(xPos,yPos,w,h){ // DRAWING
    ctx.fillRect(xPos,yPos,w,h)
}

// PLAYER CONTROLS

document.body.addEventListener('keydown', keyDown)
document.body.addEventListener('keyup', keyUp)

function input(){
    if(player1.up1){ // PLAYER 1
        player1.y = player1.y - player1.mSpeed
    } 
    if(player1.down1){
        player1.y = player1.y + player1.mSpeed
    } 
    if(player1.left1){
        player1.x = player1.x - player1.mSpeed
    } 
    if(player1.right1){
        player1.x = player1.x + player1.mSpeed
    } 

    if(player2.up2){ // PLAYER 2
        player2.y = player2.y - player2.mSpeed
    } 
    if(player2.down2){
        player2.y = player2.y + player2.mSpeed
    } 
    if(player2.left2){
        player2.x = player2.x - player2.mSpeed
    } 
    if(player2.right2){
        player2.x = player2.x + player2.mSpeed
    } 
}
function keyDown(event){
    if(event.code == 'KeyW'){ // PLAYER 1
        player1.up1 = true;
    }
    if(event.code == 'KeyA'){
        player1.left1 = true;
    }
    if(event.code == 'KeyS'){
        player1.down1 = true;
    }
    if(event.code == 'KeyD'){
        player1.right1 = true;
    }
    if(event.code == 'KeyJ'){
        console.log("shoot!")
        shooting = true
    }

    if(event.code == 'ArrowUp'){ // PLAYER 2
        player2.up2 = true;
    }
    if(event.code == 'ArrowLeft'){
        player2.left2 = true;
    }
    if(event.code == 'ArrowDown'){
        player2.down2 = true;
    }
    if(event.code == 'ArrowRight'){
        player2.right2 = true;
    }
    if(event.code == 'Numpad4'){
        console.log("asdasd")
        shooting2 = true
    }
}
function keyUp(event){
    if(event.code == 'KeyW'){ // PLAYER 1
        player1.up1 = false;
    }
    if(event.code == 'KeyA'){
        player1.left1 = false;
    }
    if(event.code == 'KeyS'){
        player1.down1 = false;
    }
    if(event.code == 'KeyD'){
        player1.right1 = false;
    }
    if(event.code == 'KeyJ'){
        console.log("shoot!")
    }

    if(event.code == 'ArrowUp'){ // PLAYER 2
        player2.up2 = false;
    }
    if(event.code == 'ArrowLeft'){
        player2.left2 = false;
    }
    if(event.code == 'ArrowDown'){
        player2.down2 = false;
    }
    if(event.code == 'ArrowRight'){
        player2.right2 = false;
    }
    if(event.code == 'Numpad4'){
        console.log("asdasd")
    }
}

// BULLETS PLAYER 1
var bulletXpos = 0
var bulletYpos = 0
const bulletWidth = 15
const bulletHeight = 15
var bulletSpeed = 20
var shooting = false
var shot = false
function bulletShoot(){
    if(shooting && shot == false){ // DIIN MUGAWAS ANG BULLET
        bulletXpos = player1.x + 60 - bulletWidth / 2
        bulletYpos = player1.y + 16
        shot = true
    }
    if(shooting && shot){ // KAPILAW 4/22/24 12:13AM
        bulletXpos += bulletSpeed // AIM SA BULLET GAMIT X AND Y 
    }
    if(bulletXpos > 1000){
        shot = false
        shooting = false
    }
    // NEXT LINE IS PA DETERMINE IF NA HIT BA SA OTHER PLAYERS
    if(bulletXpos + bulletWidth > player2.x && bulletXpos < player2.x + player2.size && 
        bulletYpos + bulletHeight > player2.y && bulletYpos < player2.y + player2.size){
        shot = false
        shooting = false
        player2.hp2 = player2.hp2 - 1
        console.log(player2.hp2)
    }
    if(shot == false && shooting == false){ // ANG RESERVED NA BALA HAHAHAHHAHAHAHAHAH 
        bulletXpos = -99
        bulletYpos = 0
    }
}

// BULLETS PLAYER 2
var bulletXpos2 = 5
var bulletYpos2 = 5
const bulletWidth2 = 15
const bulletHeight2 = 15
var bulletSpeed2 = 20
var shooting2 = false
var shot2 = false
function bulletShoot2(){
    if(shooting2 && shot2 == false){ // DIIN MUGAWAS ANG BULLET
        bulletXpos2 = player2.x - 20
        bulletYpos2 = player2.y + 16
        shot2 = true
    }
    if(shooting2 && shot2){ // KAPILAW 4/22/24 12:13AM
        bulletXpos2 -= bulletSpeed2 // AIM SA BULLET GAMIT X AND Y 
    }
    if(bulletXpos2 < 0){
        shot2 = false
        shooting2 = false  
    }
    if(bulletXpos2 + bulletWidth2 > player1.x && bulletXpos2 < player1.x + player1.size && 
        bulletYpos2 + bulletHeight2 > player1.y && bulletYpos2 < player1.y + player1.size){
        shot2 = false
        shooting2 = false    
        player1.hp1 = player1.hp1 - 1
        console.log(player1.hp1)
    }
    if(shot2 == false && shooting2 == false){ // ANG RESERVED NA BALA HAHAHAHHAHAHAHAHAH 
        bulletXpos2 = -99
        bulletYpos2 = 0
    }
}

function boundary(){
    if(player1.y < 0){ // PLAYER 1
        player1.y = 2
    }
    if(player1.y > height - player1.size){
        player1.y = height - player1.size - 2
    }
    if(player1.x < 0){
        player1.x = 2
    }
    if(player1.x > width / 2 - 75){
        player1.x = width / 2 - 75
    }

    if(player2.y < 0){ // PLAYER 2
        player2.y = 2
    }
    if(player2.y > height - player2.size){
        player2.y = height - player2.size - 2
    }
    if(player2.x < 525){
        player2.x = 525
    }
    if(player2.x > width - player2.size){
        player2.x = width - player2.size - 2
    }
}

function gameDeath(){ // PLAYER HP
    if(player1.hp1 <= 0){
        window.location = "winner2.html"
    }
    if(player2.hp2 <= 0){
        window.location = "winner1.html"
    }
    ctx.fillText("HP " + player1.hp1, 10,40)
    ctx.fillText("HP " + player2.hp2, 670,490)
}

var box = {
        x: 485,
        y: 26,
        size: 30,
        spdX: 1 + Math.random() * 5,
        spdY: 1 + Math.random() * 5,
        name: 'S'
    }
var box2 = {
        x: 485,
        y: 350,
        size: 30,
        spdX: -1 - Math.random() * 5,
        spdY: -1 - Math.random() * 5,
        name: 'S'
    }
var box3 = {
        x: 485,
        y: 150,
        size: 30,
        spdX: 1 + Math.random() * 5,
        spdY: 1 - Math.random() * 5,
        name: 'S'
    }
var box4 = {
        x: 500,
        y: 444,
        size: 30,
        spdX: 1 - Math.random() * 5,
        spdY: 1 + Math.random() * 5,
        name: 'S'
    }
var box5 = {
        x: 485,
        y: 333,
        size: 30,
        spdX: 1 + Math.random() * 5,
        spdY: 1 + Math.random() * 5,
        name: 'S'
    }
var box6 = {
        x: 485,
        y: 222,
        size: 30,
        spdX: 1 - Math.random() * 5,
        spdY: 1 - Math.random() * 5,
        name: 'S'
    }
function projectiles(sq){
    sq.x += sq.spdX
    sq.y += sq.spdY
    ctx.fillRect(sq.x,sq.y,sq.size,sq.size)

    if(sq.y < 0){ 
        sq.spdY = -sq.spdY 
    }
    if(sq.y > height - sq.size){
        sq.spdY = -sq.spdY
    }
    if(sq.x < 0){
        sq.spdX = -sq.spdX
    }
    if(sq.x > width - sq.size){
        sq.spdX = -sq.spdX
    }

    // PLAYER 1 COLLISION
    if(
        player1.x + player1.size >= box.x &&
        player1.x <= box.x + box.size &&
        player1.y + player1.size >= box.y &&
        player1.y <= box.y + box.size 
        ||
        player1.x + player1.size >= box2.x &&
        player1.x <= box2.x + box2.size &&
        player1.y + player1.size >= box2.y &&
        player1.y <= box2.y + box2.size
        ||
        player1.x + player1.size >= box3.x &&
        player1.x <= box3.x + box3.size &&
        player1.y + player1.size >= box3.y &&
        player1.y <= box3.y + box3.size
        ||
        player1.x + player1.size >= box4.x &&
        player1.x <= box4.x + box4.size &&
        player1.y + player1.size >= box4.y &&
        player1.y <= box4.y + box4.size
        ||
        player1.x + player1.size >= box5.x &&
        player1.x <= box5.x + box5.size &&
        player1.y + player1.size >= box5.y &&
        player1.y <= box5.y + box5.size
        ||
        player1.x + player1.size >= box6.x &&
        player1.x <= box6.x + box6.size &&
        player1.y + player1.size >= box6.y &&
        player1.y <= box6.y + box6.size
    ){
        console.log("collision" + box.x)
        player1.hp1 = player1.hp1 - .02
    }
    // PLAYER 2 COLLISION
    if(
        player2.x + player2.size >= box.x &&
        player2.x <= box.x + box.size &&
        player2.y + player2.size >= box.y &&
        player2.y <= box.y + box.size 
        ||
        player2.x + player2.size >= box2.x &&
        player2.x <= box2.x + box2.size &&
        player2.y + player2.size >= box2.y &&
        player2.y <= box2.y + box2.size
        ||
        player2.x + player2.size >= box3.x &&
        player2.x <= box3.x + box3.size &&
        player2.y + player2.size >= box3.y &&
        player2.y <= box3.y + box3.size
        ||
        player2.x + player2.size >= box4.x &&
        player2.x <= box4.x + box4.size &&
        player2.y + player2.size >= box4.y &&
        player2.y <= box4.y + box4.size
        ||
        player2.x + player2.size >= box5.x &&
        player2.x <= box5.x + box5.size &&
        player2.y + player2.size >= box5.y &&
        player2.y <= box5.y + box5.size
        ||
        player2.x + player2.size >= box6.x &&
        player2.x <= box6.x + box6.size &&
        player2.y + player2.size >= box6.y &&
        player2.y <= box6.y + box6.size
    ){
        console.log("collision2" + box.x)
        player2.hp2 = player2.hp2 - .02
    }

    // if(player1.x + player1.size > box2.x ||          // PERAGABA SINI
    //     player1.x + player1.size > box3.x ||
    //     player1.x + player1.size > box4.x ||
    //     player1.x + player1.size > box5.x ||
    //     player1.x + player1.size > box6.x &&
    //     player1.x <= box.x + box.size ||
    //     player1.x <= box2.x + box2.size ||
    //     player1.x <= box3.x + box3.size ||
    //     player1.x <= box4.x + box4.size ||
    //     player1.x <= box5.x + box5.size ||
    //     player1.x <= box6.x + box6.size &&
    //     player1.y + player1.size >= box.y ||
    //     player1.y + player1.size >= box2.y ||
    //     player1.y + player1.size >= box3.y ||
    //     player1.y + player1.size >= box4.y ||
    //     player1.y + player1.size >= box5.y ||
    //     player1.y + player1.size >= box6.y &&
    //     player1.y <= box.y + box.size ||
    //     player1.y <= box2.y + box2.size ||
    //     player1.y <= box3.y + box3.size ||
    //     player1.y <= box4.y + box4.size ||
    //     player1.y <= box5.y + box5.size ||
    //     player1.y <= box6.y + box6.size

    // ){ayer1.x + player1.size > box.x ||
    //     pl
    //     console.log("collision!")
    // }

}

frameCount = 0
// game loop
function loop(){
    ctx.clearRect(0,0,width,height)
    // player1
    ctx.save()
    ctx.fillStyle = "red"
    rect(player1.x,player1.y,player1.size,player1.size)
    ctx.restore()
    // player2
    ctx.save()
    ctx.fillStyle = "blue"
    rect(player2.x,player2.y,player2.size,player2.size)
    ctx.restore()

    projectiles(box) // goods
    projectiles(box2) // goods
    projectiles(box3) // goods
    projectiles(box4) // goods
    projectiles(box5) // goods
    projectiles(box6) // sakspan ang sayop! pwede na matug

    bulletShoot()
    bulletShoot2()
    boundary()
    ctx.fillRect(bulletXpos,bulletYpos,bulletWidth,bulletHeight)
    ctx.fillRect(bulletXpos2,bulletYpos2,bulletWidth2,bulletHeight2)
    input()
    gameDeath()
}

setInterval(loop, 20)
loop()