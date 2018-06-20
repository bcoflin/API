const baseURL = "https://us.api.battle.net/wow/boss/?locale=en_US&apikey=225khzhn6fjnuj8tuawet7jvz9xxp2zw";
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
const descBox = document.querySelector('.desc');
const statBox = document.querySelector('.sta');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
    e.preventDefault();

    fetch(baseURL)
    .then (function(result){
        return result.json();
    }) .then (function(json){
        displayResults(json);
    })
}

function displayResults(json){
    console.log('hey')
    
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    
    descBox.innerHTML = "Boss Not Found";
    statBox.innerHTML = "Boss Not Found";
    
    for (let i = 0; i < json.bosses.length; i++){
       
    


        if (json.bosses[i].name == searchTerm.value){
            console.log("one:",json.bosses[i].name)
            console.log("two:",searchTerm.value)
       
                    
                    
                    let rname = "Name: " + json.bosses[i].name;
                    let level = "Level: " + json.bosses[i].level;
                    let health = "Health: " + json.bosses[i].health;
                    let heroicHealth = "Heroic Health: " + json.bosses[i].heroicHealth;
                    
                    descBox.innerHTML = json.bosses[i].description;
                    statBox.innerHTML = rname + '<br>' + level + '<br>' + health + '<br>' + heroicHealth;
                } 
                
  }
}