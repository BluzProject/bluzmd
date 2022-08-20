const moment = require('moment-timezone')
const { getTime, runtime } = require('../lib/myfunc')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
// Menu
exports.help = ( botname, pushname, ucapanWaktu, prefix) => {
	return`Haii Kak ${pushname} 🐦
	━【 ${botname} 】━

_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
「𝗕𝗢𝗧 𝗜𝗡𝗙𝗢」

➤ Nama : ${pushname}
➤ Nomor : ${m.sender.split("@")[0]}
➤ Prefix : ( ${prefix} )
➤ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
➤ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
➤ Total Pengguna : 
➤ Runtime : ${runtime(process.uptime())}

《 𝗠𝗘𝗡𝗨𝗝𝗨 𝗜𝗗𝗨𝗟 𝗔𝗗𝗛𝗔 》

Saya , Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏`
}

// List
exports.list = () => {
	return`Silahkan dipilih list menu dibawah ini🐦`
}

// All Menu
exports.allmenu = (botname, ucapanWaktu, pushname, prefix, isPremium) => {
	return `
━【 ${botname} 】━

_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

   क════क   ⊹⊱✫⊰⊹  क════क
    USER INFO 
    ➤ 👤 𝗨𝘀𝗲𝗿: _${pushname}_
    ➤ ☎️ 𝗡𝗼𝗺𝗼𝗿: _${m.sender.split("@")[0]}_
    ➤ 💸 𝗦𝗮𝗹𝗱𝗼: _Rp_
    ➤ 📋 𝗣𝗿𝗲𝗳𝗶𝘅: ( _${prefix}_ )
    ➤ 👥 𝗧𝗼𝘁𝗮𝗹 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮: __ 
    ➤ 📅 𝗧𝗮𝗻𝗴𝗴𝗮𝗹 𝗦𝗲𝗿𝘃𝗲𝗿: _${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
    ➤ ⌚ 𝗪𝗮𝗸𝘁𝘂 𝗦𝗲𝗿𝘃𝗲𝗿: _${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_
    ➤ ⏲️ 𝗕𝗼𝘁 𝗮𝗰𝘁𝗶𝘃𝗲 𝗱𝘂𝗿𝗶𝗻𝗴:
      _${runtime(process.uptime())}_ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
    ${readmore}

╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 CONVERT MENU 〙
║
╠➤ ${prefix}tomp3 [reply video]
╠➤ ${prefix}tomp4 [reply stickergif]
╠➤ ${prefix}toimg [reply sticker]
╠➤ ${prefix}toaud [reply voice note]
╠➤ ${prefix}tovn [reply audio]
╠➤ ${prefix}togif [reply media]
╠➤ ${prefix}tourl [reply media]
╠➤ ${prefix}removebg [reply gambar]
║
╠═══✪〘 DOWNLOAD MENU 〙
║
╠➤ ${prefix}play [judul musik]
╠➤ ${prefix}ytmp3 [link YouTube]
╠➤ ${prefix}ytmp4 [link YouTube]
╠➤ ${prefix}yts [music title]
╠➤ ${prefix}getmusic [1]
╠➤ ${prefix}getvideo [2]
╠➤ ${prefix}tt [link tiktok]
╠➤ ${prefix}tiktok [link tiktok]
╠➤ ${prefix}ttnowm [link tiktok]
╠➤ ${prefix}tiktok audio [link tiktok]
╠➤ [link tiktok]
║
╠═══✪〘 GAME MENU 〙
║
╠➤ ${prefix}family100
╠➤ ${prefix}suit [tag]
╠➤ ${prefix}ttc
╠➤ ${prefix}tebak gambar
╠➤ ${prefix}tebak kalimat
╠➤ ${prefix}tebak kata
╠➤ ${prefix}tebak lagu
╠➤ ${prefix}tebak lirik
╠➤ ${prefix}tebak lontong
║
╠═══✪〘 GRUP MENU 〙
║
╠➤ ${prefix}add 6289696090800
╠➤ ${prefix}kick 6289696090800
╠➤ ${prefix}afk [tidur]
╠➤ ${prefix}antilink [on/off]
╠➤ ${prefix}editinfo [open/close]
╠➤ ${prefix}grup [open/close]
╠➤ ${prefix}hidetag
╠➤ ${prefix}tagall
║
╠═══✪〘 RANDOM MENU 〙
║
╠➤ ${prefix}ppcouple
╠➤ ${prefix}kopi
╠➤ ${prefix}
╠➤ ${prefix}
╠➤ ${prefix}
╠➤ ${prefix}quotesanime
║
╠═══✪〘 SEARCH MENU 〙
║
╠➤ ${prefix}google [gunung]
╠➤ ${prefix}googleimage [kucing]
╠➤ ${prefix}pinterest [rumah]
╠➤ ${prefix}styletext [Hallo]
╠➤ ${prefix}wikimedia [pohon]
╠➤ ${prefix}yts [pesawat kertas]
║
╠═══✪〘 STICKER MENU 〙
║
╠➤ ${prefix}autosticker [on/off]
╠➤ ${prefix}autostickerpc [on/off]
╠➤ ${prefix}dogesticker
╠➤ ${prefix}emojimix 😅+😁
╠➤ ${prefix}gura
╠➤ ${prefix}love
╠➤ ${prefix}patrick
╠➤ ${prefix}smeme [teks]
╠➤ ${prefix}sticker [reply gambar]
╠➤ ${prefix}stickerwm [reply gambar]
╠➤ ${prefix}snobg [reply gambar]
╠➤ ${prefix}sgif [reply video]
║
╠═══✪〘 STICKER WIBU 〙
║
╠➤ ${prefix}awoo
╠➤ ${prefix}beet
╠➤ ${prefix}blush
╠➤ ${prefix}bonk
╠➤ ${prefix}bully
╠➤ ${prefix}cringe
╠➤ ${prefix}cry
╠➤ ${prefix}cuddle
╠➤ ${prefix}dance
╠➤ ${prefix}glomp
╠➤ ${prefix}handhold
╠➤ ${prefix}happy
╠➤ ${prefix}highfive
╠➤ ${prefix}hug
╠➤ ${prefix}kill
╠➤ ${prefix}megumin
╠➤ ${prefix}nom
╠➤ ${prefix}pat
╠➤ ${prefix}poke
╠➤ ${prefix}slap
╠➤ ${prefix}shinobu
╠➤ ${prefix}smile
╠➤ ${prefix}smug
╠➤ ${prefix}wave
╠➤ ${prefix}wink
╠➤ ${prefix}yeet
║
╠═══✪〘 OTHER MENU 〙
║
╠➤ ${prefix}report min ignya error
║
╠═══✪〘 OWNER MENU 〙
║
╠➤ ${prefix}add 6289696090800
╠➤ ${prefix}kick 6289696090800
╠➤ ${prefix}block 6289696090800
╠➤ ${prefix}unblock 6289696090800
╠➤ ${prefix}getcase neon
╠➤ ${prefix}join
╠➤ ${prefix}pesanbug 62812345678|Hallo
║
╚════क   ⊹⊱✫⊰⊹  क════क
`
}

