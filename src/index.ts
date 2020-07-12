import { program } from "commander";
import { isNode } from "browser-or-node";
import { version } from "../package.json";

import main from "./decoder";

if (isNode) {
  program
    .version(version)
    .option("-f, --file <path>", "file path")
    .parse(process.argv);
  main();
}

export default main;
