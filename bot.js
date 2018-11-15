const prefix ="!";
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`FALLEGA TEAM|!FLG`,"http://twitch.tv/S-F")
    console.log('')
    console.log('')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged in as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
});




const ownerid = '373892191791087617'
client.colors = {}

//let rainbow = 0;

 client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setGame(`☆ Store Games ☆`, {type: "2"});

  });
    client.setInterval(() =>{

        //adding this so it doesnt start doing weird stuff
        //try to change role color for every server
        for(let i in client.colors) {
            let guildId = client.colors[i].guild;
            let guild = client.guilds.get(guildId);
            let date = client.colors[i].date;


            //if 72 hours have passed, remove from config
            if(date < new Date().getTime() - 259200000) {
                 delete client.colors[i];
                return;
            }

            //if server gets deleted or bot gets kicked, remove from config
            if(guild === null) {
                delete client.colors[i];
                return;
            }
            //try to change the role
            try{
                guild.roles.find("name", client.colors[i].role).setColor(rainbow[place])
                
                .catch(err => { 
                    delete client.colors[i]
                   
                    return;
                });
            }catch(err){
                delete client.colors[i]
                return;
            }
        }
        	if(place == (size - 1)) {
			place = 0;
		} else {
			place++;
		}
        //Every 10 seconds change it
    }, 500)


client.on('message', message => {
    var prefix = "!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
    if(command === "stats") {
        var time = process.uptime();
        var uptime = (time + "").toHHMMSS();

        const embed = new Discord.RichEmbed()
        .setTitle(":tools: Stats")
        .setColor(0x009688)
        .setDescription( 
        ":crown: " +              "Servers: " + client.guilds.size + "\n" + 
        ":bust_in_silhouette: " + "Users: " + client.users.size + "\n" + 
        ":clock12: " +            "Uptime: " + uptime)
        message.channel.send({embed});
    }
    if(command === "FLG") {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setAuthor("FLG", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("LAZEM IKOUN 3ANDEK ADMINISTRATEUR PERMESSION!")
            message.channel.send({embed});
            return;
        }

        if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setAuthor("FLG", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("LAZEM IKOUN 3ANDI ADMINISTRATEUR PERMESSION!!")
            message.channel.send({embed});
            return;
        }
		
		if(!message.member.guild.roles.find("name", args.join(" "))) {
            const embed = new Discord.RichEmbed()
            .setAuthor("FLG", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("IKTIB: **`*FLG (role name)`**")
            message.channel.send({embed});
            return;
        }

        if(message.member.guild.roles.find("name", args.join(" ")) === null) {
            const embed = new Discord.RichEmbed()
            .setAuthor("FLG", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("FAMA 7AJA 8ALTA.")
            message.channel.send({embed});
            return;
        }


        if(message.member.guild.roles.find("name", args.join(" ")).position >= message.guild.me.highestRole.position) {
            const embed = new Discord.RichEmbed()
            .setAuthor("FLG", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("LAZEM IKOUN ROLE MTA3I A3LA MINOU !  ")
            message.channel.send({embed});
            return;
        }


        const embed = new Discord.RichEmbed()
        .setAuthor("Rainbow", client.user.avatarURL)
        .setColor(0xE7F436)
        .setDescription("RAINBOW COLOR DONE T7AT IL ROLE **`" + args.join(" ") + "`**" + "\n" +
        "Note: WA9T MAYA7BESS IL RAINBOW 3AWED 7OT IL COMMAND")
        message.channel.send({embed});

        client.colors[message.guild.name] = {
            guild: message.guild.id,
            role: args.join(" "),
            date: new Date().getTime()
        }

    }
});


const size    = 12
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
	var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
	var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
	var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg
	rainbow[i] = '#'+ red + green + blue;
}
function sin_to_hex(i, phase) {
	var sin = Math.sin(Math.PI / size * 2 * i + phase);
	var int = Math.floor(sin * 127) + 128;
	var hex = int.toString(16);

	return hex.length === 1 ? '0'+hex : hex;
}
let place = 0;

client.login(process.env.BOT_TOKEN);