exports.convertmenu = (prefix) => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 CONVERT MENU 〙
║
╠➤ ${prefix}autosticker [on/off]
╠➤ ${prefix}autostickerpc [on/off]
╠➤ ${prefix}emojimix 😅+😁
╠➤ ${prefix}sticker [reply gambar]
╠➤ ${prefix}stickerwm [reply gambar]
╠➤ ${prefix}snobg [reply gambar]
╠➤ ${prefix}sgif [reply video]
╠➤ ${prefix}tomp3 [reply video]
╠➤ ${prefix}tomp4 [reply stickergif]
╠➤ ${prefix}toimg [reply sticker]
╠➤ ${prefix}toaud [reply voice note]
╠➤ ${prefix}tovn [reply audio]
╠➤ ${prefix}togif [reply media]
╠➤ ${prefix}tourl [reply media]
╠➤ ${prefix}removebg [reply gambar]
║
╚════क   ⊹⊱✫⊰⊹  क════क
`}

exports.downloadmenu = (prefix) => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 DOWNLOAD MENU 〙
║
╠➤ ${prefix}play [judul musik]
╠➤ ${prefix}ytmp3 [link YouTube]
╠➤ ${prefix}ytmp4 [link YouTube]
╠➤ ${prefix}yts [music title]
╠➤ ${prefix}getmusic [1]
╠➤ ${prefix}getvideo [2]
╠➤ ${prefix}tt [link tiktok]
╠➤ ${prefix}tiktok [link tiktok]
╠➤ ${prefix}ttnowm [link tiktok]
╠➤ ${prefix}tiktok audio [link tiktok]
╠➤ [link tiktok]
║
╚════क   ⊹⊱✫⊰⊹  क════क
`}

