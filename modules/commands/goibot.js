const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "Ramraj",
  description: "Reply when someone write bot and autoreact",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["yes love?", "Hi, you are the cutest bot on this planet😙", "yes! beb 🙋", "Chilao mat yaar 😕 yahi hu me ☹️", "yes, hello baby wife :3", "yes master?", "please don't hate me 🙂", "farmaiyega janaab 😁", "Hi, what are you doing", "Hi, this bot made by mr Raj x'D😙","I Love uhh Always","Baby Kaho tO Kiss Kar Lu","Jann aap Mere ho","Date pe chale"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("sis") || input2.includes("hihi") || input2.includes("lmao") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("bete")){
					        	return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
} 
    if(input2.includes("dead") || input2.includes("ake") || input2.includes("bhag") || input2.includes("nik") || input2.includes("death") || input2.includes("go") || input2.includes("sed") || input2.includes("jhag") || input2.includes("fyt") || input2.includes("fight") || input2.includes("nafrat") || input2.includes("accident") || input2.includes("divorce") || input2.includes("break") || input2.includes("sad") || input2.includes("alone") || input2.includes("hate") ||input2.includes("need") || input2.includes("mar") || input2.includes("janaza")){
					        	return api.setMessageReaction("😿", event.messageID, (err) => {}, true)
    }
  if(input2.includes("anup") || input2.includes("RAMRAJ") || input2.includes("Ramraj") || input2.includes("ramraj") || input2.includes("love") || input2.includes("lob") || input2.includes("holy") || input2.includes("raj") || input2.includes("RAJ") || input2.includes("sujal") || input2.includes("ind") || input2.includes("Hindu") || input2.includes("Hindi") || input2.includes("hindu") || input2.includes("Radhe") || input2.includes("radhe") || input2.includes("god") || input2.includes("bhagwan") || input2.includes("gita") || input2.includes("krishna") || input2.includes("shadi") || input2.includes("marry") || input2.includes("chum") || input2.includes("kiss") || input2.includes("heart") || input2.includes("pyar") || input2.includes("muhabbat") || input2.includes("mohabbat") || input2.includes("jan")){
					        	return api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
}
  if(input2.includes("fuck") || input2.includes("ab") || input2.includes("gali") || input2.includes("use") || input2.includes("wait") || input2.includes("rand") || input2.includes("bc") || input2.includes("bxdk") || input2.includes("bkl") || input2.includes("gandu") || input2.includes("mc") || input2.includes("chod") || input2.includes("lun") || input2.includes("lora") || input2.includes("gan")){
					        	return api.setMessageReaction("😠", event.messageID, (err) => {}, true)
}


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }