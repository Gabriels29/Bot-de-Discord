const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.login("OTcyNjA1MDg5NTg1OTYzMDc4.YnbfEw.a3dNZmXP-xcBG9hlV81BKX-IPHk");