exports.gamemenu = (prefix) => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 GAME MENU 〙
║
╠➤ ${prefix}family100
╠➤ ${prefix}suit [tag]
╠➤ ${prefix}ttc
╠➤ ${prefix}tebak gambar
╠➤ ${prefix}tebak kalimat
╠➤ ${prefix}tebak kata
╠➤ ${prefix}tebak lagu
╠➤ ${prefix}tebak lirik
╠➤ ${prefix}tebak lontong
║
╚════क   ⊹⊱✫⊰⊹  क════क
`}

exports.grupmenu = (prefix) => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 GRUP MENU 〙
║
╠➤ ${prefix}add 6289696090800
╠➤ ${prefix}kick 6289696090800
╠➤ ${prefix}afk [tidur]
╠➤ ${prefix}antilink [on/off]
╠➤ ${prefix}editinfo [open/close]
╠➤ ${prefix}grup [open/close]
╠➤ ${prefix}hidetag
╠➤ ${prefix}tagall
║
╚════क   ⊹⊱✫⊰⊹  क════क
`}

exports.randommenu = (prefix) => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 RANDOM MENU 〙
║
╠➤♾️ ppcouple
╠➤♾️ kopi
╠➤ ${prefix}
╠➤ ${prefix}
╠➤ ${prefix}
╠➤♾️ quotesanime
║
╚════क   ⊹⊱✫⊰⊹  क════क
`}

exports.searchmenu = (prefix) => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 SEARCH MENU 〙
║
╠➤ ${prefix}google [gunung]
╠➤ ${prefix}googleimage [kucing]
╠➤ ${prefix}pinterest [rumah]
╠➤ ${prefix}styletext [Hallo]
╠➤ ${prefix}wikimedia [pohon]
╠➤ ${prefix}yts [pesawat kertas]
║
╚════क   ⊹⊱✫⊰⊹  क════क
`}

