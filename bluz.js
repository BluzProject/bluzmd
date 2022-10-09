/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

 //[================================< DATABASE >==========================]
 //DB AUTO STICKER
 const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
 let autosticker = JSON.parse(fs.readFileSync('./database/grup/autosticker.json'))
 //DBRPLY
 let setik = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
 let vien = JSON.parse(fs.readFileSync('./database/autoreply/audio.json'))
 let imagi = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
 let videox = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))

        //waktu
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	

        // // Menulogo
        // let picaks = [flaming,fluming,flarun,flasmurf]
		// let picak = picaks[Math.floor(Math.random() * picaks.length)]
// Language
const  { ind } = require(`./language`)
lang = ind // Language
//lang = rgin
// Type Menu
typemenu = 'image'

module.exports = bluz = async (bluz, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bluz.decodeJid(bluz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const from = mek.key.remoteJid
	
        // Group
        const groupMetadata = m.isGroup ? await bluz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isAutoStick = _autostick.includes(from)
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: true,
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
                // =====================] FCN WAKTU RAMDHAN HITUNG MUNDUR [========================
            
                let tanggal100 = new Date('01 September 2022 00:00:00').getTime();
                let sekarang10 = new Date().getTime();
                let selisih1 = tanggal100 - sekarang10;
        
                let harinye1 = Math.floor(selisih1 / (1000 * 60 * 60 * 24));
                let jamnye1 = Math.floor(selisih1 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                let menitnye1 = Math.floor(selisih1 % (1000 * 60 * 60) / (1000 * 60));
                let detiknye1 = Math.floor(selisih1 % (1000 * 60) / (1000));
        
                // ===================] FCN WAKTU RAMDHAN END HITUNG MUNDUR [=======================
            
                    // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await bluz.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await bluz.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await bluz.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await bluz.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

                //anti viewonce
                if (m.mtype == 'viewOnceMessage') {
                    if (!db.data.chats[m.chat].antionce) return
                teks = 
`「 *Anti ViewOnce Message* 」
Name : ${m.pushName}
User : @${m.sender.split("@")[0]}
Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
MessageType : ${m.mtype}`
                bluz.sendTextWithMentions(m.chat, teks, m)
                await sleep(500)
                m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => m.reply(`Maybe it's been opened by a bot`))
                }

        // Public & Self
        if (!bluz.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            bluz.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await bluz.updateProfileStatus(`${bluz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await bluz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        bluz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: bluz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, bluz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        bluz.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            bluz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, bluz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, bluz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, bluz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, bluz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, bluz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, bluz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, bluz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await bluz.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await bluz.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    bluz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    bluz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) bluz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) bluz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) bluz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    bluz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) bluz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) bluz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    bluz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            bluz.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
            case 'menu': {
                //if (isBan) return reply(mess.ban)
//if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
         listMessage :{
             title: `Hay Kak ${pushname}`,
             description: `Please Choose The Menu
Tanggal Server : *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
Waktu Server : *${moment.tz('Asia/Jakarta').format('HH:mm:ss')}*\n\n`,
             buttonText: "Menu",
             footerText: `${global.botname}`,
             listType: "SINGLE_SELECT",
             sections: [{
                         "title": "क════क   ⊹⊱ SUPPORT ⊰⊹  क════क",
                         "rows": [
                            {
                                "title": "👛 DONATION TO BOT",
                                "description": "Support BluzBot agar kami tetap semangat membuat fitur baru dan bot tetap aktif (>人<)",
                                "rowId": `${prefix}donasi`
                            }, 
                            {
                                 "title": "💠 UPGRADE TO PREM",
                                 "description": "Upgrade ke premium segera untuk mendapatkan fitur yang melimpah (◣_◢)",
                                 "rowId": `${prefix}sewa`
                             },
                             {
                                "title": "🧾 SEWA BOT",
                                "description": "Jika kamu ingin memasukan BluzBot ke grup kamu, bisa melakukan sewa dan mendapatkan free premium (⌒_⌒;)",
                                "rowId": `${prefix}sewa`
                            }
                         ]
                     },
                     {
                         "title": "क════क   ⊹⊱ INFO ⊰⊹  क════क",
                         "rows": [
                            {
                                "title": "🔔 BUG REPORT",
                                "description": "Kepada user BluzBot jika menemukan bug atau error sihlakan laporkan Owner (╯︵╰,)",
                                "rowId": `${prefix}report`
                            },
                            {
                                "title": "👑 CONTRIBUTOR'S",
                                "description": "Menampilkan Teman Owner BluzBot yang sudah membantu dalam mengembangkan bot ini >_<",
                                "rowId": `${prefix}tqtq`
                            },
                            {
                                "title": "⚠️ RULES BOT",
                                "description": "Menampilkan peraturan dari BluzBot yang harus Kalian Patuhi dan Ikuti ಠ ل͟ ಠ",
                                "rowId": `${prefix}rules`
                            },
                        ]
                     },
                     { 
                        "title": "क════क   ⊹⊱ LIST MENU ⊰⊹  क════क",
                         "rows": [
                            {
                                 "title": "All Menu 🥀",
                                 "description": "Menampilkan Daftar Semua Fitur!",
                                 "rowId": `${prefix}allmenu`
                                },
                             
                            {
                                 "title": "Convert Menu ⚒️",
                                 "description": "Menampilkan Fitur Convert Menu",
                                 "rowId": `${prefix}convertmenu`
                                },
                            {
                                 "title": "Download Menu ↘️",
                                 "description": "Menampilkan Fitur Download Menu",
                                 "rowId": `${prefix}downloadmenu`
                                },
                             
                            {
                                "title": "Game Menu 🎮",
                                "description": "Menampilkan Fitur Game Menu",
                                "rowId": `${prefix}gamemenu`
                                },
                             {
                                 "title": "Group Menu 🏘️",
                                 "description": "Menampilkan Fitur Grup Menu",
                                 "rowId": `${prefix}grupmenu`
                                 },
                            {
                                 "title": "Maker Menu 🌈",
                                 "description": "Menampilkan Fitur Maker Menu",
                                 "rowId": `${prefix}indomenu`
                                },
                            {
                                 "title": "Random Menu 🌆",
                                 "description": "Menampilkan Fitur Random Menu",
                                 "rowId": `${prefix}randommenu`
                                },
                            {
                                 "title": "Search Menu 🔎",
                                 "description": "Menampilkan Fitur Search Menu",
                                 "rowId": `${prefix}searchmenu`
                                },
                            {
                                "title": "Sticker Menu 🃏",
                                "description": "Menampilkan Fitur Sticker Menu",
                                "rowId": `${prefix}stickermenu`
                                },
                            {
                                "title": "Sticker Wibu 🃏",
                                "description": "Menampilkan Sticker Wibu Secara ACak",
                                "rowId": `${prefix}stickerwibu`
                                }
                         ]
                     },
                     {
                         "title": "Chat With Fellow Users 🌝",
                         "rows": [
                             {
                                 "title": "Anonymous Chat Menu 🙎🏻‍♂️",
                                 "description": "Displays The List Of Anonymous Chat Features",
                                 "rowId": `${prefix}anonymousmenu`
                             }
                         ]
                     },
                     {
                         "title": "Credit ©️",
                         "rows": [
                             {
                                 "title": "Thanks To ❤️",
                                 "description": "Displays The List Of Credit Of The Bot !!",
                                 "rowId": `${prefix}tqtq`
                             }
                         ]
                     }
                 ],
   listType: 1
         }
     }), {})
     bluz.relayMessage(m.chat, template.message, { messageId: template.key.id })
     }
     break
            case 'help':{
                const more = String.fromCharCode(8206)
                const readmore = more.repeat(4001)
                //var unicorn = await getBuffer('https://images.wallpaperscraft.com/image/single/deer_forest_night_130294_1600x900.jpg')
                var unicorn = fs.readFileSync('./bluzmedia/image/kuda.jpg')
                await bluz.send5ButLoc(from,
`━【 ${global.botname} 】━
            
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
「𝗕𝗢𝗧 𝗜𝗡𝗙𝗢」

➤ Nama : ${pushname}
➤ Nomor : ${m.sender.split("@")[0]}
➤ Prefix : ( ${prefix} )
➤ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
➤ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
➤ Total Pengguna : 
➤ Runtime : ${runtime(process.uptime())}

《 ${harinye} 》
*${harinye1} Hari*, *${jamnye1} Jam*, *${menitnye1} Menit*, *${detiknye1} Detik*
` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "👛 Donasi","id": 'donasi'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
                }
    break
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await bluz.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await bluz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await bluz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) bluz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    bluz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    bluz.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    bluz.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    bluz.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    bluz.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    bluz.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    bluz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            //[================================< CASE FUN >==========================]
            
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                bluz.sendMessage(m.chat, reactionMessage)
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: bluz.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            bluz.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: bluz.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            bluz.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: bluz.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            bluz.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${bluz.user.id}
`
bluz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
             case 'muteb': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${bluz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${bluz.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'muteb on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'muteb off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mute Bot`, bluz.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await bluz.groupInviteCode(m.chat)
                bluz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await bluz.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await bluz.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await bluz.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await bluz.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                bluz.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, bluz.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            case 'setnamabot': case 'setnamebot': {
            if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
            let name = await bluz.updateProfileName(text)
            m.reply(`Successfully renamed bot to ${name}`)
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!text) throw `this is a WhatsApp Bot named bluz-Morou`
            let name = await bluz.updateProfileStatus(text)
            m.reply(`Successfully changed bot bio status to ${name}`)
            }
            break
            case 'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko = true
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko = false
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mode AntiCall`, bluz.user.name, m)
                }
             }
             break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                bluz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await bluz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://bluztekno.blogspot.com/'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 896-9609-0800'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Bug Report',
                                    id: 'report'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      bluz.send5ButImg(i, txt, bluz.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://bluztekno.blogspot.com/'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 896-9609-0800'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Bug Report',
                                    id: 'report'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      bluz.send5ButLoc(yoi, txt, bluz.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                bluz.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await bluz.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 bluz.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await bluz.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 bluz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    bluz.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            //[================================< CASE CONVERT >==========================]
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await bluz.downloadMediaMessage(qmsg)
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                bluz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${bluz.user.name}.mp3`}, { quoted : m })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await bluz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    bluz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await bluz.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            bluz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await bluz.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            bluz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await bluz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
                if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await bluz.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    bluz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
            //[================================< CASE DOWNLOAD >==========================]
            case 'play': case 'ytplay': {
                if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                    if (!text) throw `Example : ${prefix + command} story wa anime`
                    //let yts = require("yt-search")
                    //let search = await yts(text)
                    let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    let buttons = [
                        {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: anu.thumbnail },
                        caption: `
    ⭔ Title : ${anu.title}
    ⭔ Ext : Search
    ⭔ ID : ${anu.videoId}
    ⭔ Duration : ${anu.timestamp}
    ⭔ Viewers : ${anu.views}
    ⭔ Upload At : ${anu.ago}
    ⭔ Author : ${anu.author.name}
    ⭔ Channel : ${anu.author.url}
    ⭔ Description : ${anu.description}
    ⭔ Url : ${anu.url}`,
                        footer: bluz.user.name,
                        buttons: buttons,
                        headerType: 4
                    }
                    bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
            case 'ytmp3': case 'ytaudio': {
                if (!isPremium && global.db.data.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                    let { yta } = require('./lib/y2mate')
                    if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                    let quality = args[1] ? args[1] : '128kbps'
                    let media = await yta(text, quality)
                    if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                    bluz.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                    bluz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                }
                break
                case 'ytmp4': case 'ytvideo': {
                    if (!isPremium && global.db.data.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                    let { ytv } = require('./lib/y2mate')
                    if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                    let quality = args[1] ? args[1] : '360p'
                    let media = await ytv(text, quality)
                    if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                    bluz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                }
                break
                case 'yts': case 'ytsearch': {
                    if (!text) throw `Example : ${prefix + command} story wa anime`
                    //let yts = require("yt-search")
                    //let search = await yts(text)
                    let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                    let no = 1
                    for (let i of search.all) {
                        teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                    }
                    bluz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                }
                break
            case 'getmusic': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                    let { yta } = require('./lib/y2mate')
                    if (!text) throw `Example : ${prefix + command} 1`
                    if (!m.quoted) return m.reply('Reply Pesan')
                    if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
            let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                    if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                    let quality = args[1] ? args[1] : '128kbps'
                    let media = await yta(urls[text - 1], quality)
                    if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                    bluz.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                    bluz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                }
                break
                case 'getvideo': {
                    if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                    let { ytv } = require('./lib/y2mate')
                    if (!text) throw `Example : ${prefix + command} 1`
                    if (!m.quoted) return m.reply('Reply Pesan')
                    if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                    let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                    if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                    let quality = args[1] ? args[1] : '360p'
                    let media = await ytv(urls[text - 1], quality)
                    if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                    bluz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                }
                break
            case 'tiktok':
                if (!q) throw (mess.link)
                m.reply(`Please wait....`)
            hxz.ttdownloader(q).then( data => {
              bluz.sendMessage(from, { video: { url: data.wm }}, { quoted: m })
              console.log(data)
            }).catch(() => m.reply(mess.error.api))
            break
            case 'ttnowm':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!q) throw (mess.link)
                const more = String.fromCharCode(8206)
                const readmore = more.repeat(4001)
                m.reply(`
If this feature is error, use ttnowm2
${readmore}
Jika fitur ini error, gunakan ttnowm2
`)
            hxz.ttdownloader(q).then( data => {
              bluz.sendMessage(from, { video: { url: data.nowm }}, { quoted: m })
              console.log(data)
            }).catch(() => m.reply(mess.error.api))
            break
            case 'ttnowm2': {
		if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!q) throw (mess.link)
                m.reply(mess.wait)
                let url = args.join(' ')
                let data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${url}`)
                console.log(data)
                let hasil = data.result
                if ( data.status === 200 ) {
                await sleep(1000)
                await bluz.sendMessage(m.chat, { video: { url: hasil.link }}, { quoted: m })}
            }
            break
            case 'igdl': case 'ig': case 'instagram': {
		if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!q) throw (mess.link)
                m.reply(mess.wait)
                let url = args.join(' ')
                let data = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${url}`)
                for (var x of data.result) {
                    if (x.includes('.mp4')) {
                        bluz.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                    } else {
                        bluz.sendMessage(m.chat, { image: { url: x } })
                    }
                }}
            break
            case 'igdl2': case 'ig2': case 'instagram2': {
		if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!q) throw (mess.link)
                m.reply(mess.wait)
                let url = args.join(' ')
                let data = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${lolkey}&url=${url}`)
                for (var x of data.result.media) {
                    if (x.includes('.mp4')) {
                        bluz.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                    } else {
                        bluz.sendMessage(m.chat, { image: { url: x } })
                    }
                }}
            break
            case 'tiktokmp3': case 'ttmp3': case 'tiktokaudio': {
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    url = args.join(' ')
                    let data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${url}`)
                    await bluz.sendMessage(m.chat, { audio: data }, { quoted: m})
                    (m.chat, { audio: { url: data }, mimetype: 'audio/mpeg' }, { quoted: m })
                           }
                break
            //[================================< CASE GAME >==========================]
            case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await bluz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await bluz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    bluz.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bluz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bluz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bluz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bluz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bluz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bluz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bluz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bluz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bluz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bluz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bluz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bluz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    bluz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, bluz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                bluz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            //[================================< CASE GRUP >==========================]
            case 'add': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await bluz.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'kick': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await bluz.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break    
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mode Antilink`, bluz.user.name, m)
                }
             }
             break	
            case 'demote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await bluz.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'promote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await bluz.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await bluz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await bluz.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mode Edit Info`, bluz.user.name, m)

            }
            }
            break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await bluz.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await bluz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mode Group`, bluz.user.name, m)

             }
            }
            break
            case 'hidetag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                bluz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                }
                break
                case 'tagall': {
                    if (!m.isGroup) throw mess.group
                    if (!isBotAdmins) throw mess.botAdmin
                    if (!isAdmins) throw mess.admin
    let teks = `══✪〘 *👥 Tag All* 〙✪══
     
     ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                    for (let mem of participants) {
                    teks += `⭔ @${mem.id.split('@')[0]}\n`
                    }
                    bluz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                    }
                    break
                   case 'totag': {
                   if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
                   if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
                   bluz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
                   }
                   break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await bluz.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await bluz.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                await bluz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            //[================================< CASE RANDOM >==========================]
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
        case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                bluz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
        case 'listmsg': {
            let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		    let teks = '「 LIST DATABASE 」\n\n'
		    for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		    delete msgs[text.toLowerCase()]
		    m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'ppcouple': case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                bluz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                bluz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: bluz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
                let { quotesAnime } = require('./lib/scraper')
                        let anu = await quotesAnime()
                        result = anu[Math.floor(Math.random() * anu.length)]
                        let buttons = [
                            {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                        ]
                        let buttonMessage = {
                            text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                            footer: 'Press The Button Below',
                            buttons: buttons,
                            headerType: 2
                        }
                        bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
                    break
            //[================================< CASE SEARCH >==========================]
            case 'google': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                    if (!text) throw `Example : ${prefix + command} Bluz Tekno`
                    let google = require('google-it')
                    google({'query': text}).then(res => {
                    let teks = `Google Search From : ${text}\n\n`
                    for (let g of res) {
                    teks += `⭔ *Title* : ${g.title}\n`
                    teks += `⭔ *Description* : ${g.snippet}\n`
                    teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                    } 
                    m.reply(teks)
                    })
                }
                break
            case 'gimage': case 'googleimage':{
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                    if (!text) throw `Example : ${prefix + command} kaori cicak`
                    let gis = require('g-i-s')
                    gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [
                        {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                                  ]
                    let buttonMessage = {
                        image: { url: images },
                        caption: `*-------「 GIMAGE SEARCH 」-------*
    🤠 *Query* : ${text}
    🔗 *Media Url* : ${images}`,
                        footer: bluz.user.name,
                        buttons: buttons,
                        headerType: 4
                    }
                    bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
            })
                }
                break
            case 'pinterest': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                    m.reply(mess.wait)
            let { pinterest } = require('./lib/scraper')
                    anu = await pinterest(text)
                    result = anu[Math.floor(Math.random() * anu.length)]
                    bluz.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
                }
                break
            case 'ssweb':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    let url2 = args.join(' ')
                    let datas1 = await getBuffer(`https://fatiharridho.herokuapp.com/api/tools/ssweb?url=${url2}&device=dekstop`)
                    console.log(datas1)
                    await bluz.sendMessage(m.chat, { image: datas1 }, m)
                break
            case 'sshp':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    let sshp = args.join(' ')
                    let reshp = await getBuffer(`https://fatiharridho.herokuapp.com/api/tools/ssweb?url=${sshp}&device=phone`)
                    console.log(reshp)
                    await bluz.sendMessage(m.chat, { image: reshp }, m)
                break
            case 'sstablet':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    let sstab = args.join(' ')
                    let restab = await getBuffer(`https://fatiharridho.herokuapp.com/api/tools/ssweb?url=${sstab}&device=tablet`)
                    console.log(restab)
                    await bluz.sendMessage(m.chat, { image: restab }, m)
                break
            case 'style': case 'styletext': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                    let { styletext } = require('./lib/scraper')
                    if (!text) throw 'Masukkan Query text!'
                        let anu = await styletext(text)
                        let teks = `Srtle Text From ${text}\n\n`
                        for (let i of anu) {
                            teks += `⭔ *${i.name}* : ${i.result}\n\n`
                        }
                        m.reply(teks)
                }
                break
            case 'wikimedia': {
                    if (!text) throw 'Masukkan Query Title'
                    let { wikimedia } = require('./lib/scraper')
                    anu = await wikimedia(text)
                    result = anu[Math.floor(Math.random() * anu.length)]
                    let buttons = [
                        {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: result.image },
                        caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                        footer: bluz.user.name,
                        buttons: buttons,
                        headerType: 4
                    }
                    bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
        //[================================< CASE STICKER >==========================]
        case 'attp': case 'ttp': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} text`
                await bluz.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'bluz', 'morou', m, {asSticker: true})
            }
            break
        case 'autosticker':
        case 'autostiker':
                //if (isBan) return reply(mess.ban)	 			
                //if (isBanChat) return reply(mess.banChat)
                //if (!m.isGroup) return replay(mess.group)
                //if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins && !isCreator) return m.reply(mess.admin)
                if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
                if (args[0]  === 'on'){
                if (isAutoSticker) return m.reply(`Already activated`)
                autosticker.push(from)
                fs.writeFileSync('./database/grup/autosticker.json', JSON.stringify(autosticker))
                m.reply('autosticker activated')
                } else if (args[0] === 'off'){
                let anu = autosticker.indexOf(from)
                autosticker.splice(anu, 1)
                fs.writeFileSync('./database/grup/autosticker.json', JSON.stringify(autosticker))
                m.reply('auto sticker deactivated')
            }
            break
        case 'autostickerpc':
        case 'autostikerpc':
                //if (isBan) return reply(mess.ban)	 			
                //if (isBanChat) return reply(mess.banChat)
                //if (!m.isGroup) return replay(mess.group)
                if (args.length < 1) return m.reply('type autosticker on to activate\ntype autosticker off to disable')
                if (args[0]  === 'on'){
                if (isAutoStick) return m.reply(`Already activated`)
                _autostick.push(from)
                fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
                m.reply('autosticker pc activated')
                } else if (args[0] === 'disable'){
                let anu = autosticker.indexOf(from)
                _autostick.splice(anu, 1)
                fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
                m.reply('autosticker pc deactivated')
            }
            break
        case 'dogesticker':
        case 'dogestick':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await bluz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
                }
                break
        case 'emoji': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!text) throw `Example : ${prefix + command} 😅`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                let encmedia = await bluz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                await fs.unlinkSync(encmedia)
            }
            }
            break
        case 'emojimix': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
                if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                let encmedia = await bluz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                await fs.unlinkSync(encmedia)
            }
            }
            break
        case 'gura':
        case 'gurastick':{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await bluz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
                }
                break
        case 'lovesticker':
        case 'lovestick' :{
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await bluz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
                }
                break
        case 'patrick':
        case 'patricksticker': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await bluz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
                }
                break
        case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) throw respond
                if (!text) throw respond
                m.reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await bluz.downloadMediaMessage(qmsg)
                let { floNime } = require('./lib/uploader')
                let fatGans = await floNime(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
                let FaTiH = await bluz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
                await fs.unlinkSync(FaTiH)
            }
            break
        case 'sticker': case 's': case 'stickergif': case 'sgif': {
                if (/image/.test(mime)) {
                m.reply(mess.wait)
                let media = await bluz.downloadMediaMessage(qmsg)
                let encmedia = await bluz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await bluz.downloadMediaMessage(qmsg)
                let encmedia = await bluz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                   }
            }
            break
        case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                let media = await bluz.downloadMediaMessage(qmsg)
                let encmedia = await bluz.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await bluz.downloadMediaMessage(qmsg)
                let encmedia = await bluz.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                   }
            }
            break
        case 'snobg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3 // -1 limit
                let { TelegraPh } = require('./lib/uploader')
                m.reply(mess.wait)
                mee = await bluz.downloadAndSaveMediaMessage(quoted)
                mem = await TelegraPh(mee)
                meme = `https://api.lolhuman.xyz/api/removebg?apikey=@nc0kb4j1n64n&img=${mem}`
                memek = await bluz.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(memek)
            }
            break
        case 'lick':case 'kiss':case 'neko':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                m.reply(mess.wait)
				axios.get(`https://api.f.pics/sfw/${command}`)
				.then(({data}) => {
				bluz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
				})
			break
        case 'cry':case 'kill':case 'hug':case 'pat':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                m.reply(mess.wait)
                axios.get(`https://api.waifu.pics/sfw/${command}`)
                .then(({data}) => {
                bluz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                })
			break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                m.reply(mess.wait)
		        axios.get(`https://api.waifu.pics/sfw/${command}`)
                .then(({data}) => {
                    bluz.sendMessage(m.chat, { image: { url: data.url }, caption: '⭔ Generate Random : '+ command }, { quoted: m })
            })
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: bluz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
        case 'google': {
            if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
            if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: bluz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
            case 'pinterest': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                bluz.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: bluz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                bluz.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                bluz.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                bluz.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                bluz.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                bluz.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    bluz.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await bluz.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                bluz.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await bluz.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                bluz.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
                bluz.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                bluz.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                bluz.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: bluz.user.name,
			buttons,
			headerType: 4
		    }
		    bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        bluz.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		bluz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		bluz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		bluz.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                bluz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            //[================================< CASE ANONYMOUS >==========================]
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                bluz.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await bluz.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, bluz.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await bluz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, bluz.user.name, m)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bluz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bluz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await bluz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bluz.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, bluz.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await bluz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bluz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bluz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await bluz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, bluz.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, bluz.user.name, m)
                }
                break
            }
        case 'kirim': case 'menfess': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} Inisial|62NoTujuan|IsiPesan`)
                const cpes = args.join(" ")
                const nama = cpes.split("|")[0];
                const nony = cpes.split("|")[1];
                const pesny = cpes.split("|")[2];
                lolh = `
