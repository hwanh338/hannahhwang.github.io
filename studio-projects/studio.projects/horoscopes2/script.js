
const zodiacs = {
  0: {
      zodiac: "Aries",
      fromDate: 321,
      toDate: 420,
      img: "img/ariesemoji.jpg",
      alt: "Symbol for Aries, a ram"
  },
    1: {
        zodiac: "Aries",
        fromDate: 0321,
        toDate: 0420,
        img: "img/ariesemoji.jpg",
        alt: "Symbol for Aries, a ram"
    },
    2: {
        zodiac: "Taurus",
        fromDate: 0421,
        toDate: 0520,
        img: "img/taurusemoji.jpg",
        alt: "Symbol for Taurus, a bull"
    },
    3: {
        zodiac: "Gemini",
        fromDate: 0521,
        toDate: 0620,
        img: "img/geminiemoji.jpg",
        alt: "Symbol for Gemini, twins"
    },
    4: {
        zodiac: "Cancer",
        fromDate: 0621,
        toDate: 0722,
        img: "img/canceremoji.jpg",
        alt: "Symbol for Cancer, a crab"
    },
    5: {
        zodiac: "Leo",
        fromDate: 0723,
        toDate: 0822,
        img: "img/leoemoji.jpg",
        alt: "Symbol for Leo, a lion"
    },
    6: {
        zodiac: "Virgo",
        fromDate: 0823,
        toDate: 0922,
        img: "img/virgoemoji.jpg",
        alt: "Symbol for Virgo, a maiden"
    },
    7: {
        zodiac: "Libra",
        fromDate: 0923,
        toDate: 1022,
        img: "img/libraemoji.jpg",
        alt: "Symbol for Libra, scales"
    },
    8: {
        zodiac: "Scorpio",
        fromDate: 1023,
        toDate: 1122,
        img: "img/scorpioemoji.jpg",
        alt: "Symbol for Scorpio, a scorpion"
    },
    9: {
        zodiac: "Sagittarius",
        fromDate: 1123,
        toDate: 1221,
        img: "img/sagittariusemoji.jpg",
        alt: "Symbol for Sagittarius, a centaur"
    },
    10: {
        zodiac: "Capricorn",
        fromDate: 1222,
        toDate: 0119,
        img: "img/capricornemoji.jpg",
        alt: "Symbol for Capricorn, a goat"
    },

    11: {
        zodiac: "Aquarius",
        fromDate: 0120,
        toDate: 0219,
        img :"img/aquariusemoji.jpg",
        alt: "Symbol for Aquarius, a water bearer"
    },
    12: {
        zodiac: "Pisces",
        fromDate: 0220,
        toDate: 0320,
        img: "img/piscesemoji.jpg",
        alt: "Symbol for Pisces, a fish"
    }
};


