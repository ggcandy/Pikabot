const yoMamma = require("yo-mamma").default;
const covid = require("novelcovid");
let insult = yoMamma();
let morse = require('morse-code-encoder-and-decoder');

const whatIsembed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Diep.io")
  .setDescription(
    "Diep.io is a massively multiplayer online action game available for web browsers, Android, and iOS, created by Brazilian developer Matheus Valadares. Players control tanks and earn points by destroying objects and killing other players in a 2D arena. The mobile version of the game was released for Android and iOS in 2016 by Miniclip.\n\nIn Diep.io, the main objective is to earn points by destroying objects and killing other players by firing bullets with a tank, in a 2D arena. Players can get points by destroying different polygon objects with their bullets. By earning points, the tank levels up. This allows tank customization, making players' tanks more powerful. Players can upgrade their tank stat's, such as movement speed and bullet damage. Players can also upgrade their tank to more powerful classes every 15 levels up until level 45, giving them abilities other tanks may not have. Diep.io also has several different game modes featuring teaming mechanics. The ability to upgrade tanks as well as stats allows many different game strategies and playing styles."
  );

// come look
const hembed = new Discord.MessageEmbed() // hembed = help embed
  .setColor("0099ff") // Set the background color of the embed (box)
  .setTitle("Help Menu") // set the title lol
  .setDescription("1. yomamma => Gives you a random yomamma joke.\n2. ping => Gives you the ping.\n3. a2a => Gives the a2a attachment.\n4. howgay => How gay are you?\n5. diep => Tells you what is diep.\n6. booster => BOOSTER.\n7. ban => Wanna hit someone with the ban hammer? (staff only)\n8. help => You're using it right now.\n9. info => Server info.\n10. userinfo => User info.\n19. notifRoles => React to get notification roles.\n20. helperRoles => React to get helper roles.\n21. colorRoles => React to get color roles.\n22. encode => Encode a message into morse code.\n23. decode => Decode a message into plain text.\n24. shiit => TIME TO SHIIT.\n25. kick => Sweet kick in the a**. (staff only)\n26. banlist => Ever wonder who is banned?\n27. unban => NOT WORKING DO NOT USE JUST UNBAN MANUALLY LAZY BAG!\n28. corona => Gives you the corona cases of a certain country (database might not be updated).\n29. bulkDelete => Deletes a ton of messages. (You must have manage messages perm)\n30. xp => Tells you your xp and level.")
  .setFooter("The prefix for the bot is: +");

// Sorry i gtg rest my eys now like be back in 5 min. heh. my mom says that so much "rest ur eyes kid"

const jembed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Here is your yo mamma joke!")
  .setDescription(insult);
