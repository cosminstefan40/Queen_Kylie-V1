//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/errrbodyhatescylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/zfvvtv.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "0770811929";
global.owner = process.env.OWNER_NUMBER || "0770811929";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/olcl5p.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFOMjFoTWFTMWtxanY3cCtFTUIvME1mWFpDV0ZWd3lvMmxzMUcxa2VGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0g0WGxWS2dxK095ajRHMENCTWgzZE1XQ0lZMDFtMnB6eXd6cm9DQlNEWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSmoxL3E2T0RNTmdqQ1NDbFo4enJEMVVWMk5jU2czL3NIclUwMGN5djFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUFBxWUVjM2Y2VXZlL0ZCVFJKUHpkdVhJeWhLaVdOSEhnTzlGMmd3MWhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BV2NNc3lQYjJmNlZQTnlaZmZWQVA4QVBsMXhDbGZiUm5LK0MxUSt2bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNjcElENEZNSk9LMUZ2TzB2R1YrcEZwSmdRUlhGd0ViaVdwcTVyWmlzVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJlaGY0eUdPZ3QxeHBSK05NbFFoaGFUN1diNngyQ3VlS29IWWdpeWpHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlNaai9DUllCN0ptYmNEeHpBV1lna1ExNTBuVU5kMFBOcWY5UDZhZHFoTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0yeWloWDBjZVlXS0RCY1hlUFhFeWl2RFVjanNwZ1NDNFIwRkVSSlp5UUUwVFErY3hkY2lrRENiWTl1YmV3RjNoc3FBME9kV0lHYVdINzBSd3hSVUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6Ilh4dmw4M3B4K1RKaFh0K1pnYjNINzlUcThFSVcwMUFQSGp5UHdDblRIWHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0VBREMyQjlDNTk5QUY1QzEzQkVDRTQwMzg1MTYzQjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjAzNTIyMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUUzREJBRTNENEE4MjU0Mzc4Q0QzMDY4REI3Q0Y2MUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjAzNTIyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiXzFIWHBfMV9RM203SmZGbGFSSkdTdyIsInBob25lSWQiOiJiNjA0NDBhMy00ZTA3LTRhYzMtOTZhOC1jZjA5MjlmMzQwYmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlBNd3hzTUtvL0dNTWgwNm5mTkRuOTc3ZCs0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk0UmJyWkhyQThja0xsbFlOTXRqaXhNNGRGaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5TURORU5aOSIsIm1lIjp7ImlkIjoiNDA3NzA4MTE5Mjk6NTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VufCdlpTwnZWy8J2WhvCdlpLwnZaK8J2VufCdlpTwnZW38J2WjvCdlovwnZaKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNVEcrYVFIRUlXRjg3a0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJweWpac1NlZGl1Tll4SjVvd2M1b2dqV25sWGZWbWpJUnBsUWQzVXhoOHdJPSIsImFjY291bnRTaWduYXR1cmUiOiJQeDEyMkRIVUlUVmROK1BvREhSdVZyQmJJUEtMRzhCamU2L3VYVEdSMEhLOWF1TXJHRDdNSEc2dllVSTYrQW9jbloyNnd1TmRNNVloelQzVEtOZG1DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoic2c5VVR4emZxZVNONHNDLzd6UkNrUHpncHpFWUpnb0pJWHhNa2NneW95Yk1hM3JBZmtLRU5VTDVYaXNWT1Jkays5U0x6U0ZCeG9FVDEyLytFNE1CQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDc3MDgxMTkyOTo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhY28yYkVubllyaldNU2VhTUhPYUlJMXA1VjMxWm95RWFaVUhkMU1ZZk1DIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyMDM1MjE5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURYVCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸❄️™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "Sir Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