const readings = {
    0: "2021 is major for your love life, but only if you drop the drama. As the world starts to heal from the pains of 2020, you need to let go of any habits that may have developed while isolating that no longer serve you. This year brings opportunities for magnificent love, as long as you don't ruin it with an infamous temper tantrum.",
    1: "2021 is major for your love life, but only if you drop the drama. As the world starts to heal from the pains of 2020, you need to let go of any habits that may have developed while isolating that no longer serve you. This year brings opportunities for magnificent love, as long as you don't ruin it with an infamous temper tantrum.",
    2: "Last year left you with plenty of time to think, and 2021 wants you to act on your desires because you are worth it. This will likely manifest most obviously in your professional life, so don't be surprised if you leave one job for something bigger and better that fills your soul. Practice self-care and don't for a second forget your worth, or else you could risk missing out on an opportunity made for you.",
    3: "After the economic chaos of 2020, this year offers you opportunities to rebuild and grow professionally, but it won't be easy for you or anyone else. The hard work and effort you put in last year will start to pay off, but you'll need to keep up some of the momentum. An eclipse in your sign brings a burst of unexpected news, further encouraging your personal growth that the new year brings.",
    4: "2020 kept you so busy that you started crab-walking in circles. You're an expert when it comes to taking care of other people, but 2021 asks you to let other people take care of you. This may be hard to do, as it can be difficult to admit when you're vulnerable, but I pinkie promise that it's for your own health and happiness.",
    5: "You are ruled by the sun, so you were actually born to be in the spotlight. Social distancing was hard for everyone, but it's possible it affected your sign the most, leaving you to get creative. As the world starts to heal in 2021, you'll feel like a lion trapped in a cage bursting to get out. When you do, you'll want to say yes to every date and every opportunity, but beware of short-term thinking. Your 2021 mission is to practice patience and be discerning.",
    6: "As the healer of the zodiac, 2020 kept you busy. When you weren't out there giving out masks and delivering meals you became an emotional net for friends and family, and it's likely you over-extended yourself. This year, it may be helpful to work through the trauma you've experienced, either by getting a therapist, meditating, or simply making more time for long walks. Doing things that make you feel calm and balanced may just help you erect boundaries to bring in healthier relationships.",
    7: "As the sign of partnerships and balance, 2020 did a number on you. Not only was the world total chaos, but you had to primarily switch to flirting via sext, which while fun, is not the same as batting your eyelashes in real life. However, you still managed to get your fair share of attention. This year offers a chance at healthy, stable, and long-term love, you just need to keep your eyes and heart open.",
    8: "The pains of 2020 may have brought out your dark side. That doesn't make you a supervillain but it does mean that you may have raised your stinger a few times to pick fights with those closest to you. But that's okay; if the last year has taught us anything, it's that life can be hard, and we all deserve a little more grace. Now that you know how you react in some situations, do what you can to stop giving in to any overly aggressive tendencies. Your friendships will benefit from keeping a cooler head.",
    9: "Last year was rough on everyone, but you felt it super hard. As a sign who loves to be the life of the party, when parties were canceled, you may have wondered what the point of it all was — and given into doom-scrolling as a substitute. This year, you'll find purpose again. 2021 asks you to prioritize your health, both mental and emotional. You'll feel much better when you start listening and tending to your needs.",
    10: "Hello. Pay attention, because you're going to like what you read. After the hellscape that was 2020, this year puts your career and money center stage. In particular, you will benefit from leaning into what you love and whatever it is that brings you the most satisfaction. While we all must take what we can get in this economy, this year asks you to take risks and reap the financial rewards",
    11: "You care about your community, and the events of 2020 gave you plenty of chances to keep busy by lending a hand. Whether you became your family's point person and organizer of Zoom holidays or dove into activism, you likely stayed so busy tending to others that you forgot about your own needs. Now, 2021 shines a spotlight on you, precious water bearer, and it's time to step into it.",
    12: "Your psychic and empathic abilities are what make you so magical, but the weight of the world in 2020 became too much for you. As a result, you probably used stay-at-home orders to retreat a little bit too much. This year asks you to come out of your fishbowl and grace us with your humor and pretty face. Expect major changes in your friend group that overlap with your love life. Are you secretly in love with your best friend?",
}



document.querySelector(".date-btn").addEventListener("click", function() {
    if(checkInput() === 1) {
        fadeOutTransition(".date-section")
        fadeInTransition(".zodiac-section");
        setZodiac(isZodiac(getDate()));
        resetHoro();
    } else {
        document.querySelector(".error").innerText = "ERROR";
        errorTransition()
    }
});


document.querySelector(".gen-horoscope").addEventListener("click", function() {
    fadeOutTransition(".zodiac-section");
    fadeInTransition(".horo-section");
    setHoro(genHoro());
})


document.querySelector(".reset").addEventListener("click", function(){
    fadeOutTransition(".horo-section");
    resetDate();
    fadeInTransition(".date-section");
    resetZodiac();
})


// Transitions
function fadeOutTransition(myClass) {
    document.querySelector(myClass).classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(myClass).classList.add("hidden");
        document.querySelector(myClass).classList.remove("fade-out");
    } , 2250)
}


function fadeInTransition(myClass) {
    document.querySelector(myClass).classList.add("fade-in");
    setTimeout(() => {
        document.querySelector(myClass).classList.remove("hidden");
    } , 2250)
    setTimeout(() => {
        document.querySelector(myClass).classList.remove("fade-in");
    } , 3750)
}


function errorTransition() {
    document.querySelector(".error").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".error").innerText = "";
        document.querySelector(".error").classList.remove("fade-out");
    } , 2250)
}



function checkInput() {
    const regex = /^\d{1,2}\/\d{1,2}$/i;
    const dateInput = document.querySelector(".date-input").value;
    if(!isNaN(dateInput.slice(0, 2)) && dateInput[0] + dateInput[1] > 12) {
        return -1;
    } else {
        if(document.querySelector(".date-input").value.match(regex)) {
            return 1;
        } else {
            return -1;
        }
    }
}


