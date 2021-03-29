var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert players the round has started//
    window.alert("The fight has begun!");

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

};


fight();