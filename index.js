const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: "zurnacraft.net",
    port: 25565,
    username: "muratcinar",
    version: "1.19"
  });

  bot.on('login', () => {
    console.log("Bot sunucuya bağlandı ✅ Komutlar 5 saniye arayla gönderilecek...");

    // 1️⃣ /login
    setTimeout(() => {
      bot.chat("/login benbitben");
      console.log("/login komutu gönderildi ✅");
    }, 5000);

    // 2️⃣ /warp afk
    setTimeout(() => {
      bot.chat("/warp afk");
      console.log("/warp afk komutu gönderildi ✅");
    }, 10000);

    // 3️⃣ /shard balance
    setTimeout(() => {
      bot.chat("/shard balance");
      console.log("/shard balance komutu gönderildi ✅");
    }, 15000);

    // 4️⃣ Her dakika /shard pay obbyzz 1
    setTimeout(() => {
      setInterval(() => {
        bot.chat("/shard pay obbyzz 1");
        console.log("/shard pay obbyzz 1 komutu gönderildi ✅");
      }, 60000); // 1 dakika
    }, 15000);
  });

  // Sunucudan gelen chat mesajlarını logla
  bot.on('chat', (username, message) => {
    console.log(`[CHAT] <${username}> ${message}`);
  });

  bot.on('whisper', (username, message) => {
    console.log(`[WHISPER] <${username}> ${message}`);
  });

  // Sunucu bağlantısı koparsa 10 saniye sonra tekrar bağlan
  bot.on('end', () => {
    console.log("Bağlantı koptu, 10 sn sonra tekrar bağlanacak...");
    setTimeout(createBot, 10000);
  });

  // Sunucudan atılırsa tekrar bağlan
  bot.on('kicked', reason => {
    console.log("Sunucudan atıldım:", reason);
    setTimeout(createBot, 10000);
  });

  // Hataları logla
  bot.on('error', err => {
    console.log("Hata:", err.message);
  });
}

// Botu başlat
createBot();