function getDate() {
    let inputDate = parseDate(document.querySelector(".date-input").value);
    return inputDate;
}


function parseDate(input) {
    const inputArr = checkDate(input.split("/"));
    parsedInput = parseInt(inputArr.join(""), 10);
    return parsedInput;
}


function checkDate(arr) {

    if(arr[0].length === 2 && arr[1].length === 2) {
        return arr;
    } else {
        return checkDateFix(arr)
    }
}


function checkDateFix(arr) {
    if(arr[0].length !== 2) {
        arr[0] = "0" + arr[0];
    }
    if(arr[1].length !== 2) {
        arr[1] = "0" + arr[1];
    }
    return arr;
}


function resetDate() {
    document.querySelector(".date-input").value = "";
}



function isZodiac(numberCode) {
    for(let i = 0; i < 14; i++) {
        if(numberCode >= Math.min(zodiacs[i].fromDate, zodiacs[i].toDate) && numberCode <= Math.max(zodiacs[i].fromDate, zodiacs[i].toDate)) {
            return [zodiacs[i].zodiac, zodiacs[i].img, zodiacs[i].alt];
        }
    }
}


function setZodiac(zodiacArr) {
    document.querySelector(".image").src = zodiacArr[1];
    document.querySelector(".image").alt = zodiacArr[2];
    document.querySelector(".zodiac").innerText = `${zodiacArr[0]}`;
}


function resetZodiac() {
    document.querySelector(".zodiac").innerText = "";
}



function genHoro() {
    let ranNum = Math.round((Math.random() * 11) + 1);
    return ranNum;
}


function setHoro(ranNum) {
    document.querySelector(".horoscope").innerText = `${readings[ranNum]}`;
}


function resetHoro() {
    document.querySelector(".horoscope").innerText = "";
}


var width = 300;
var height = 250;


var banner = document.querySelector("#banner");
var baseStar = document.querySelector(".star");

var frag = document.createDocumentFragment();
/*Creating fragment:
Appending a star directly to the banner element will trigger a reflow. There are 300 stars, so appending them one at a time could trigger 300 reflows. That does not include any additional reflows or repaints that might be caused by changing the initial style for each star. By appending all the stars to a document fragment, modifying them on there, and then adding it to the banner element will trigger only 1 reflow and repaint.*/

var appearMin = 0.3;
var appearMax = 0.8;

var delayMin = 2;
var delayMax = 6;

var durationMin = 0.3;
var durationMax = 1;

var numAnimations = 50;
var numStars = 300;

var stars = [];
var eases = [];

for (var i = 0; i < numAnimations; i++) {

  var ease = new RoughEase({
    template:  Linear.easeNone,
    strength: random(1, 3),
    points: Math.floor(random(50, 200)),
    taper: "both",
    randomize: true,
    clamp: true
  });

  eases.push(ease);
}

// Wait for images to load
window.addEventListener("load", onLoad);

function onLoad() {

  for (var i = 0; i < numStars; i++) {
    stars.push(createStar());
  }

  document.body.removeChild(baseStar);
  banner.appendChild(frag);
}

function createStar() {
  // var index = random(textures.length)|0;
  // var star = textures[index].cloneNode(true);
  var star = baseStar.cloneNode(true);
  frag.appendChild(star);

  TweenLite.set(star, {
    rotation: random(360),
    xPercent: -50,
    yPercent: -50,
    scale: 0,
    x: random(width),
    y: random(height),
  });

  var tl = new TimelineMax({ repeat: -1, yoyo: true });

  for (var i = 0; i < numAnimations; i++) {

    var ease1 = eases[Math.floor(random(numAnimations))];
    var ease2 = eases[Math.floor(random(numAnimations))];

    var alpha = random(0.7, 1);
    var scale = random(0.15, 0.4);

    var appear = "+=" + random(appearMin, appearMax);
    var delay = "+=" + random(delayMin, delayMax);
    var duration1 = random(durationMin, durationMax);
    var duration2 = random(durationMin, durationMax);

    tl.to(star, duration1, { autoAlpha: alpha, scale: scale, ease: ease1 }, delay)
      .to(star, duration2, { autoAlpha: 0, scale: 0, ease: ease2 }, appear)
  }

  tl.progress(random(1));

  return {
    element: star,
    timeline: tl
  };
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}
