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

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }


for (let i = 0; i < json.bosses.length; i++){
    
    if (json.bosses[i].name == searchTerm.value){
       
        if (json.bosses[i].name !== searchTerm.value){
            descBox.innerHTML = "Boss Does Not Exist";
        } else {
            descBox.innerHTML = json.bosses[i].description;
        }
        let rname = "Name: " + json.bosses[i].name;
        let level = "Level: " + json.bosses[i].level;
        let health = "Health: " + json.bosses[i].health;
        let heroicHealth = "Heroic Health: " + json.bosses[i].heroicHealth;
            
        statBox.innerHTML = rname + '<br>' + level + '<br>' + health + '<br>' + heroicHealth;
    }
  }
}
