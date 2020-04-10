"use strict";

import {group} from "node-regroup-ebooks";
import {extractCoverGlobPromise} from "ebook-cover-generator";
import log from "npmlog";

const sourceDirs = ['e:/leeching'];
const targetDir = 'e:/out/__comics_out';
const gmExecutable = 'c:\\Program Files\\GraphicsMagick-1.3.34-Q16\\gm.exe';

async function go() {

  log.level = 'info';
  log.info('comics', 'Starting...');

  let options = {
    sourceDirs: sourceDirs,
    targetDir: targetDir,
    diverseSubDir: '_diverse',
    extraSubDirFirstLetterLowercase: true,
    fixGermanUmlauts: true,
    killSonderzeichen: true,
    silent: true,
  };
  await group(options);


  let res = await extractCoverGlobPromise(
    targetDir + '/**/*.*',
    {
      gmExecutable: gmExecutable,
      forceOverwrite: false,
      quite: true,
      outputs: [{nameExtension: "", dimension: [200, 300]}]
    });

  log.info('comics', '...done.', res);
}

go();
