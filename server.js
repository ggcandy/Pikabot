global.Discord = require("discord.js");
global.client = new Discord.Client();
global.config = require("./config.json");
global.fetch = require("node-fetch");
global.HTMLParser = require("node-html-parser");

//https://www.amdoren.com/api/timezone.php?api_key=9WjuL7De28vFShjnQn3C6Q89dV3VLS&loc=New+York

// test
// i see it this updates as you type.
var admin = require("firebase-admin");

var serviceAccount = require("insertfirebasekeypathhere");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "insertdatabaseURLhere"
});

var db = admin.firestore();
global.FirestoreUsers = db.collection("Users"); // here
var xp = 3;

let commands=require("./commands");
let prefix="+";

const callCommand=(message)=>{
	let content=message.content;
  // check if the message is a command
	if (content.startsWith(prefix)) content=content.substr(prefix.length);
  // break the function if message is not a command
	else return false;
  // split the message using a space
	let splittedContent=content.split(" ");
	let command=null;
	let commandTriggerLongestLength=0;
	for (let commandId of Object.keys(commands)) {
		for (let commandTrigger of commands[commandId].triggers) {
			if (commandTrigger.length > splittedContent.length) continue;
			let valid=true;
			for (let i=0; i<commandTrigger.length; ++i) {
				if (commandTrigger[i].toLowerCase() != splittedContent[i].toLowerCase()) {
					valid=false;
					break;
				}
			}
			if (valid) {
				if (!command || commandTrigger.length > commandTriggerLongestLength) {
					commandTriggerLongestLength=commandTrigger.length;
					command=commands[commandId];
				}
			}
		}
	}
	if (command) {
		console.log("Command was called:", command);
		let parameters=splittedContent.slice(commandTriggerLongestLength).join(" ");
		command.func({guild: message.guild, userId: message.author.id, member: message.member, message: message, channel: message.channel, parameters: parameters});
	}
	else ;
  return true;
};

client.on("ready", ()=>{
    console.log("Ready");
    client.user.setActivity("Watching you shit");
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

client.on('message', async message => {
	client.user.setActivity("Watching you shit");	
  console.log("new message");
  //695147374334705664
  if (message.channel.id == "696535117761609788") {
    message.delete();
    // sorry its delete(); // LOL not working
    return;
  }
  
  const luca = "luca";
if(message.content.toLowerCase().startsWith(luca))
{
    message.channel.send("R.I.P. Birb ---- 2020");
}
  
  const pika = "pika";
if(message.content.toLowerCase().startsWith(pika))
{
  message.channel.send("chuuuuuu");
    
}
  
  const boner = "boner";
  
  if(message.content.toLowerCase().startsWith(boner))
{
    message.channel.send("alert");
}
  
  const micc = "micc";
  
  if(message.content.toLowerCase().startsWith(micc))
{
    message.channel.send("​:rotating_light::rotating_light::rotating_light::rotating_light: simp alert");
}
  
  const central = "central";
    if(message.content.toLowerCase().startsWith(central))
{
    message.channel.send("dick sucker pussy giver");
}
  
  
  
  if (message.author.bot) {
    if (message.embeds) {
      const embedMsg = message.embeds.find(msg => msg.title === "Notification Roles");
      const helperMsg = message.embeds.find(msg => msg.title === "Helper Roles");
      const colorMsg = message.embeds.find(msg => msg.title === "Color Roles");
      if (embedMsg) {
        message.react("🧱")
        .then(message.react("🏗")) // nice, hello =))
        .then(message.react("👋"))
        .then(message.react("🏛"))
        .then(message.react("🏟"))
        .then(message.react("🏢"))
        .then(setTimeout(()=>{message.delete();}, 40000));
      } else if (helperMsg) {
        message.react("🗽")
        .then(message.react("⛪"))
        .then(message.react("🛕"))
        .then(message.react("🌇"))
        .then(message.react("♨"))
        .then(message.react("🎡"))
        .then(setTimeout(()=>{message.delete();}, 40000));
      } else if (colorMsg) {
        message.react("🟥")
        .then(message.react("🟧"))
        .then(message.react("🟨"))
        .then(message.react("🟩"))
        .then(message.react("🟦"))
        .then(message.react("🟪"))
        .then(setTimeout(()=>{message.delete();}, 40000));
      }
      }
    }
  
  
  
  let isCommand=callCommand(message);
  if (!isCommand) {
    let docRef=FirestoreUsers.doc(message.author.id);
    docRef.get()
      .then(doc => {
        let xp=0;
        let level=0;
        if (!doc.exists) {
          
        } else {
          xp=doc.data().xp;
        }
        var random = getRandomInt(1,3);
        xp+=random;
        docRef.set({xp: xp}, {merge: true});
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }
  
  let docRef=FirestoreUsers.doc(message.author.id);
  
  
});

var roleNames = ["announcement-notify","diep-notify","poll-notify","chat revival","ping me!!", "C++-Helper", "Python-Helper", "JS-Helper", "Java-Helper", "C-Helper", "Rust-Helper", "gay","event-notify","red","orange","yellow","green","blue","purple"];

client.on("messageReactionAdd", async (reaction,user) => {
  if (user.bot) {
    return;
  } else {
    var roleName;
    if (reaction.emoji.name === "🧱") {
      roleName = roleNames[0];
    } else if (reaction.emoji.name === "🏗") {
      roleName = roleNames[1];
    } else if (reaction.emoji.name === "🏛") {
      roleName = roleNames[2];
    } else if (reaction.emoji.name === "🏟") {
      roleName = roleNames[3];
    } else if (reaction.emoji.name === "🏢") {
      roleName = roleNames[4];
    } else if (reaction.emoji.name === "🗽") {
      roleName = roleNames[5];
    } else if (reaction.emoji.name === "⛪") {
      roleName = roleNames[6];
    } else if (reaction.emoji.name === "🛕") {
      roleName = roleNames[7];
    } else if (reaction.emoji.name === "🌇") {
      roleName = roleNames[8];
    } else if (reaction.emoji.name === "♨") {
      roleName = roleNames[9];
    } else if (reaction.emoji.name === "🎡") {
      roleName = roleNames[10];
    } else if (reaction.emoji.name === "💈") {
      roleName = roleNames[11];
    } else if (reaction.emoji.name === "👋") {
      roleName = roleNames[12];
    } else if (reaction.emoji.name === "🟥") {
      roleName = roleNames[13];
    } else if (reaction.emoji.name === "🟧") {
      roleName = roleNames[14];
    } else if (reaction.emoji.name === "🟨") {
      roleName = roleNames[15];
    } else if (reaction.emoji.name === "🟩") {
      roleName = roleNames[16];
    } else if (reaction.emoji.name === "🟦") {
      roleName = roleNames[17];
    } else if (reaction.emoji.name === "🟪") {
      roleName = roleNames[18];
    }
    const role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());
    var member = await reaction.message.guild.members.fetch(user.id);
    member.roles.add(role).then(member => {
      console.log("Added " + member.user.username + " to a role.");
      client.users.cache.get(user.id).send("Added " + roleName + " to you.");
    }).catch(err => console.error);
    //console.log(member);
  }
});


client.login(config.token);

//https://discordapp.com/oauth2/authorize?client_id=693384748592136242&scope=bot&permissions=8
