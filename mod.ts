import { Denomander } from "./deps.ts";

import example from "./commands/example.ts";

const program = new Denomander({
  app_name: "Deno CLI starter",
  app_description: "Template for Deno CLI app",
  app_version: "1.0.0",
});

program
  .command("deno-cli-starter", "<TODO>")
  .alias("dcs", "deno-starter")
  .option("<OPTION_HERE>", "<OPTION_DESCRIPTION_HERE>")
  .action(example);

program.parse(Deno.args);
