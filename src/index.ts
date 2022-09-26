import clipboard from "clipboardy";
import "colors";

import generatePassword from "./utilities/generatePassword";
import savePassword from "./utilities/savePassword";

const versionNo = "0.0.1";

const args = process.argv.slice(2);

const options = args.filter((arg) => arg.startsWith("-"));
const flags = args.filter((arg) => !arg.startsWith("-"));

const help = options.includes("-h") || options.includes("--help");
const version = options.includes("-v") || options.includes("--version");
const save = options.includes("-s") || options.includes("--save");
const hasNumbers = options.includes("-nn") || options.includes("--no-numbers");
const hasSymbols = options.includes("-ns") || options.includes("--no-symbols");
const isLowercase = options.includes("-l") || options.includes("--lowercase");

const length = flags[0] ? parseInt(flags[0]) : 8;

// generated password
const password = generatePassword(length, hasSymbols, hasNumbers, isLowercase);

// if user wants to save password
if (save) {
  savePassword(password);
}

if (help) {
  console.log(
    `Generate instant password from your command line and copy to clipboard\n
${"Usage:".bold} password [options] [length]\n
${"Options:".bold}
    <length>    Length of password (default: 8)
    -s, --save    Save password to passwords.txt
    -nn, --no-numbers    Remove numbers
    -ns, --no-symbols    Remove symbols
    -l, --lowercase    Lowercase letters
    -h, --help    Display help for command
    -v, --version    Display cli version`
  );
} else if (version) {
  console.log(`password version ${versionNo}`);
} else {
  // copy to clipboard
  clipboard.writeSync(password);

  // display password
  console.log(`Generated Password: ${password}`);
  console.log(`Password copied to clipboard`.green);
}
