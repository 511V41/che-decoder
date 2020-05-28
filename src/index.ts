import iconv from "iconv-lite";
import { promises as fs } from "fs";
import { program } from "commander";

import { version } from "../package.json";
import map from "./map";

program
  .version(version)
  .option("-f, --file <path>", "file path")
  .parse(process.argv);

// なぜかゴミが入ってることがあるので消す
const deleteCD = (buf: Buffer): Buffer => {
  const index = buf.indexOf(0xcd);
  if (index !== -1) {
    return buf.slice(0, index);
  }
  return buf;
};

const main = async () => {
  const path = program.file;
  const data = await fs.readFile(path).catch(err => {
    console.error("ファイルを読み込めませんでした。", err);
    process.exit(1);
  });
  const teamName = iconv.decode(
    deleteCD(data.slice(...map.teamName)),
    "Shift_JIS"
  );
  console.info(teamName);
  const ownerName = iconv.decode(
    deleteCD(data.slice(...map.ownerName)),
    "Shift_JIS"
  );
  console.info(ownerName);
};

main();
