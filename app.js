
var aform = document.getElementById("allform");
let myword = document.getElementById("word");
let myphonetic = document.getElementById("phonetic");
let mydefination = document.getElementById("defination");
let mypartOfSpeech = document.getElementById("partOfSpeech");
let mysynonyms = document.getElementById("synonym");
let myantonyms = document.getElementById("antonym");
let myexample = document.getElementById("example");
let myplaceholder = document.getElementById("placeholder");
let mySearch = document.getElementById("Search");
let speaker = document.querySelector(".fa-volume-up");
 let audio = document.getElementById("audio");




mySearch.addEventListener("click", function(e){
  e.preventDefault();
  var x = document.getElementById("allthrough");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  let word = myplaceholder.value;
  if(word === ""){

 // document.getElementById("emety").innerHTML = "Search Box Is Emety";

  }else{
    document.getElementById("word").innerHTML = word + " ; ";
  }
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" +  `${myplaceholder.value}`,{
method:"GET"

  }).then(function(res){
    return res.json()
   
  })
  .then(data => {
     console.log(data)
    
    for( let i = 0; i < data.length; i++)
    if (data[i]["word"] === myplaceholder.value) {
      mydefination.innerText = data[i].meanings[i].definitions[0]["definition"];
      mypartOfSpeech.innerText = data[i].meanings[i]["partOfSpeech"]; 
      myphonetic.innerText = data[i].phonetics[i]["text"];
      mysynonyms.innerText = data[i].meanings[i].synonyms[i];
      myantonyms.innerText = data[i].meanings[i].antonyms[i];
      myexample.innerText = data[i].meanings[i].definitions[i]["example"];
  
    } 



speaker.addEventListener("click", function(){
 
   audio.innerHTML = data[i].phonetics[i]["audio"];
  
})
  })
});