exports.stickermenu = (prefix) => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 STICKER MENU 〙
║
╠➤ ${prefix}autosticker [on/off]
╠➤ ${prefix}autostickerpc [on/off]
╠➤ ${prefix}dogesticker
╠➤ ${prefix}emojimix 😅+😁
╠➤ ${prefix}gura
╠➤ ${prefix}lovestick
╠➤ ${prefix}patrick
╠➤ ${prefix}smeme [teks]
╠➤ ${prefix}sticker [reply gambar]
╠➤ ${prefix}stickerwm [reply gambar]
╠➤ ${prefix}snobg [reply gambar]
╠➤ ${prefix}sgif [reply video]
║
╚════क   ⊹⊱✫⊰⊹  क════क
`} 

exports.stickerwibu = (prefix) => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 STICKER WIBU 〙
║
╠➤ ${prefix}awoo
╠➤ ${prefix}beet
╠➤ ${prefix}blush
╠➤ ${prefix}bonk
╠➤ ${prefix}bully
╠➤ ${prefix}cringe
╠➤ ${prefix}cry
╠➤ ${prefix}cuddle
╠➤ ${prefix}dance
╠➤ ${prefix}glomp
╠➤ ${prefix}handhold
╠➤ ${prefix}happy
╠➤ ${prefix}highfive
╠➤ ${prefix}hug
╠➤ ${prefix}kill
╠➤ ${prefix}megumin
╠➤ ${prefix}nom
╠➤ ${prefix}pat
╠➤ ${prefix}poke
╠➤ ${prefix}slap
╠➤ ${prefix}shinobu
╠➤ ${prefix}smile
╠➤ ${prefix}smug
╠➤ ${prefix}wave
╠➤ ${prefix}wink
╠➤ ${prefix}yeet
║
╚════क   ⊹⊱✫⊰⊹  क════क
`}
//RULES
exports.rules = (pushname) => {return`
क══क ⊹⊱ 𝓡𝓤𝓛𝓔𝓢  & 𝓕𝓐𝓠 ⊰⊹ क══क
(っ◔◡◔)っ
♥ Selamat Datang Kak ♥
Hayy kakak ${pushname} 🥰

✪ Jangan spam bot 🙅
🤖 *WARN/SOFT BLOCK*

✪ Jangan CALL/VC bot ☎
🤖 *SOFT BLOCK* 🚫


🙋🏻‍♂️ Min Prefix Pakai Apa
🤵🏻 Multi Prefix #!.

🙋🏻‍♂️ Min kok botnya slow respon
🤵🏻 Mungkin disebabkan oleh sinyal
🤵🏻 User sedang download Big Size

🙋🏻‍♂️ Min bot bisa join ke grup ?
🤵🏻 Bisa cuman ada tambahan biaya
🤵🏻 ketik *sewa* untuk melihat listnya

🙋🏻‍♂️ Min misalnya saya melanggar rules Apakah saya mendapatkan kesempatan?
🤵🏻 Bisa minta maaf kepada ownernya

🤵🏻 Apakah sudah paham rulesnya?
🤵🏻 Ketik *menu* untuk memulainya
`}

// Donasi
exports.donasi = (pushname, owner) => {
	return`
━【 *DONATE* 】━
(っ◔◡◔)っ ♥ Selamat Datang kak ♥
Hai Kak ${pushname} 🥰
Kalian bisa mendukung saya agar bot ini bisa Update dengan cara berdonasi
Berapapun donasi kalian akan sangat berarti 🥹

Terima Kasih
《 *https://saweria.co/ceria* 》

*_Contact person Administrasi_* :
wa.me/${owner}
`}

exports.sewa = (pushname) => {return`
क════क   ⊹⊱ 𝖘𝖊𝖜𝖆 ⊰⊹  क════क

(っ◔◡◔)っ
♥ Selamat Datang Kak ♥
Hayy kakak ${pushname} 🥰
『 𝕊𝔼𝕎𝔸 | ℝ𝕌ℕ 𝔹𝕆𝕋 』
    𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘽𝙊𝙏
◐ Rp.5000 = 7 Hari
◐ Rp.8000 = 14 Hari
◐ Rp.13000 = 22 Hari
◐ Rp.16000 = 30 Hari

    𝙎𝙀𝙒𝘼 𝘽𝙊𝙏
◐ Rp.5000 = 7 Hari + Premium 3 Hari
◐ Rp.10000 = 14 Hari + Premium 6 Hari
◐ Rp.15000 = 24 Hari + Premium 9 Hari
◐ Rp.20000 = 30 Hari + Premium 15 Hari

    𝙅𝘼𝘿𝙄 𝘽𝙊𝙏
◐ Rp.10000 = 7 Hari - Tidak Owner
◐ Rp.15000 = 14 Hari - Tidak Owner
◐ Rp.20000 = 24 Hari + OwnerBot
◐ Rp.30000 = 30 Hari + OwnerBot
    

𝓜𝓲𝓷𝓪𝓽? 𝓛𝓪𝓷𝓰𝓼𝓾𝓷𝓰 𝓬𝓱𝓪𝓽 𝓪𝓳𝓪 𝔂𝓪 𝓬𝓾𝔂

𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒔𝒊
wa.me/6289696090800
A/N: Bawng Udin
`}

