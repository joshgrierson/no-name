import * as fs from "fs";
import { Hook } from "@oclif/config";

// root directory path
const ROOT_DIR = ".binday";
const GOOGLE_AUTH_TOKEN_PATH = `${ROOT_DIR}/google.auth.token`;
const GOOGLE_CREDENTIALS_PATH = "google.creds.json";

// hook is ran on initializing of cli
const setupHook: Hook<"init"> = async function (options): Promise<void> {
    this.log(`Running setup [${options.config.bin}]`);

    // check for google auth files (token or credentials file)
    if (!fs.existsSync(GOOGLE_AUTH_TOKEN_PATH) && !fs.existsSync(GOOGLE_CREDENTIALS_PATH)) {
        this.error(
            new Error(
                `Doesn't look like your authenticated with google yet,
                and you are missing a ${GOOGLE_CREDENTIALS_PATH} file.
                Please create a ${GOOGLE_CREDENTIALS_PATH} credentials file`
            )
        );
    }

    // if no store folder exists...create it
    if (!fs.existsSync(ROOT_DIR)) {
        fs.mkdirSync(ROOT_DIR);
    }
};

export default setupHook;
