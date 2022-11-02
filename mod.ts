/**
 * @param foo - Description of non obvious parameter
 */

import yargs from 'yargs/deno.ts'
import { Arguments } from 'yargs/deno-types.ts'
// import request from "./request.js"

yargs(Deno.args)
  .command(
    "request <request-config-string>",
    "This command allows you to send a single request to the Pure phone",
    (yargs: Argv) => {
    return yargs.positional('requestConfigString', {
      describe: "it's a stringified RequestConfig, where definition is in pure/src/device.types.ts",
      type: "string",
    })
  }, (argv: Arguments) => {
    console.info(argv)
    //request
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .strictCommands()
  .demandCommand(1)
  .parse()

export default function starter(foo: string): string {
  return foo;
}
