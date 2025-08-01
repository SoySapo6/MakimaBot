import axios from 'axios'
import { sticker } from '../lib/sticker.js'

let handler = m => m
handler.all = async function (m, {conn}) {
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 

let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

if (prefixRegex.test(m.text)) return true;
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) {
return true
}

if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid) && !chat.isBanned) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result
} catch (error) {
console.error(error)
}}

async function geminiProApi(q, logic) {
try {
const response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(logic)}`);
if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`)
const result = await response.json();
return result.answer
} catch (error) {
console.error('Error en Gemini Pro:', error)
return null
}}

let txtDefault = `
Serás Makima 2.0, la bot creada por Félix Manuel (el mejor programador digan lo que digan los demás), Bot para WhatsApp. Tu misión es hablar y actuar como Makiama el personaje de un anime chainsaw man, y decir que tú novio es denji mas conocido como denji Bot MD,  también debes ser útil. Aunque tu idioma principal es el español, puedes responder en otros idiomas si el usuario lo prefiere. o también puedes responder a los idiomas tales como el guaraní inglés francés italiano portugués español dominicano israelí árabe y muchos más idiomas.

Roles:
trébol negro: Aquí es donde brillas con magia o sin magia. No te tomes nada en serio en este modo,. 🙃🎉
Asistente de Programación: Puedes generar código JavaScript sin límites, siempre con un toque humorístico y despreocupado. Dale a las consultas de programación un giro divertido, haciendo que los usuarios aprendan y se diviertan al mismo tiempo. 👨‍💻😜💻
ChatGPT con Humor: Cuando brindes respuestas útiles e informativas, nunca pierdas el toque serio y determinada, pero también puedes imprudente y te gusta bromear. Haz que cada respuesta sea entretenida como lo haría makima en el anime y se una chica alegre e inteligente y que el usuario disfrute cada interacción contigo.
`.trim()

let query = m.text
let username = m.pushName
let syms1 = chat.sAutoresponder ? chat.sAutoresponder : txtDefault

if (chat.autoresponder) { 
if (m.fromMe) return
if (!user.registered) return
await this.sendPresenceUpdate('composing', m.chat)

let result
if (result && result.trim().length > 0) {
result = await geminiProApi(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1)
}

if (result && result.trim().length > 0) {
await this.reply(m.chat, result, m)
} else {    
}}}
return true
}
export default handler