*| CHAT |*

Message from Anonymous
Pengirim : *${nama}*
Message : ${pesny}
`
                bluz.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
            }
                await m.reply("Success")
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            //[================================< CASE OWNER >==========================]
            case 'antiviewonce': case 'antionce':
                //if (isBan) return reply(mess.ban)
//if (isBanChat) return reply(mess.banChat)
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antionce) return m.reply(`Already activated`)
global.db.data.chats[m.chat].antionce = true
m.reply(`${command} Successfully Activated !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antionce) return m.reply(`Already deactivated`)
global.db.data.chats[m.chat].antionce = false
m.reply(`${command} Successfully Deactivated !`)
} else {
let buttonsntilink = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await bluz.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
}
break
            case 'block': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await bluz.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await bluz.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'pesanbug': {
                //if (isBan) return reply(mess.ban)	 			
                //if (isBanChat) return reply(mess.banChat)
                //Number : @${m.sender.split("@")[0]}
                if (!isCreator) return m.reply(mess.owner)
                if (!args.join(" ")) return reply(`Example :\n${prefix + command} 628916909xxxxxx|Hi`)
                const cpes = args.join(" ")
                const nony = cpes.split("|")[0];
                const pesny = cpes.split("|")[1];
                lolh = `
*| CHAT |*

Message from owner of bot
Number : Privat
Message : *${pesny}*

Untuk Membalas pesan dari owner ketik: 
Report min ytmp3nya error`
                bluz.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
            }
                await m.reply("Success")
            break
            case 'report': {
                m.reply('#report min ignya error')
                //if (isBan) return reply(mess.ban)	 			
                //if (isBanChat) return reply(mess.banChat)
                if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} min ytmp4nya error\n- ${prefix + command} hey dev this user is spamming`)
                teks = `*| REPORT |*`
                teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
                teks2 = `\n\nSuccessfully sent to owner`
                teks3 = `\n\nuntuk membalas bug report kamu cukup ketik #pesanbug 628|nanti kita fix ignya`
                for (let i of owner) {
                bluz.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1 + teks3, mentions:[m.sender]}, {quoted:m})
                }
                bluz.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
             }
             break
            case 'public': {
                if (!isCreator) throw mess.owner
                bluz.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                bluz.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                bluz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'setexif': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Example : ${prefix + command} packname|author`
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
            case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                await bluz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await bluz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await bluz.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'speedtest': {
                m.reply('Testing Speed...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
              let o
              try {
              o = await exec('python speed.py')
              } catch (e) {
              o = e
             } finally {
            let { stdout, stderr } = o
            if (stdout.trim()) m.reply(stdout)
            if (stderr.trim()) m.reply(stderr)
                }
                }
                break
            case 'owner': case 'creator': {
                bluz.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(`https://api.lolhuman.xyz/api/gsmarena?apikey=@nc0kb4j1n64n&query=${text}`)
            console.log(res)
            let { phone_name, rilis, phone_image, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${phone_name}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            bluz.sendImage(m.chat, phone_image, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            bluz.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            bluz.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Aminio Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            bluz.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            bluz.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            bluz.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`},
                {title: "Template Location", rowId: `setmenu templateLocation`, description: `Change menu bot to Template Location`}
                ]
                },
                ]
                bluz.sendListMsg(m.chat, `Please select the menu you want to change!`, bluz.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
    case 'allmenu':
var unicorn = await getBuffer(`https://i.ibb.co/GtNJC11/Text-Pro-me-16302fb3b7f3df.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.allmenu(botname, pushname, ucapanWaktu, prefix, runtime), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(`https://i.ibb.co/Wgpqrsv/Text-Pro-me-16302fddf797ad.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.convertmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(`https://i.ibb.co/NrghnsT/Text-Pro-me-16302fe1c9165e.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.downloadmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'gamemenu':
var unicorn = await getBuffer(`https://i.ibb.co/6PXYhQP/Text-Pro-me-163033fc4b1934.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.gamemenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'grupmenu':
var unicorn = await getBuffer(`https://i.ibb.co/VgxGPW0/Text-Pro-me-16302fd6f15e36.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.grupmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(`https://i.ibb.co/mcvCwwm/Text-Pro-me-1630301075d067.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.randommenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(`https://i.ibb.co/M2dnFzz/Text-Pro-me-16302ffe3012d1.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.searchmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'stickermenu':
var unicorn = await getBuffer(`https://i.ibb.co/M25bx8b/Text-Pro-me-16302fc1ad84ee.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.stickermenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'stickerwibu':
var unicorn = await getBuffer(`https://i.ibb.co/FYB410G/Text-Pro-me-16303006e276b1.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.stickerwibu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'anonymousmenu':
var unicorn = await getBuffer(`https://i.ibb.co/ZB2SNHz/Text-Pro-me-163033c4169836.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.anonymousmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
//RULES
case 'rules':
var unicorn = await getBuffer('https://images.wallpaperscraft.com/image/single/radiation_sign_warning_192115_1600x900.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.rules(pushname), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Donasi 🔖","url": `https://saweria.co/ceria`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "🧾 Sewa","id": 'sewa'}}] )
break
//DONASI
case 'donasi':
var unicorn = await getBuffer('https://cdn.pixabay.com/photo/2014/06/04/16/41/thank-you-362164_960_720.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.donasi(pushname, owner), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Donasi 🔖","url": `https://saweria.co/ceria`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "🧾 Sewa","id": 'sewa'}},{"quickReplyButton": {"displayText": "👤 Administrasi","id": 'owner'}}] )
break
//SEWA
case 'sewa':
var unicorn = await getBuffer('https://images8.alphacoders.com/569/569800.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.sewa(pushname), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Contack Administrasi","url": `https://s.id/sewabot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "📖 Kelebihan Sewa Bot","id": 'kelebihan'}},{"quickReplyButton": {"displayText": "👤 Administrasi","id": 'owner'}}] )
break
//KELEBIHAN
case 'kelebihan':
var unicorn = await getBuffer('https://images.wallpaperscraft.com/image/single/girl_grass_city_213102_1600x900.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.kelebihan(pushname), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Contack Administrasi","url": `https://s.id/sewabot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "🧾 Sewa","id": 'sewa'}},{"quickReplyButton": {"displayText": "👤 Administrasi","id": 'owner'}}] )
break
//TQTQ
case 'tqtq':
var unicorn = await getBuffer('https://c4.wallpaperflare.com/wallpaper/264/666/478/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.tqtq(), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Donasi 🔖","url": `https://saweria.co/ceria`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "🧾 Sewa","id": 'sewa'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    bluz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