exports.kelebihan = (pushname) => {return`
क═══क  ⊹⊱ 𝓜𝓐𝓝𝓕𝓐𝓐𝓣 ⊰⊹  क═══क

(っ◔◡◔)っ
♥ Selamat Datang Kak ♥
Hayy kakak ${pushname} 🥰
『 ᴋᴇʟᴇʙɪʜᴀɴ 𝕊𝔼𝕎𝔸 | ℝ𝕌ℕ 𝔹𝕆𝕋 』
        𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘽𝙊𝙏
◐ 𝐌𝐀𝐍𝐅𝐀𝐀𝐓 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐁𝐎𝐓 ◐
⇛ Limit di berikan secara unlimited
⇛ Mendapatkan akses fitur premium

        𝙎𝙀𝙒𝘼 𝘽𝙊𝙏
◐ 𝐌𝐀𝐍𝐅𝐀𝐀𝐓 𝐒𝐄𝐖𝐀 𝐁𝐎𝐓 ◐
⇛ Limit di berikan secara unlimited
⇛ Bisa memasukan bot ke grup kamu
⇛ Membuka fitur premium ( Terbatas )

        𝙅𝘼𝘿𝙄 𝘽𝙊𝙏
◐ 𝐌𝐀𝐍𝐅𝐀𝐀𝐓 𝐉𝐀𝐃𝐈 𝐁𝐎𝐓 ◐
⇛ No WhatsApp Kalian di jadikan bot
⇛ Limit di berikan secara unlimited
⇛ Bisa invite bot ke grup unlimited
⇛ Jadi OwnerBot ( 24 Hari/30 Hari )
⇛ Membuka fitur OwnerBot


𝓜𝓲𝓷𝓪𝓽? 𝓛𝓪𝓷𝓰𝓼𝓾𝓷𝓰 𝓬𝓱𝓪𝓽 𝓪𝓳𝓪 𝔂𝓪 𝓬𝓾𝔂

𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒔𝒊
wa.me/6289696090800
A/N: Bawng Udin
`}

exports.tqtq = () => {return`
╔════क   ⊹⊱✫⊰⊹  क════क
╠═══✪〘 CONTRIBUTOR'S 〙
║
╠✪ My God (Allah)
╠✪ UserBot (support)
╠✪ Erwan (creator)
╠✪ Najmy (creator)
║
╚════क   ⊹⊱✫⊰⊹  क════क
`}

