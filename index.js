const Discord = require("discord.js") 
const client = new Discord.Client();   
const ayarlar = require("./ayarlar.js")    
const fs = require("fs");                
const Database = require('quick.db');
const database = require('quick.db');
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Komut Yüklenecek.`);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} Komutu Yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})






  client.on("ready", async () => {
    let sesliKanalID = client.channels.cache.get("ses kanalı id ");
    if (sesliKanalID)
      sesliKanalID.join()
        .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
  });















  client.on('message', async (msg) => {
    if (msg.channel.id !== "925811676513714272") return;
    await msg. react('✅')
    });

    client.on('message', async (msg) => {
      if (msg.channel.id !== "925811676513714272") return;
      await msg. react('❎')
      });


      client.on('guildMemberAdd', member => {
        // Rol
        let rol = "925811674064228478"
      
        // Sunucuya Giren Kişiye Rol Verme
        member.roles.add(rol)
      
        // Hg Mesajı
        client.channels.cache.get('925811674462711833').send(`${member} **Kişisine <@&${rol}> Rolünü Verdim, Hoşgeldin.**`)
      })



client.login(ayarlar.token)
