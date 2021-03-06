const os = require("os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;

  const convertBytesToMegaBytes = (bytes) => parseInt(bytes / 1048576);

  const tram = convertBytesToMegaBytes(totalmem()),
    fram = convertBytesToMegaBytes(freemem()),
    usage = tram - fram,
    percentUsage = (usage / tram) * 100;

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${tram} MB`,
    FreeRAM: `${fram} MB`,
    Usage: `${usage} MB`,
    PercentUsage: `${percentUsage.toFixed(2)}%`,
    
  };

  console.clear()
  console.table(stats);

  exports.stats = stats;
}, 1000);