exports.listjadwalsholat = () => {return`
*----「 LIST JADWAL SHOLAT 」----*

Jakarta = 1
Ambon = 39
Balikpapan = 42 
Banda Aceh = 17
Bandar Lampung = 22
Bandung = 7
Banjar = 44
Banjarbaru = 46
Banjarmasin = 32
Banyuwangi = 48
Batam = 8
Batu = 50
Bau-bau = 52
Bekasi = 54
Bengkulu = 21
Bima = 56
Binjai = 58
Bitung = 60
Blitar = 62
Bogor = 64
Bontang = 66
Bukittinggi = 68
Cilegon = 70
Cimahi = 72
Cirebon = 74
Denpasar = 6
Depok = 76
Dumai = 78
Gorontalo = 38
Gunungsitoli = 80
Jambi = 19
Jayapura = 9
Jember = 82
Kediri = 84
Kendari = 36
Kotamobagu = 86
Kupang = 28
Langsa = 88
Lhokseumawe = 90
Lubuklinggau = 92
Madiun = 94
Magelang = 98
Makassar = 13
Malang = 96
Mamuju = 37
Manado = 15
Manokwari = 41
Mataram = 29
Medan = 14
Mojokerto = 100
Padang = 16
Padangpanjang =  102 
Padangsidempuan = 104
Pagar Alam = 106
Palangkaraya = 31
Palembang = 20
Palopo = 108
Palu = 35
Pangkal Pinang = 23
Pangkalpinang = 110
Parepare = 112
Pariaman = 114
Pasuruan = 116
Payakumbuh = 118
Pekalongan = 120
Pekanbaru = 18
Pematangsiantar = 122
Pontianak = 30
Prabumulih = 124
Probolinggo = 126
Sabang = 128
Salatiga = 130
Samarinda = 33
Sawahlunto = 132
Semarang = 26
Serang = 27
Sibolga = 134 
Singkawang = 136
Sofifi = 138
Solo = 40
Solok = 140
Sorong = 142
Subulussalam = 144
Sukabumi  = 146 
Sungai Penuh = 148
Surabaya = 4
Surakarta = 150
Tangerang = 152
Tangerang Selatan = 154
Tanjung Pinang = 24
Tanjung Selor = 34
Tanjungbalai = 156
Tarakan = 158
Tasikmalaya = 160
Tebing Tinggi = 162
Tegal = 164
Ternate = 166
Tidore Kepulauan = 168
Tomohon = 170
Tual = 172
Yogyakarta = 25`}
// Simple Menu
exports.groupmenu = (prefix) => {
	return`
┌── 「 *Group Menu* 」
├ ${prefix}linkgroup
├ ${prefix}ephemeral [option]
├ ${prefix}setppgc [image]
├ ${prefix}setname [text]
├ ${prefix}setdesc [text]
├ ${prefix}group [option]
├ ${prefix}editinfo [option]
├ ${prefix}add @user
├ ${prefix}kick @user
├ ${prefix}hidetag [text]
├ ${prefix}tagall [text]
├ ${prefix}antilink [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}promote @user
├ ${prefix}demote @user
├ ${prefix}vote [text]
├ ${prefix}devote
├ ${prefix}upvote
├ ${prefix}cekvote
├ ${prefix}hapusvote
└───────
`
}

exports.downloadermenu = (prefix) => {
	return`
┌── 「 *Downloader Menu* 」
├ ${prefix}tiktoknowm [url]
├ ${prefix}tiktokwm [url]
├ ${prefix}tiktokmp3 [url]
├ ${prefix}instagram [url]
├ ${prefix}twitter [url]
├ ${prefix}twittermp3 [url]
├ ${prefix}facebook [url]
├ ${prefix}pinterestdl [url]
├ ${prefix}ytmp3 [url]
├ ${prefix}ytmp4 [url]
├ ${prefix}getmusic [query]
├ ${prefix}getvideo [query]
├ ${prefix}umma [url]
├ ${prefix}joox [query]
├ ${prefix}soundcloud [url]
└───────
`
}

exports.randomanimemenu = (prefix) => {
	return`
┌── 「 *Random Anime Menu* 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
├ ${prefix}cringe
├ ${prefix}anime
├ ${prefix}waifu
├ ${prefix}husbu
├ ${prefix}neko
├ ${prefix}shinobu
├ ${prefix}waifus (nsfw)
├ ${prefix}nekos (nsfw)
├ ${prefix}trap (nsfw)
├ ${prefix}blowjob (nsfw)
└───────
`
}

exports.textpromenu = (prefix) => {
	return`
┌── 「 *Text Pro Menu* 」
├ ${prefix}3dchristmas
├ ${prefix}3ddeepsea
├ ${prefix}americanflag
├ ${prefix}3dscifi
├ ${prefix}3drainbow
├ ${prefix}3dwaterpipe
├ ${prefix}halloweenskeleton
├ ${prefix}sketch
├ ${prefix}bluecircuit
├ ${prefix}space
├ ${prefix}metallic
├ ${prefix}fiction
├ ${prefix}greenhorror
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dcrackedstone
├ ${prefix}3dneonlight
├ ${prefix}impressiveglitch
├ ${prefix}naturalleaves
├ ${prefix}fireworksparkle
├ ${prefix}matrix
├ ${prefix}dropwater
├ ${prefix}harrypotter
├ ${prefix}foggywindow
├ ${prefix}neondevils
├ ${prefix}christmasholiday
├ ${prefix}3dgradient
├ ${prefix}blackpink
├ ${prefix}gluetext
└───────
`
}

