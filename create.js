const creatorBox = document.getElementById('creatorBox');
const confirmBox = document.getElementById('confirmBox');
const errorText = document.getElementById('errorText');

const nameBox = document.getElementById('nameBox');
const humanButton = document.getElementById('humanButton');
const elfButton = document.getElementById('elfButton');
const dwarfButton = document.getElementById('dwarfButton');
const constructButton = document.getElementById('constructButton');
const abjButton = document.getElementById('abjButton');
const divButton = document.getElementById('divButton');
const evoButton = document.getElementById('evoButton');
const traButton = document.getElementById('traButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

const myName = document.getElementById('myName');
const myRace = document.getElementById('myRace');
const mySchool = document.getElementById('mySchool');
const myWis = document.getElementById('myWis');
const myInt = document.getElementById('myInt');
const myCha = document.getElementById('myCha');
const myCon = document.getElementById('myCon');
const myEp = document.getElementById('myEp');
const myMp = document.getElementById('myMp');
const myAb = document.getElementById('myAb');
const myAc = document.getElementById('myAc');

let user = {
    name: "MyName", race: "MyRace", school: "MyBackground",
    wis: 1, int: 1, cha: 1, con: 1, ab: 0, ac: 50,
    level: 1, xp: 0,
    ep: {current: 8, max: 8}, mp: {current: 8, max: 8}
}

function SubmitCharacter() {
    if (nameBox.value.length == 0) {
        errorText.innerHTML = "*You must input a name."
    } else if (!humanButton.checked && !elfButton.checked && !dwarfButton.checked && !constructButton.checked) {
        errorText.innerHTML = "*You must select a race."
    } else if (!abjButton.checked && !divButton.checked && !evoButton.checked && !traButton.checked) {
        errorText.innerHTML = "*You must select a school."
    } else {
        CalculateStats();
        creatorBox.classList.add('hidden');
        confirmBox.classList.remove('hidden');
    }
}

function CalculateStats() {
    user.name = nameBox.value;

    if (humanButton.checked) {
        user.race = "Human";
        user.cha++;
    } else if (elfButton.checked) {
        user.race = "Elf";
        user.int++;
    } else if (dwarfButton.checked) {
        user.race = "Dwarf";
        user.wis++;
    } else if (constructButton.checked) {
        user.race = "Construct";
        user.con++;
    }
    
    if (abjButton.checked) {
        user.school = "Abjuration";
        user.wis++;
    } else if (divButton.checked) {
        user.school = "Divination";
        user.int++;
    } else if (evoButton.checked) {
        user.school = "Evocation";
        user.cha++;
    } else if (traButton.checked) {
        user.school = "Transmutation";
        user.con++;
    }

    user.ep.max += (user.con + user.level);
    user.ep.current = user.ep.max;
    user.mp.max += (user.int + user.level);
    user.mp.current = user.mp.max;
    user.ac += (user.wis + user.level);
    user.ab = (user.level + user.cha);
    
    myName.innerHTML = user.name;
    myRace.innerHTML = user.race;
    mySchool.innerHTML = user.school;
    myWis.innerHTML = user.wis;
    myInt.innerHTML = user.int;
    myCha.innerHTML = user.cha;
    myCon.innerHTML = user.con;
    myAc.innerHTML = user.ac;
    myAb.innerHTML = user.ab;
    myEp.innerHTML = user.ep.max;
    myMp.innerHTML = user.mp.max;
}

function ConfirmCharacter() {
    window.localStorage.setItem("playerObj", JSON.stringify(user));
    window.location.href = "game.html";
}