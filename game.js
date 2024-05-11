class Enemy {
    constructor (name, school, level, ep, mp, wis, int, cha, con, ab, ac) {
        this.name = name;
        this.school = school;
        this.level = level;
        this.ep = ep;
        this.mp = mp;
        this.wis = wis;
        this.int = int;
        this.cha = cha;
        this.con = con;
        this.ab = ab;
        this.ac = ac;
    }
}

const player = window.localStorage.getItem('playerObj');
let user = JSON.parse(player);

const myName = document.getElementById('myNameText');
const myRace = document.getElementById('myRaceText');
const mySchool = document.getElementById('mySchoolText')
const myMaxEP = document.getElementById('myMaxEPText');
const myCurrentEP = document.getElementById('myCurrentEPText');
const myMaxMP = document.getElementById('myMaxMPText');
const myCurrentMP = document.getElementById('myCurrentMPText');
const logText = document.getElementById('logText');
const yourName = document.getElementById('yourNameText');
const yourMaxEP = document.getElementById('yourMaxEPText');
const yourCurrentEP = document.getElementById('yourCurrentEPText');
const yourMaxMP = document.getElementById('yourMaxMPText');
const yourCurrentMP = document.getElementById('yourCurrentMPText');

let names = [
    "Placeholder",
    "Rob",
    "Jimmy",
    "Brian",
    "Katie",
    "William",
    "Sean",
    "Sedor",
    "James",
    "Barbara",
    "Eamon",
    "Krista",
    "Jared",
    "Bretton",
    "Rinne",
    "Sarek",
    "Chester",
    "Kungar",
    "Dunder",
    "Kethra",
    "Fannar",
    "Midori",
    "Chuck",
    "Camron",
    "Stephanie",
    "Timothy",
    "Roymond Raymond",
    "Lavi",
    "Laura",
    "Jane",
    "Megan",
    "Brandon",
    "Friedrich",
    "Benjamin",
    "Richard",
    "Skippy",
    "Alex"
]
let schools = ["", "Abjuration", "Divination", "Evocation", "Transmutation"];
let enemy = CreateEnemy(user.level);

UpdateGUI();

function UpdateGUI() {
    myName.innerHTML = user.name;
    myRace.innerHTML = user.race;
    mySchool.innerHTML = user.school;
    myMaxEP.innerHTML = user.ep.max;
    myCurrentEP.innerHTML = user.ep.current;
    myMaxMP.innerHTML = user.mp.max;
    myCurrentMP.innerHTML = user.mp.current;
    yourMaxEP.innerHTML = enemy.ep.max;
    yourMaxMP.innerHTML = enemy.mp.max;
    yourCurrentMP.innerHTML = enemy.mp.current;
    yourCurrentEP.innerHTML = enemy.ep.current;
    yourName.innerHTML = enemy.name;
}

function CreateEnemy(level) {
    let name = names[Roll(names.length)];
    let school = schools[Roll(schools.length)];
    let wis = level;
    let int = level;
    let cha = level;
    let con = level;
    let ep = {current: 0, max: 0};
    let mp = {current: 0, max: 0};

    switch (school) {
        case "Abjuration": wis++;
        break;
        case "Divination": int++;
        break;
        case "Evocation": cha++;
        break;
        case "Transmutation": con++;
    }

    let ab = (level + cha);
    let ac = 50 + (level + wis);
    ep.max = 8 + (level * con);
    mp.max = 8 + (level * int);
    ep.current = ep.max;
    mp.current = mp.max;

    if (ac > 90) {ac = 90;}

    return new Enemy(name, school, level, ep, mp, wis, int, cha, con, ab, ac);
}

function Roll(max) {
    return Math.floor(1 + Math.random() * (max - 1));
}