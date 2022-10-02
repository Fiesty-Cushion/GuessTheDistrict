
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
    "Dholkha",
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
    "Tanahu",
    "Taplejung",
    "Terhathum",
    "Udayapur"
]

let remDistricts = allDistricts

let streak = 0, botChoice

function randomDistrict(){
    let randint = Math.random()
    index = randint * remDistricts.length
    element = Math.floor(index)
    botChoice = remDistricts[element]

    document.querySelector('h1').innerText = botChoice
}

randomDistrict()

function check(userChoice){
    
    if(userChoice == botChoice){
        streak++
        console.log("you guessed correct")
        console.log(botChoice)
        randomDistrict()

    }
    else{
        console.log("You guessed incorrect")
        console.log(botChoice)
        randomDistrict()
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

  