// data consists of:
// {guild: message.guild, userId: message.author.id, member: message.member, message: message, channel: message.channel, parameters: parameters}
module.exports = {
  randomizeText: {
    triggers: [["yomamma"]], // included
    func: data => {
      data.message.channel.send(jembed);
    }
  },
  ping: { // included
    triggers: [["ping"]],
    func: async data => {
      const m = await data.message.channel.send("Ping?");
      m.edit(
        `Pong! Latency is ${m.createdTimestamp -
          data.message.createdTimestamp}ms.`
      );
    }
  },
  bam: {
    triggers: [["bam"]],
    func: data => {
      let message = data.message;
      var para = data.parameters;
      console.log(para);
      message.channel.send(`**BAM ${para} was struck with a hammer**`);
    }
  },
  spongebob: {
    triggers: [["sponge"]],
    func: data => {
      let message = data.message;
      let para = data.parameters;
      let parse = [];
      let end = " ";
      let temp = " ";
      let is = 0;
      for (var i = 0; i < para.length; i++) {
        temp = Math.random();
        if (temp < 0.5) {
          parse[i] = para[i].toUpperCase();
        } else {
          parse[i] = para[i].toLowerCase();
        }
        temp = end;
        end = temp.concat(parse[i])
      }
      message.channel.send(end);
    }
  },
  necro: {
    triggers: [["necro"]],
    func: data => {
      data.message.channel.send(`https://cdn.discordapp.com/attachments/692350761237217311/710406439398539314/Screen_Shot_2020-05-14_at_6.20.51_pm.png`);
    }
  }, 
  diepmeme: {
    triggers: [["diepmeme"]],
    func: data => {
      data.message.channel.send(`https://cdn.discordapp.com/attachments/692350761237217311/710407808054722590/Screen_Shot_2020-05-14_at_6.26.12_pm.png`);
    }
  },
  a2a: { // included
    triggers: [["a2a"]],
    func: data => {
      let message = data.message;
      message.channel.send(`https://cdn.discordapp.com/attachments/425764369197170690/545810894710636555/ask-1.png`);
    }
  },
  howgay: { // included
    triggers: [["howgay"]],
    func: data => {
      let message = data.message;
      let param = data.parameters;
      let gaylvl = Math.floor(Math.random() * 101); // Calculate how gay you are. 14% it says.
      if (!param) {
        message.reply("Deadbean is 100% gay, SL is also 100% gay, and you are "+gaylvl+"% gay."); // send how gay you are. 14 % only  while luca is 62%
      } else {
        let id = param.split(" ")[0];
        message.channel.send(id+", Deadbean is 100% gay, SL is also 100% gay, and you are "+gaylvl+"% gay."); // send how gay you are. 14 % only  while luca is 62%
      }
      
    }
  },
  diep: { // included
    triggers: [["diep"]],
    func: data => {
      data.message.channel.send(whatIsembed);
    }
  },
  booster: { // included
    triggers: [["booster"]],
    func: data => {
      data.message.channel.send(`https://media.discordapp.net/attachments/214769704932343809/688936578919170053/emoji-1.gif`);
    }
  },
  ban: { // included
    triggers: [["ban"]],
    func: (ban = async data => {
      let message = data.message; // Lol seriously (thinking out of the box)
      if (
        !message.member.roles.cache.find(
          role =>
            role.name == "Admin" ||
            role.name == "Co-owner" ||
            role.name == "Owner" ||
            role.name == "Moderator"
        )
      )
        return message.reply("Sorry, you don't have permissions to use this!");

      let member = message.mentions.members.first();
      if (!member)
        return message.reply("Please mention a valid member of this server");
      if (!member.bannable)
        return message.reply(
          "I cannot ban this user! Do they have a higher role? Do I have ban permissions?"
        );

      let reason = data.parameters;
      if (!reason) reason = "No reason provided";

      await member
        .ban(reason)
        .catch(error =>
          message.reply(
            `Sorry ${message.author} I couldn't ban because of : ${error}`
          )
        );
      message.reply(
        `${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`
      );
    })
  },
  surprise: {
    triggers: [["surprise"]],
    func: data => {
      data.message.channel.send(`https://media.discordapp.net/attachments/709674315448057877/709676210354913290/dd7d0a0ac4702bc9-1.gif`);
    }
  },
  help: { // included
    triggers: [["help"]],
    func: data => {
      data.message.channel.send(hembed)
        .then(setTimeout(()=>{data.message.delete();}, 40000));
    }
  },
  info: { // included
    triggers: [["info"]],
    func: data => {
      var message = data.message;
      const iembed = new Discord.Message()
      message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
  },
  userinfo: { // included
    triggers: [["userinfo"]],
    func: data => {
      var message = data.message;
      message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
  },
  notifRoles: { // included
    triggers: [["notifRoles"]],
    func: data => {
      let message = data.message;
      const nembed = new Discord.MessageEmbed()
      .setColor("0099ff")
      .setTitle("Notification Roles")
      .setDescription("🧱 - @announcement-notify\n🏗 - @Diep-Notify\n👋 - @Event-notify\n🏛 - @Poll-Notify\n🏟 - @Chat Revival\n🏢 - @Ping me!!");
      //🗽 - @C++ Helper\n⛪ - @Python Helper\n🛕 - JS Helper\n🌇 - Java Helper\n♨ - C Helper\n🎡 - Rust Helper\n💈 - Gay
      message.channel.send(nembed);
    }
  },
  helperRoles: { // included
    triggers: [["helperRoles"]],
    func: data => {
      let message = data.message;
      const hembed = new Discord.MessageEmbed()
      .setColor("0099ff")
      .setTitle("Helper Roles")
      .setDescription("🗽 - @C++ Helper\n⛪ - @Python Helper\n🛕 - JS Helper\n🌇 - Java Helper\n♨ - C Helper\n🎡 - Rust Helper");
      message.channel.send(hembed);
    }
  },
  colorRoles: { // included
    triggers: [["colorRoles"]],
    func: data => {
      let message = data.message;
      const cembed = new Discord.MessageEmbed()
      .setColor("0099ff")
      .setTitle("Color Roles")
      .setDescription("🟥 - @Red\n🟧 - @Orange\n🟨 - @Yellow\n🟩 - @Green\n🟦 - @Blue\n🟪 - @Purple");
      message.channel.send(cembed);
    }
  },
  decode: { // included
    triggers: [["decode"]],
    func: data => {
      var message = data.message;
      var para = data.parameters;
      message.channel.send(morse.decode(para));
    }
  },
  encode: { // included
    triggers: [["encode"]],
    func: data => {
      var message = data.message;
      var para = data.parameters;
      message.channel.send(morse.encode(para));
    }
  },
  shiit: { // included
    triggers: [["shiit"]],
    func: data => {
      let message = data.message;
      data.message.channel.send(`https://cdn.discordapp.com/attachments/195278167181754369/325797771607146496/s.gif`);
    }
  },
  kick: { // included
    triggers: [["kick"]],
    func: (kick = async data => {
      let message = data.message;
      let guild = data.guild;

      if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
        return message.channel.send(
          "You dont have permission to perform this command!"
        );

      let member =
        message.mentions.members.first() || message.guild.members.get(args[0]);
      if (!member)
        return message.reply("Please mention a valid member of this server");
      if (!member.kickable)
        return message.reply(
          "I cannot kick this user! Do they have a higher role? Do I have kick permissions?"
        );
      let reason = data.parameters;
      if (!reason) reason = "No reason provided";

      await member
        .kick(reason)
        .catch(error =>
          message.reply(
            `Sorry ${message.author} I couldn't kick because of : ${error}`
          )
        );
      message.reply(
        `${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`
      );
    })
  },
  banlist: { // included
    triggers: [["banlist"]],
    func: data => {
      let guild = data.guild;
      let message = data.message;
      guild.fetchBans().then(bans => {
        console.log(
          bans.forEach(element => {
            message.channel.send(element.user.username);
          })
        );
      });
    }
  },
  ahhh: {
    triggers: [["ahhh"]],
    func: data => {
      data.message.channel.send(`https://tenor.com/view/full-metal-jacket-who-pinged-me-gunnery-sergeant-hartman-chat-ping-pong-gif-11748348`);
    }
  },
  corona: { // included
    triggers: [["corona"], ["coronavirus"]],
    func: data => {
      const webPage = "https://www.worldometers.info/coronavirus/";
      if (!data.parameters) {
        fetch(webPage) // wait let me format it
          // done
          .then(response => response.text())
          .then(response => {
            // wait a second my discord crashed lol im restarting discord give me a second
            //console.log(response);
            let root = HTMLParser.parse(response);
            root.querySelectorAll("#maincounter-wrap").forEach(node => {
              data.message.channel.send(
                "World " +
                  node.querySelector("h1").rawText +
                  " " +
                  node
                    .querySelector(".maincounter-number")
                    .querySelector("span").rawText
              );
            });
          });
      } else {
        let parameters = data.parameters.toLowerCase().split(" ").map((word)=>(word.charAt(0).toUpperCase()+word.slice(1))).join(" ");
        if (parameters == "Us") parameters="US";
        if (parameters == "Gb")parameters="GB";
        if (parameters == "Uk")parameters="UK";
       console.log(parameters);
        fetch("https://pomber.github.io/covid19/timeseries.json")
          .then(response => response.json())
          .then(coronaData => {
            if (coronaData[parameters]) {
              let now = new Date();
              let today =
                String(now.getFullYear()) +
                "-" +
                String(now.getMonth() + 1) +
                "-" +
                String(now.getDate() - 1);
              // find the info for today using .find()
              let todayInfo = coronaData[parameters].find(
                dayInfo => dayInfo.date == today
              ); // I added a let
              if (todayInfo) {
                // examplary info:
                // todayInfo={date: "2020-4-2", confirmed: 2946, deaths: 57, recovered: 56}
                // for example

                data.channel.send(
                  "Today Date: " +
                    todayInfo.date +
                    "\nConfirmed Cases: " +
                    todayInfo.confirmed +
                    "\nDeaths: " +
                    todayInfo.deaths +
                    "\nRecovered: " +
                    todayInfo.recovered
                );
              } else {
                data.message.reply(
                  "Critical Database Error: Database Not Updated! Yet..."
                );
                // idk what to write here lol
              }
            } else {
              data.message.reply(
                "Country not found (Which means your country sucks too much to be listed.)"
              ); // Which means your country sucks too much to be listed.
            }
          });
      }
    }
  },
  bulkDelete: { // included
    triggers: [["bulkDelete"]],
    func: data => {
      let message = data.message;
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.messages.fetch().then(
          function(list) {
            message.channel.bulkDelete(list);
          },
          function(err) {
            message.channel.send("ERROR: ERROR CLEARING CHANNEL.");
          }
        );
      }
    }
  },
  xp: { // included
    triggers: [["xp"]],
    func: data => {
      let message = data.message;
      console.log(message.author.id + " called xp command");//hi just here to chat what can i help with hello hello hello am i just spamming alright im just spammin
      FirestoreUsers.doc(message.author.id)
        .get()
        .then(doc => {
          let xp;
          if (doc.exists) {
            xp = doc.data().xp;
          } else {
            xp = 0;
          }
          data.channel.send("XP: " + xp+" Level: "+Math.floor(Math.sqrt(xp))); // dont we need level thingy? like the level stored in database
        // no
        // oh ok XDD
        // run the bot
        // kkk
        })
        .catch(function(error) {
          data.channel.send("Sorry, an error occured");
          console.log("Error getting document: ", error);
        });
    }
  }
};
