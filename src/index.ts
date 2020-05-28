import iconv from "iconv-lite";
import { promises as fs } from "fs";
import { program } from "commander";

program
  .version("0.0.1")
  .option("-f, --file <path>", "file path")
  .parse(process.argv);

const main = async () => {
  const path = program.file;
  const data = await fs.readFile(path);
  const teamName = iconv.decode(data.slice(640, 664), "Shift_JIS");
  console.info(teamName);
};

main();
