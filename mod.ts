import { Denomander } from "./deps.ts";

import example from "./commands/example.ts";

const program = new Denomander({
  app_name: "<CLI_DISPLAY_NAME_HERE>",
  app_description: "<DESCRIPTION_HERE>",
  app_version: "1.0.0",
});

program
  .command("<CLI_SLUG_NAME_HERE>", "<COMMAND_DESCRIPTION_HERE>")
  .alias("<ALIAS_HERE>", "<ALIAS_HERE>")
  .option("<OPTION_HERE>", "<OPTION_DESCRIPTION_HERE>")
  .option("<OPTION_HERE>", "<OPTION_DESCRIPTION_HERE>")
  .action(example);

program.parse(Deno.args);
