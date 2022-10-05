
let allDistricts = [
    "Achham",
    "Arghakhanchi",
    "Baglung",
    "Baitadi",
    "Bajhang",
    "Bajura",
    "Banke",
    "Bara",
    "Bardiya",
    "Bhaktapur",
    "Bhojpur",
    "Chitwan",
    "Dadeldhura",
    "Dailekh",
    "Dang",
    "Darchula",
    "Dhading",
    "Dhankuta",
    "Dhanusa",
    "Dolakha",
    "Dolpa",
    "Doti",
    "Gorkha",
    "Gulmi",
    "Humla",
    "Ilam",
    "Jajarkot",
    "Jhapa",
    "Jumla",
    "Kailali",
    "Kalikot",
    "Kanchanpur",
    "Kapilvastu",
    "Kaski",
    "Kathmandu",
    "Kavrepalanchok",
    "Khotang",
    "Lalitpur",
    "Lamjung",
    "Mahottari",
    "Makwanpur",
    "Manang",
    "Morang",
    "Mugu",
    "Mustang",
    "Myagdi",
    "NawalparasiEast",
    "NawalparasiWest",
    "Nuwakot",
    "Okhaldhunga",
    "Palpa",
    "Panchthar",
    "Parbat",
    "Parsa",
    "Pyuthan",
    "Ramechhap",
    "Rasuwa",
    "Rautahat",
    "Rolpa",
    "RukumEast",
    "RukumWest",
    "Rupandehi",
    "Salyan",
    "Sankhuwasabha",
    "Saptari",
    "Sarlahi",
    "Sindhuli",
    "Sindhupalchok",
    "Siraha",
    "Solukhumbu",
    "Sunsari",
    "Surkhet",
    "Syangja",
    "Tanahun",
    "Taplejung",
    "Terhathum",
    "Udayapur"
]

let remDistricts = allDistricts
let storesRandomDistricts = []

let streak = 0, score = 0, botChoice, element, indexSRD = 0
let highScore = localStorage.getItem('highScore')
checkHighScore()

function randomDistrict(){
    let randint = Math.random()
    index = randint * remDistricts.length
    element = Math.floor(index)
    botChoice = remDistricts[element]

    storesRandomDistricts[indexSRD] = botChoice
    indexSRD++

    document.querySelector("#display").innerHTML = `Where is :  ${botChoice}?`
}

randomDistrict()             

function check(userChoice){
    
    if(userChoice == botChoice){
        streak++
        score++
        checkHighScore()
        document.querySelector('#score').innerHTML = `Score : ${score}`
        
        document.getElementById(userChoice).style.fill = "#50C878"
        remDistricts.splice(element, 1)
        document.getElementById(userChoice).removeEventListener("click", districtSelected)

        randomDistrict()
        
        if(streak == 77){
            finalScore()
        }

    }
    
    else{
        streak++
        document.getElementById(userChoice).style.fill =  "	#D2042D"
        remDistricts.splice(element, 1)
        document.getElementById(userChoice).removeEventListener("click", districtSelected)

        randomDistrict()

        if(streak == 77){
            finalScore()
        }
    }
}


const districts = document.getElementsByTagName("polygon");

let districtSelected = e => { 
    let userChoice = e.target.id
    
    check(userChoice)
                                                              
}

for (let polygon of districts) {
    polygon.addEventListener("click", districtSelected);

}



function checkHighScore(){

    if (!localStorage.getItem('highScore')){
        localStorage.setItem('highScore', score)
        document.querySelector('#pb').innerHTML = `High Score : ${score}`
    }
    else if(highScore <= score){
        highScore = score
        localStorage.setItem('highScore', score)
    }
    document.querySelector('#pb').innerHTML = `High Score : ${highScore}`
    
}


function finalScore(){
    alert(`You scored ${score} out of 77!`)

}

document.querySelector('#again').addEventListener("click", playAgain)
document.querySelector('#prev').addEventListener("click", previousDistrict)
document.querySelector('#next').addEventListener("click", nextDistrict)


function playAgain(){
    window.location.reload()
    
}

function previousDistrict(){

}

function nextDistrict(){

}


