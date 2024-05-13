"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirts(size = "large", text = "i love typescript.") {
    console.log(`creating a ${size} shirt with the message ${text}`);
}
make_shirts();
make_shirts(`medium`);
make_shirts(`small`, `i love  python.`);
