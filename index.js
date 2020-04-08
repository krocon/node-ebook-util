"use strict";

import {group} from "node-regroup-ebooks";
import {extractCoverGlob} from "ebook-cover-generator";


async function test() {
  const targetDir = 'e:/out/__comics_out';
  let options = {
    sourceDirs: [
      'e:/out/__comics',
    ],
    targetDir: targetDir,
    diverseSubDir: '_diverse',
    extraSubDirFirstLetterLowercase: true,
    fixGermanUmlauts: true,
    killSonderzeichen: true,

    logOnly: false,
    logFileList: './out/00_files.txt',
    logStructure: './out/01_struc.json',
    logDebugList: './out/02_debug.json',
    logActionList: './out/03_actions.json',
  };
  // await group(options);


  extractCoverGlob(
    targetDir + '/**/*.*',
    {
      gmExecutable: 'c:\\Program Files\\GraphicsMagick-1.3.34-Q16\\gm.exe',
      forceOverwrite: false,
      quite: true,
      outputs: [{nameExtension: "", dimension: [200, 300]}]
    });
}

test();
