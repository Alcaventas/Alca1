import fetch from 'node-fetch';


const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.menu_anime

  try {
    const pp = imagen2;
    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` ┎━━━━━━━ ∙ʚ🤴🏻ɞ∙ ━━━━━━━┒
┃✔️ Creador : @𝘼𝙡𝙘𝙖𝙨𝙝𝙤𝙥.𝙛𝙛
┃📞 Wa.me/528241264763
┖━━━━━━━ ∙ʚ⚜️ɞ∙ ━━━━━━━┚

 ╭━〔 ⚙️ 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ⚙️ 〕
 *┃➤ 🟢 ${usedPrefix}enable*
 *┃➤ 🔴 ${usedPrefix}disable*
  ╰━━━━━━━━━━━━

 ╭━〔 👇🏻 𝐆𝐑𝐔𝐏𝐎𝐒 👇🏻〕
 *┃➤  ${usedPrefix}menuff*
 *┃➤  ${usedPrefix}comandosff*
 *┃➤  ${usedPrefix}kick*
 *┃➤  ${usedPrefix}grupo*
 *┃➤  ${usedPrefix}promote*
 *┃➤  ${usedPrefix}demote*
 *┃➤  ${usedPrefix}demote*
 *┃➤  ${usedPrefix}link*
 *┃➤  ${usedPrefix}invocar*
 *┃➤  ${usedPrefix}setwelcome*
 *┃➤  ${usedPrefix}setbye*
  ╰━━━━━━━━━━━━

 ╭━〔 ⚠️ *𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘* ⚠️ 〕
 *┃➤ 🗺️ ${usedPrefix}menuff*
 *┃➤ 🗺️ ${usedPrefix}bermuda*
 *┃➤ 🗺️ ${usedPrefix}kalahari*
 *┃➤ 🗺️ ${usedPrefix}alpes*
 *┃➤ 🗺️ ${usedPrefix}purgatorio*
 *┃➤ 🗺️ ${usedPrefix}nexterra*
 *┃➤ 📋 ${usedPrefix}agendasemanal*
  ╰━━━━━━━━━━━━

  ╭━〔 👉🏻 *𝗣𝗟𝗔𝗡𝗧𝗜𝗟𝗟𝗔𝗦 𝗗𝗘 𝗩𝗦* 👈🏻 〕
 *┃➤ 🌀 ${usedPrefix}buscarvsmasc*
 *┃➤ ⚔️ ${usedPrefix}bsmsac*
 *┃➤ ⚓ ${usedPrefix}buscarvsfem*
 *┃➤ ✨ ${usedPrefix}bsfem*
 *┃➤ 📍 ${usedPrefix}buscarvsmixto*
 *┃➤ 👁️‍🗨️ ${usedPrefix}bsmixto*
  ╰━━━━━━━━━━━━

 *╔══ ≪ 👉🏻𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗫 𝗙𝗜𝗟𝗧𝗥𝗢𝗦👈🏻 ≫ ══╗*
 *║* 🎐 _${usedPrefix}sticker | s *imagen o video*_
 *║* 🎐 _${usedPrefix}sticker | s *url de tipo jpg*_
 *║* 🎐 _${usedPrefix}emojimix *😺+😆*_
 *║* 🎐 _${usedPrefix}qc*_
 *║* 🎐 _${usedPrefix}scircle | círculo *imagen*_
 *║* 🎐 _${usedPrefix}semoji | emoji *tipo emoji*_
 *║* 🎐 _${usedPrefix}dado_
 *║* 🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
 *║* 🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 *╚══ ≪ •❈• ≫ ══╝*

 ╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
*┃➤ 🕹️ ${usedPrefix}prostituto <@tag>*
*┃➤ 🕹️ ${usedPrefix}prostituta <@tag>*
*┃➤ 🕹️ ${usedPrefix}gay2 <@tag>*
*┃➤ 🕹️ ${usedPrefix}lesbiana <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajero <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajera <@tag>*
*┃➤ 🕹️ ${usedPrefix}puto <@tag>*
*┃➤ 🕹️ ${usedPrefix}puta <@tag>*
*┃➤ 🕹️ ${usedPrefix}manco <@tag>*
*┃➤ 🕹️ ${usedPrefix}manca <@tag>*
*┃➤ 🕹️ ${usedPrefix}rata <@tag>*
*┃➤ 🕹️ ${usedPrefix}negro <@tag>*
*┃➤ 🕹️ ${usedPrefix}negra <@tag>*
*┃➤ 🕹️ ${usedPrefix}fea <@tag>*
*┃➤ 🕹️ ${usedPrefix}feo <@tag>*
*┃➤ 🕹️ ${usedPrefix}love*
*┃➤ 🕹️ ${usedPrefix}pregunta*
*┃➤ 🕹️ ${usedPrefix}abrazo*
*┃➤ 🕹️ ${usedPrefix}ship2*
*┃➤ 🕹️ ${usedPrefix}formarpareja*
*┃➤ 🕹️ ${usedPrefix}verdad*
*┃➤ 🕹️ ${usedPrefix}reto*
*┃➤ 🕹️ ${usedPrefix}cancion*
*┃➤ 🕹️ ${usedPrefix}pista*
*┃➤ 🕹️ ${usedPrefix}ruleta*
 ╰━━━━━━━━━━━━

 ╭━〔 👉🏻 *𝗜𝗠𝗔𝗚𝗘𝗡𝗘𝗦* 👈🏻 〕
*┃➤ 🖍️ ${usedPrefix}goku*
*┃➤ 🖍️ ${usedPrefix}vegeta*
*┃➤ 🖍️ ${usedPrefix}lora*
*┃➤ 🖍️ ${usedPrefix}cr7*
*┃➤ 🖍️ ${usedPrefix}spiderman*
*┃➤ 🖍️ ${usedPrefix}batman*
*┃➤ 🖍️ ${usedPrefix}hellokitty*
*┃➤ 🖍️ ${usedPrefix}charmander*
 ╰━━━━━━━━━━━━
 
 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*┃➤ 📥 ${usedPrefix}play*
 ╰━━━━━━━━━━━━

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*┃➤ 🌷 ${usedPrefix}piropo*
*┃➤ 🌷 ${usedPrefix}consejo*
*┃➤ 🌷 ${usedPrefix}fraseromantica*
 ╰━━━━━━━━━━━━

 ╭━〔 ⚙️ 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 ⚙️ 〕
*┃➤ 🍁 ${usedPrefix}clima*
*┃➤ 🍁 ${usedPrefix}afk*
*┃➤ 🍁 ${usedPrefix}ocr*
*┃➤ 🍁 ${usedPrefix}calc*
*┃➤ 🍁 ${usedPrefix}del*
*┃➤ 🍁 ${usedPrefix}whatmusic*
*┃➤ 🍁 ${usedPrefix}qrcode*
*┃➤ 🍁 ${usedPrefix}traducir*
 ╰━━━━━━━━━━━━`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto1[3], m);
  }
};
handler.command = /^(menu|menu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}