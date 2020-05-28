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

// 識別名が初期値か？
const isMachineNameInitialValue = (buf: Buffer): boolean => {
  const index = buf.indexOf(0xff);
  if (index !== -1) {
    return true;
  }
  return false;
};

const main = async () => {
  const path = program.file;
  const data = await fs.readFile(path).catch(err => {
    console.error("ファイルを読み込めませんでした。", err);
    process.exit(1);
  });
  console.info(
    iconv.decode(deleteCD(data.slice(...map.teamName)), "Shift_JIS")
  );
  console.info(
    iconv.decode(deleteCD(data.slice(...map.ownerName)), "Shift_JIS")
  );

  const machineName1 = deleteCD(data.slice(...map.machineName1));
  if (isMachineNameInitialValue(machineName1)) {
    console.info("初期値");
  } else {
    console.info(iconv.decode(machineName1, "Shift_JIS"));
  }
  const machineName2 = deleteCD(data.slice(...map.machineName2));
  if (isMachineNameInitialValue(machineName2)) {
    console.info("初期値");
  } else {
    const name = iconv
      .decode(machineName2, "Shift_JIS")
      .replace(/\0[\s\S]*$/g, "");
    if (name === "") {
      console.info("初期値");
    } else {
      console.info(name);
    }
  }
  const machineName3 = deleteCD(data.slice(...map.machineName3));
  if (isMachineNameInitialValue(machineName3)) {
    console.info("初期値");
  } else {
    const name = iconv
      .decode(machineName3, "Shift_JIS")
      .replace(/\0[\s\S]*$/g, "");
    if (name === "") {
      console.info("初期値");
    } else {
      console.info(name);
    }
  }
};

main();
