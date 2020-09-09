import { Command, flags } from "@oclif/command";

class Binday extends Command {
    static description = "";

    static flags = {
        creds: flags.string({ char: "c" }),
    };

    static args = [
        {
            name: "config",
            required: true,
            description: "JSON config file",
        },
    ]

    async run() {
        const { args } = this.parse(Binday);

        this.log(`Config selected: ${args.config}`);
    }
}

export = Binday
