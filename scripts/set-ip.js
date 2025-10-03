const fs = require('fs');
const os = require('os');
const path = require('path');

function getIPv4StartingWith(subStringIP) {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (net.address.startsWith(subStringIP)) return net.address;
      }
    }
  }
  return null;
}

function main() {


  const COMO_ARRANCA_MI_IP = "10.0.";


  const ip = getIPv4StartingWith(COMO_ARRANCA_MI_IP);
  const port = '3000';
  const url = ip ? `http://${ip}:${port}` : `http://localhost:${port}`;


  const dest = path.join(process.cwd(), 'src', 'config.ts');

  const content = `export const URL_BACKEND = \`${url}\`;`;


  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    fs.writeFileSync(dest, content, { encoding: 'utf8' });
    console.log(`[set-ip] Wrote ${dest} -> ${url}`);
    process.exit(0);
  } catch (err) {
    console.error('[set-ip] Failed to write', err);
    process.exit(1);
  }
}

main();
