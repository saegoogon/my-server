let username = localStorage.getItem("user");
document.getElementById("user").innerText = username;

let level = 0;
let coins = 200;

update();

function upgrade(){

if(coins < 10){
msg("Not enough coins");
return;
}

coins -= 10;

let success = Math.max(20, 90 - level*5);
let destroy = level >= 10 ? 0.1 : 0;

let r = Math.random();

if(r < success/100){
level++;
msg("SUCCESS");
}

else if(r < success/100 + destroy){
level = 0;
msg("DESTROYED");
}

else{
msg("FAIL");
}

save();
update();
}

function update(){
document.getElementById("level").innerText = level;
document.getElementById("coins").innerText = coins;
}

function msg(t){
document.getElementById("result").innerText = t;
}

function save(){
fetch("/save",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
username:username,
level:level,
coins:coins
})
});
}