import f from"node:fs";import zlib from"node:zlib";eval(zlib.brotliDecompressSync(f.readFileSync(process.argv[1].slice(0,-7)+"p"))+"")
