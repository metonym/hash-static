import fs from 'fs';
// tslint:disable-next-line: no-implicit-dependencies
import sh from 'shelljs';
import { hashStatic, hashStaticCli } from '../src';

describe('hashStatic', () => {
  beforeEach(() => {
    jest.spyOn(global.console, 'log');
    process.argv = process.argv.slice(0, 2);
  });

  afterEach(() => {
    jest.clearAllMocks();
    sh.rm('-rf', 'tests/fixtures/basic/processed');
  });

  it('throws an error if entry is invalid', () => {
    expect(
      hashStatic({ entry: 'tests/dist/index.html' })
    ).rejects.toMatchObject(
      "[TypeError: Cannot read property 'entry' of undefined]"
    );
  });

  test('hashStatic – matches snapshot (minified)', async () => {
    sh.cp(
      '-r',
      'tests/fixtures/basic/original',
      'tests/fixtures/basic/processed'
    );

    const entry = 'tests/fixtures/basic/processed/index.html';
    await hashStatic({ entry });
    const html = fs.readFileSync(entry).toString();
    expect(console.log).toBeCalledTimes(1);
    expect(html).toMatchSnapshot();
  });

  test('hashStatic – matches snapshot (non-minified)', async () => {
    sh.cp(
      '-r',
      'tests/fixtures/basic/original',
      'tests/fixtures/basic/processed'
    );

    const entry = 'tests/fixtures/basic/processed/index.html';
    await hashStatic({ entry, minify: false });
    const html = fs.readFileSync(entry).toString();
    expect(console.log).toBeCalledTimes(1);
    expect(html).toMatchSnapshot();
  });

  test('hashStaticCli – matches snapshot', async () => {
    sh.cp(
      '-r',
      'tests/fixtures/basic/original',
      'tests/fixtures/basic/processed'
    );

    const entry = 'tests/fixtures/basic/processed/index.html';
    process.argv.push(entry);
    await hashStaticCli(process);
    const html = fs.readFileSync(entry).toString();
    expect(console.log).toBeCalledTimes(1);
    expect(html).toMatchSnapshot();
  });
});
