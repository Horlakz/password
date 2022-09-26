import fs from "fs";
import path from "path";
import os from "os";

// save password to file
export default function savePassword(password: string) {
  // create file path
  const filePath = path.join(__dirname, "../../", "passwords.txt");

  // write password to file
  fs.open(filePath, "a", 755, (e, id) => {
    fs.write(id, password + os.EOL, null, "utf8", () => {
      fs.close(id, () => {
        console.log("Password saved to passwords.txt".green);
      });
    });
  });
}
