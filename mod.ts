import { Denomander } from "./deps.ts";

import example from "./commands/example.ts";

const program = new Denomander({
  app_name: "Deno CLI starter",
  app_description: "Template for Deno CLI app",
  app_version: "0.0.0",
});

program
  .command("deno-cli-starter", "Display an example message")
  .alias("dcs", "deno-starter")
  .option("-b, --blue", "display the message in blue")
  .action(example);

program.parse(Deno.args);
