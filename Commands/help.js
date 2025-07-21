const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━〔 🤖 *LYRICAL-XMD* 〕━━━╮
┃ 💠 *Bot Name:* ${settings.botName || 'LYRICAL-XMD'}
┃ 🔖 *Version:* ${settings.version || '2.0.5'}
┃ 👑 *Owner:* ${settings.botOwner || 'LYRICAL Official'}
┃ 📺 *YouTube:* ${global.ytch || 'Not set'}
╰━━━━━━━━━━━━━━╯

🔥 _"LYRICAL-XMD is not just a bot, it's an experience."_  
✨ _Designed with 💙 by lyrical travor_
🔍 _Use the commands below to explore the magic🪄._

━━━━━━━━━━━━━━━
> 📌*CMD MENU*
━━━━━━━━━━━━━━━

╭─🌐 *GENERAL ZONE*
│ 🌐 .help  
│ 📡 .ping  
│ ⚡ .alive  
│ 🗣️ .tts  
│ 👑 .owner   
│ 📚 .fact  
│ 🌤️ .weather  
│ 📰 .news  
│ 🖍️ .attp  
│ 🎶 .lyrics  
│ 👥 .groupinfo 
│ 📎 .vv  
│ 🖼️ .ss  
╰──────────────

╭─🛡️ *GROUP GUARD*
│ 🚫 .ban  
│ 🔺 .promote  
│ 🔻 .demote  
│ 🔇 .mute  
│ 🔊 .unmute  
│ 🗑️ .delete  
│ 🥾 .kick  
│ ⚠️ .warnings  
│ ⚡ .warn  
│ 🛑 .antilink  
│ 🤬 .antibadword  
│ 📢 .tag  
│ 📣 .tagall  
│ 🤖 .chatbot 
│ 👋 .welcome  
│ 🥀 .goodbye  
╰──────────────

╭─🔒 *OWNER PANEL*
│ 🛠️ .mode  
│ 📶 .autostatus  
│ 🧼 .clearsession  
│ 👁‍🗨 .antidelete  
│ 🗑 .cleartmp  
│ 🖼 .setpp  
│ ❤️ .autoreact  
╰──────────────

╭─🎨 *STICKER TOOLS*
│ 🌀 .blur  
│ 😂 .meme  
│ 🏷️ .take  
│ 😎 .emojimix  
╰─────────

╭─🧠 *AI POWER*
│ 🤖 .gpt  
│ 🧠 .gemini  
│ 🎨 .imagine  
│ 🌌 .flux  
╰──────────────

╭─🎉 *FUN ZONE*
│ 💘 .compliment
│ 😎 .flirt  
│ 🌙 .goodnight  
│ 🎭 .character  
│ 
╰──────────────

╭─✍️ *TEXT MAKER*
│ 💎 .metallic  
│ 🧊 .ice  
│ ❄️ .snow  
│ ✨ .impressive  
│ 🌌 .matrix  
│ 💡 .light  
│ 🎇 .neon  
│ 👿 .devil  
│ 💜 .purple  
│ ⚡ .thunder  
│ 🌿 .leaves  
│ 🎬 .1917  
│ 🛡️ .arena  
│ 💀 .hacker  
│ 🏖️ .sand  
│ 🩷 .blackpink  
│ 💥 .glitch  
│ 🔥 .fire  
╰──────────────

╭─📥 *MEDIA ZONE*
│ 🎧 .play  
│ 🎵 .song  
│ 📹 .video  
│ ▶️ .ytmp4  
│ 📸 .instagram  
│ 📘 .facebook  
│ 🎞️ .tiktok  
╰──────────────

╭─💻 *GITHUB CORNER*
│ 🖥️ .git  
│ 📂 .github  
│ 🧠 .sc  
│ 🧾 .script  
│ 📦 .repo  
╰──────────────

📢 *Join our channel*`;

    try {
        const imagePath = path.join(__dirname, '../assets/https://files.catbox.moe/1zqblx.jpg');
        if (fs.existsSync(imagePath)) {
            await sock.sendMessage(chatId, {
                image: fs.readFileSync(imagePath),
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363348739987203@newsletter',
                        newsletterName: 'Arslan-Ai',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, {
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363348739987203@newsletter',
                        newsletterName: 'LYRICAL-XMD by lyricalOfficial',
                        serverMessageId: -1
                    }
                }
            });
        }

        // 🔊 Voice note (optional)
        const audioPath = path.join(__dirname, '../assets/audio.mp3');
        if (fs.existsSync(audioPath)) {
            await sock.sendMessage(chatId, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: message });
        }

    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
