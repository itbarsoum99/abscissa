var topicBlank = document.getElementById('topic');
var subjectBlank = document.getElementById('subject');
var vehicleBlank = document.getElementById('vehicle');
var impactBlank = document.getElementById('impact');
var theoryBlank = document.getElementById('theory');
var intrigueBlank = document.getElementById('intrigue');
var audienceBlank = document.getElementById('audience');

var topics = ["U.S. Politics", "Celebrities", "History", "COVID"]

/* U.S. politics topics */
var politicsSubjects = ["Joe Biden", "Donald Trump", "Kamala Harris", "Nancy Pelosi", "Chuck Schumer", "Kevin McCarthy", "Mitch McConnell", "John Roberts", "Mike Pence"]
var politicsVehicles = ["paid money", "wrote legislation", "signed an executive order", "hired a lobbyist", "lied to the public", "used insider knowledge", "secretly became president"] 
var politicsImpacts = ["to steal an election", "to win an election", "to create an insurrection", "to make money", "to sell crashing stock"]
var politicsAudiences = ["campaign donors", "mainstream skeptics", "Republican voters", "past theorist"] 

/* Celebrities topics */
var celebritySubjects = ["Elon Musk", "Kanye West", "Travis Scott", "Dua Lipa", "Britney Spears", "Olivia Rodrigo", "Adele", "Billie Eilish", "Justin Bieber", "Jennifer Lopez"]
var celebrityVehicles = ["used twitter", "wrote a song", "made a movie", "filed a lawsuit", "got a divorce", "robbed a bank"]
var celebrityImpacts = ["to defame an ex", "to fake the moon landing", "to launder money", "to cover up a crime", "for fun", "to fake follower counts"]
var celebrityAudiences = ["gossipy types", "influencers", "grudge holders"]

/* History topics */
var historySubjects = ["FDR", "Adolf Hitler", "Joseph Stalin", "Abraham Lincoln", "The Founding Fathers", "JFK", "Cleopatra", "Genghis Khan"]
var historyVehicles = ["faked an important document", "stole from the people", "invented the internet", "faked going to space", "started a war"] 
var historyImpacts = ["for personal gain", "for political gain", "to get a fancy hat", "to hoard food", "to burn down a home", "on a dare"]
var historyAudiences = ["gullible", "high school dropouts", "article skimmers"]

/* COVID topics */
var covidSubjects = ["Anthony Fauci", "Deborah Birx", "Joe Biden", "Tom Hanks", "The CCP", "Jeff Bezos"]
var covidVehicles = ["lied to the public", "made up COVID information", "invented COVID", "said COVID cases were declining", "stepped aside", "microchipped vaccines"]
var covidImpacts = ["to get people to wear a mask", "to oppress the populace", "to kill people", "to make money", "to track people"]
var covidAudiences = ["pseudoscience", "anti-vaxxer", "anti-masker"]



function select() {
  window.chosenTopic = topics[Math.floor(Math.random() * topics.length)];
  topicBlank.innerHTML = chosenTopic;

  if (chosenTopic == topics[0]) {
    subjectBlank.innerHTML = politicsSubjects[Math.floor(Math.random() * politicsSubjects.length)];
    vehicleBlank.innerHTML = politicsVehicles[Math.floor(Math.random() * politicsVehicles.length)];
    impactBlank.innerHTML = politicsImpacts[Math.floor(Math.random() * politicsImpacts.length)];
    var theory = subjectBlank.innerHTML + " " + vehicleBlank.innerHTML + " " + impactBlank.innerHTML;
    theoryBlank.innerHTML = theory;
    audienceBlank.innerHTML = politicsAudiences[Math.floor(Math.random() * politicsAudiences.length)];
  } 

  else if (chosenTopic == topics[1]) {
    subjectBlank.innerHTML = celebritySubjects[Math.floor(Math.random() * celebritySubjects.length)];
    vehicleBlank.innerHTML = celebrityVehicles[Math.floor(Math.random() * celebrityVehicles.length)];
    impactBlank.innerHTML = celebrityImpacts[Math.floor(Math.random() * celebrityImpacts.length)];
    var theory = subjectBlank.innerHTML + " " + vehicleBlank.innerHTML + " " + impactBlank.innerHTML;
    theoryBlank.innerHTML = theory;
    audienceBlank.innerHTML = celebrityAudiences[Math.floor(Math.random() * celebrityAudiences.length)];

  }  

  else if (chosenTopic == topics[2]) {
    subjectBlank.innerHTML = historySubjects[Math.floor(Math.random() * historySubjects.length)];
    vehicleBlank.innerHTML = historyVehicles[Math.floor(Math.random() * historyVehicles.length)];
    impactBlank.innerHTML = historyImpacts[Math.floor(Math.random() * historyImpacts.length)];
    var theory = subjectBlank.innerHTML + " " + vehicleBlank.innerHTML + " " + impactBlank.innerHTML;
    audienceBlank.innerHTML = historyAudiences[Math.floor(Math.random() * historyAudiences.length)];

    theoryBlank.innerHTML = theory;

  }
  else {
    subjectBlank.innerHTML = covidSubjects[Math.floor(Math.random() * covidSubjects.length)];
    vehicleBlank.innerHTML = covidVehicles[Math.floor(Math.random() * covidVehicles.length)];
    impactBlank.innerHTML = covidImpacts[Math.floor(Math.random() * covidImpacts.length)];
    var theory = subjectBlank.innerHTML + " " + vehicleBlank.innerHTML + " " + impactBlank.innerHTML;
    theoryBlank.innerHTML = theory;
    audienceBlank.innerHTML = covidAudiences[Math.floor(Math.random() * covidAudiences.length)];

  }

}

var intriguing = ["which created a tornado", "which caused a pandemic", "which provoked nuclear war", "which led to widespread rioting", "which helped a drug cartel", "which increased gang violence", "which caused the sinking of Atlantis"]
function intrigue() {
  intrigueBlank.innerHTML = intriguing[Math.floor(Math.random() * intriguing.length)];
} 



select()
intrigue()

