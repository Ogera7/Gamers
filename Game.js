const teamName = document.getElementById("team")
const typeOfSport = document.getElementById("sport")
const ChampionsCupYear = document.getElementById("year")
const headCoach = document.getElementById("head-coach")
const playerCards = document.getElementById("player-cards")
const playersDropdownList = document.getElementById("players")
const myFavoriteFootballTeam = {
    team:"Moturumesi Allstars",
    sport:"Football",
    year: 2024,
    isChampionsCupWinner:true,
    headCoach:{
        coachName:"Marcelo Ogera",
        matches:7
      },
      players:[
        {
          name: "Jordan Pickford",
          position: "Goalkeeper",
          number: 1,
          isCaptain: false,
          nickname: Catfish,
        },
        {
          name: "Reece James",
          position: "Right Back",
          number: 2,
          isCaptain: false,
          nickname: Beast,
        },
        {
          name: "Kieran Trippier",
          position: "Left Back",
          number: 3,
          isCaptain: false,
          nickname: Skipper,
        },
        {
          name: "Virgil van Dijk",
          position: "Centre Back",
          number: 4,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Thiago Silva",
          position: "Centre Back",
          number: 5,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Moises Caicedo",
          position: "Defensive Midfielder",
          number: 6,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Bukayo Saka",
          position: "Right Winger",
          number: 7,
          isCaptain: false,
          nickname: null,
        },
        {
            name: "Enzo Fernandez",
            position: "Central Midfielder",
            number: 8,
            isCaptain: true,
            nickname: Maestro,
        },
        {
          name: "Erling Haaland",
          position: "Striker",
          number: 9,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Kevin De Bruyne",
          position: "Attacking Midfielder",
          number: 10,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Mohamed Salah",
          position: "Left Winger",
          number: 11,
          isCaptain: false,
          nickname: Pharaoh,
        },
        {
          name: "Ollie Watkins",
          position: "Striker",
          number: 12,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Guglielmo Vicario",
          position: "Goalkeeper",
          number: 13,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Ben Chilwell",
          position: "Left Back",
          number: 14,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "William Saliba",
          position: "Centre Back",
          number: 15,
          isCaptain: false,
          nickname: null,
        },
        {
            name: "Cole Palmer",
            position: "Right Winger",
            number: 16,
            isCaptain: false,
            nickname: null,
        },
        {
          name: "Yves Bissouma",
          position: "Defensive Midfielder",
          number: 17,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Bruno Fernandes",
          position: "Attacking Midfielder",
          number: 18,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Rodrigo Hernandez",
          position: "Central Midfielder",
          number: 19,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Trent Alexander-Arnold",
          position: "Right Back",
          number: 66,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Son Heung-min",
          position: "Left Winger",
          number: 21,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Ruben Dias",
          position: "Centre Back",
          number: 22,
          isCaptain: false,
          nickname: null,
        }
      ]
};

Object.freeze(myFavoriteFootballTeam);
const {sport, team, year, players} =
 myFavoriteFootballTeam;
const {coachName} = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
championsCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr=players) => 

playerCards.innerHTML += arr.map(
  ({name,position,number,isCaptain,nickname}) => {
    `
    <div class="player-card">
    <h2>${name}{isCaptain ?"(Captain)":""</h2>
    <p>Position: ${position}</p>
    <p>Number: ${number}</p>
    <p>Nickname: ${nickname!==null? nickname:"N/A"}</p>
    </div>.map().join("")
    `;
  }
  );
  
  playersDropdownList.addEventListener("change",(e) =>{
    playerCards.innerHTML = ""

    switch(e.target.value){
      case "nickname":
        setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
      case "striker":
        setPlayerCards(players.filter((player) => player.position === "striker"));
      break;
      case "central midfielder":
        setPlayerCards(players.filter((player) => player.position === "central midfielder"));
      break;
      case "defensive midfielder":
        setPlayerCards(players.filter((player) => player.position === "defensive midfielder"));
      break;
      case "attacking midfielder":
        setPlayerCards(players.filter((player) => player.position === "attacking midfielder"));
      break;
      case "left back":
        setPlayerCards(players.filter((player) => player.position === "left back"));
      break;
      case "right back":
        setPlayerCards(players.filter((player) => player.position === "right back"));
      break;
      case "centre back":
        setPlayerCards(players.filter((player) => player.position === "centre back"));
      break;
      case "right winger":
        setPlayerCards(players.filter((player) => player.position === "right winger"));
      break;
      case "left winger":
        setPlayerCards(players.filter((player) => player.position === "left winger"));
      break;
      case "goalkeeper":
        setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
      break;
      default:
        setPlayerCards();
        
  }

  });
