const fs = require('fs');
const path = require('path');

async function copyDir(src, dest) {
  try {
    await fs.promises.mkdir(dest, { recursive: true });
    const entries = await fs.promises.readdir(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else {
        await fs.promises.copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error(`Failed to copy ${src} -> ${dest}:`, err.message);
  }
}

(async () => {
  const projectRoot = path.resolve(__dirname, '..'); // e:/.../aviation-b2b-system
  const workspaceRoot = path.resolve(projectRoot, '..'); // parent folder (contains css, js, images...)
  const publicDir = path.join(projectRoot, 'public');

  const itemsToCopy = ['css','js','images','iconfont','fonts','swiper','video'];

  for (const item of itemsToCopy) {
    const src = path.join(workspaceRoot, item);
    const dest = path.join(publicDir, item);
    try {
      const stat = await fs.promises.stat(src);
      if (stat.isDirectory()) {
        console.log(`Copying ${src} -> ${dest}`);
        await copyDir(src, dest);
      } else {
        console.warn(`${src} exists but is not a directory`);
      }
    } catch (err) {
      console.warn(`Source not found: ${src}`);
    }
  }
  console.log('Static copy complete.');
})();
