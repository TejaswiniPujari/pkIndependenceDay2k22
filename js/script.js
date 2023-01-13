const talentRewardDescription = {
    0: '15 days PK STAR BADGE + Audio theme of PK combat + PK SUperStar Profile Frame',
    1: '10 days Audio theme of PK combat + PK SUperStar Profile Frame',
    2: '07 days Audio theme of PK combat',
    3: '5 days Audio theme of PK combat'
}

const userRewardDescription = {
    0: 'Top 1 User receives 25% of total beans pot',
    1: 'Top 2 User receives 20% of total beans pot',
    2: 'Top 3 User receives 15% of total beans pot',
    3: 'Top 4 User receives 10% of total beans pot',
    4: 'Top 5th-10th User receives 5%-10% of total beans pot'
}

const rankImg = {
    0: '../img/1st-rank.png',
    1: '../img/2nd-rank.png',
    2: '../img/3rd-rank.png',
    3: '../img/4th-rank.png',
    4: '../img/5th-rank.png'
}
const userRewardImg = {
    0: '../img/top3.png',
    1: '../img/top2.png',
    2: '../img/top1.png',
    3: '../img/top1.png',
    4: '../img/top1.png'
}

setInterval(() => {
    onRight();
}, 2000);

let mode = 'talent';
let slideNumber = 0;

function hideGuidline() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('main').classList.remove('main');
}
function showGuidline() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('main').classList.add('main');
}

document.getElementById('column2').style.display = 'none';
document.getElementById('column1').style.display = 'none';
document.getElementById('talent-reward').style.display = 'none'

function selectUserMode() {
    mode = 'user';
    document.getElementById('user').src = '../img/userSelect.png';
    document.getElementById('talent').src = '../img/talentUnselect.png';
    document.getElementById('user-reward').style.display = 'block';
    document.getElementById('talent-reward').style.display = 'none';
    slideNumber = 0;
    setRewards();
}

function selectTalentMode() {
    mode = 'talent';
    document.getElementById('user').src = '../img/userUnselect.png';
    document.getElementById('talent').src = '../img/talentSelect.png';
    document.getElementById('user-reward').style.display = 'none';
    document.getElementById('talent-reward').style.display = 'block';
    slideNumber = 0;
    setRewards();
}

function onLeft() {
    if (slideNumber > 0) {
        slideNumber = slideNumber - 1;
        setRewards();
    }
    else if (slideNumber == 0) {
        mode == 'user' ? slideNumber = 4 : slideNumber = 3;
        setRewards();
    }
}

function onRight() {
    if (slideNumber < 3 || (mode == 'user' && slideNumber < 4)) {
        slideNumber = slideNumber + 1;
        setRewards();
    }
    else if (slideNumber == 3 || (mode == 'user' && slideNumber == 4)) {
        slideNumber = 0;
        setRewards();
    }
}

function setRewards() {
    if (slideNumber == 0) {
        document.getElementById('column3').style.display = 'block';
        document.getElementById('column2').style.display = 'none';
        document.getElementById('column1').style.display = 'none';
    }
    else if (slideNumber == 1) {
        document.getElementById('column2').style.display = 'block';
        document.getElementById('column1').style.display = 'none';
        document.getElementById('column3').style.display = 'none';
    }
    else {
        document.getElementById('column1').style.display = 'block';
        document.getElementById('column2').style.display = 'none';
        document.getElementById('column3').style.display = 'none';
    }
    if (mode == 'user') {
        document.getElementById('reward-description').innerHTML = userRewardDescription[slideNumber];
        document.getElementById('rank').src = rankImg[slideNumber];
        document.getElementById('user-reward-img').src = userRewardImg[slideNumber]
    }
    else
        document.getElementById('reward-description').innerHTML = talentRewardDescription[slideNumber];
}