exports.photooxymenu = (prefix) => {
	return`
┌── 「 *Photo Oxy Menu* 」
├ ${prefix}shadow
├ ${prefix}romantic
├ ${prefix}smoke
├ ${prefix}burnpapper
├ ${prefix}naruto
├ ${prefix}lovemsg
├ ${prefix}grassmsg
├ ${prefix}lovetext
├ ${prefix}coffecup
├ ${prefix}butterfly
├ ${prefix}harrypotter
├ ${prefix}retrolol
└───────
`
}

exports.ephotomenu = (prefix) => {
	return`
┌── 「 *Ephoto Menu* 」
├ ${prefix}ffcover
├ ${prefix}crossfire
├ ${prefix}galaxy
├ ${prefix}glass
├ ${prefix}neon
├ ${prefix}beach
├ ${prefix}blackpink
├ ${prefix}igcertificate
├ ${prefix}ytcertificate
└───────
`
}

exports.funmenu = (prefix) => {
	return`
┌── 「 *Fun Menu* 」
├ ${prefix}simih
├ ${prefix}bagaimanakah
├ ${prefix}kapankah
├ ${prefix}apakah
├ ${prefix}bisakah
├ ${prefix}rate
├ ${prefix}wangy
├ ${prefix}gantengcek
├ ${prefix}cekganteng
├ ${prefix}cantikcek
├ ${prefix}cekcantik
├ ${prefix}sangecek
├ ${prefix}ceksange
├ ${prefix}cekme
├ ${prefix}gaycek
├ ${prefix}cekgay
├ ${prefix}lesbicek
├ ${prefix}halah
├ ${prefix}hilih
├ ${prefix}huluh
├ ${prefix}heleh
├ ${prefix}holoh
├ ${prefix}jadian
├ ${prefix}jodohku
├ ${prefix}delttt
├ ${prefix}tictactoe
├ ${prefix}family100
├ ${prefix}tebak [option]
├ ${prefix}math [mode]
├ ${prefix}suitpvp [@tag]
└───────
`
}

exports.primbonmenu = (prefix) => {
	return`
┌── 「 *Primbon Menu* 」
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak
├ ${prefix}shio
└───────
`
}

exports.mainmenu = (prefix) => {
	return`
┌── 「 *Main Menu* 」
├ ${prefix}script
├ ${prefix}speedtest
├ ${prefix}ping
├ ${prefix}owner
├ ${prefix}menu / ${prefix}help / ${prefix}?
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}listonline
└───────
`
}

exports.databasemenu = (prefix) => {
	return`
┌── 「 *Database Menu* 」
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
┌── 「 *Anonymous Menu* 」
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
└───────
`
}

exports.islamicmenu = (prefix) => {
	return`
┌── 「 *Islamic Menu* 」
├ ${prefix}iqra
├ ${prefix}hadist
├ ${prefix}alquran
├ ${prefix}juzamma
├ ${prefix}tafsirsurah
└───────
`
}

exports.voicechargermenu = (prefix) => {
	return`
┌── 「 *Voice Changer「 *
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}tupai
└───────
`
}

exports.ownermenu = (prefix) => {
	return`
┌── 「 *Owner Menu* 」
├ ${prefix}react [emoji]
├ ${prefix}chat [option]
├ ${prefix}join [link]
├ ${prefix}leave
├ ${prefix}block @user
├ ${prefix}unblock @user
├ ${prefix}bcgroup [text]
├ ${prefix}bcall [text]
├ ${prefix}setppbot [image]
├ ${prefix}setexif
└───────
`
}

exports.thanksto = () => {
	return`
┌── 「 *Thanks To* 」
├ DikaArdnt
├ ZeeoneOfc
├ FatihArridho
├ Yoga
├ RiychDwayne
├ Rifza
├ Deff 
├ Sanzy
├ Nekel
└───────
`
}