const { Client, GatewayIntentBits, SlashCommandBuilder, REST, Routes } = require('discord.js');
const net = require('net');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

// Server configuration
const SERVER_IP = '35.138.243.230';
const SERVER_PORT = 25565;
const TIMEOUT = 5000; // 5 seconds timeout

// Function to check if port is open
function checkServerStatus(ip, port, timeout = 5000) {
    return new Promise((resolve) => {
        const socket = new net.Socket();
        let isResolved = false;

        const onConnect = () => {
            if (!isResolved) {
                isResolved = true;
                socket.destroy();
                resolve({ online: true, error: null });
            }
        };

        const onError = (err) => {
            if (!isResolved) {
                isResolved = true;
                socket.destroy();
                resolve({ online: false, error: err.message });
            }
        };

        const onTimeout = () => {
            if (!isResolved) {
                isResolved = true;
                socket.destroy();
                resolve({ online: false, error: 'Connection timeout' });
            }
        };

        socket.setTimeout(timeout);
        socket.once('connect', onConnect);
        socket.once('error', onError);
        socket.once('timeout', onTimeout);

        socket.connect(port, ip);
    });
}

// Register slash commands
const commands = [
    new SlashCommandBuilder()
        .setName('check')
        .setDescription('Check if the Minecraft server is online')
        .toJSON(),
    new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Get server IP and port information')
        .toJSON()
];

async function registerCommands() {
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );

        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error('Error registering commands:', error);
    }
}

// Handle interactions
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'check') {
        await interaction.deferReply();

        try {
            const status = await checkServerStatus(SERVER_IP, SERVER_PORT, TIMEOUT);
            
            if (status.online) {
                await interaction.editReply({
                    content: `✅ **Server is ONLINE!**\n` +
                            `🌐 IP: \`${SERVER_IP}\`\n` +
                            `🔌 Port: \`${SERVER_PORT}\`\n` +
                            `⏰ Checked at: <t:${Math.floor(Date.now() / 1000)}:R>`
                });
            } else {
                await interaction.editReply({
                    content: `❌ **Server is OFFLINE**\n` +
                            `🌐 IP: \`${SERVER_IP}\`\n` +
                            `🔌 Port: \`${SERVER_PORT}\`\n` +
                            `⚠️ Error: ${status.error}\n` +
                            `⏰ Checked at: <t:${Math.floor(Date.now() / 1000)}:R>`
                });
            }
        } catch (error) {
            await interaction.editReply({
                content: `❌ **Error checking server status**\n` +
                        `Error: ${error.message}`
            });
        }
    }

    if (interaction.commandName === 'serverinfo') {
        await interaction.reply({
            content: `📋 **Server Information**\n` +
                    `🌐 IP Address: \`${SERVER_IP}\`\n` +
                    `🔌 Port: \`${SERVER_PORT}\`\n` +
                    `🎮 Game: Minecraft`
        });
    }
});

// Bot ready event
client.once('ready', () => {
    console.log(`✅ Bot is online! Logged in as ${client.user.tag}`);
    registerCommands();
});

// Login to Discord
if (!process.env.DISCORD_TOKEN) {
    console.error('❌ Error: DISCORD_TOKEN is not set in .env file');
    process.exit(1);
}

client.login(process.env.DISCORD_TOKEN);

