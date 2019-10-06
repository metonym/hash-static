import fs from 'fs';
import htmlnano from 'htmlnano';
import posthtml from 'posthtml';
import { hash } from 'posthtml-hash';

export interface IHashStaticOptions {
  entry: string; // Entry must be an index.html file
  minify?: boolean; // Default is true
}

const DEFAULT_OPTIONS = { entry: 'dist/index.html', minify: true };

async function hashStatic(options: IHashStaticOptions) {
  const entry = options.entry || DEFAULT_OPTIONS.entry;
  const minify =
    options && 'minify' in options ? options.minify : DEFAULT_OPTIONS.minify;

  if (!fs.existsSync(entry)) {
    throw Error('Entry does not exist.');
  }

  const [path] = entry.split('index.html');
  const plugins = [hash({ path })];

  if (minify) {
    plugins.push(htmlnano());
  }

  const html = fs.readFileSync(entry).toString();
  const result = await posthtml(plugins).process(html);

  fs.writeFileSync(entry, result.html);
  process.stdout.write(`Successfully hashed static assets.\n`);
}

async function hashStaticCli(process: NodeJS.Process) {
  const flags = process.argv.slice(2);
  await hashStatic({ entry: flags[0] });
}

export default hashStatic;
export { hashStatic, hashStaticCli };
