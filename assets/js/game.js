//game states
// "Win" - player has defeated all enemy robots
//      *Fight all enemy robots
//      *defeat all enemy robots
//"Lose" - Payer robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    //alert players the round has started//
    window.alert("The fight has begun!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//if player choose to fight, then fight

    if (promptFight === "fight" || promptFight === "FIGHT") {
    //subract value of "playerAttack" from value of "enemyHealth" and use result to update value in the "enemyHealth" var//
    enemyHealth = enemyHealth - playerAttack;
    // log a resulting message to console so we know it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth +" health remaining.");
    //check enemy's health
    if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
    }
    else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //subract the value of "enemyAttack" from the value of "playerHealth" and use result to update value in the "playerHealth" var
    playerHealth = playerHealth - enemyAttack;
    //log resulting message to console to confirm it works
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    } 
    else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
     }
    
    //if player choose to skip
    } else if (promptFight==="skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by runing fight() again
        else {
            fight();
        }
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }

};


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
 