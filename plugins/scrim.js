const handler = async (m, {conn}) => {
  m.reply(global.scrim);
};
handler.command = /^(SCRIM|Scrim)$/i;
export default handler;

global.scrim = `
▫MODALIDAD
                   𝐒𝐂𝐑𝐈𝐌𝐒 𝐌𝐈𝐗

⏰00:00 P.M 𝐇𝐑 𝐌𝐗 🇲🇽
⏰00:00 P.M 𝐇𝐑 𝐂𝐎 🇨🇴
📍4 SALAS B/P/K/N
🍄‍🟫CASILLA:

𝐄𝐒𝐂𝐔𝐀𝐃𝐑𝐀 :
🦅•| 
✨•|  
🦅•| 
✨•| 
 
✨𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒✨:

✨•| 
🦇•|
`;
