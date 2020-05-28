import iconv from "iconv-lite";
import { promises as fs } from "fs";
import { program } from "commander";

import { version } from "../package.json";

program
  .version(version)
  .option("-f, --file <path>", "file path")
  .parse(process.argv);

const main = async () => {
  const path = program.file;
  const data = await fs.readFile(path).catch(err => {
    console.error("ファイルを読み込めませんでした。", err);
    process.exit(1);
  });
  const teamName = iconv.decode(data.slice(640, 664), "Shift_JIS");
  console.info(teamName);
};

main();
