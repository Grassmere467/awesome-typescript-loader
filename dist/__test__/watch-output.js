"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var compile_output_1 = require("./compile-output");
utils_1.spec(__filename, function (env, done) {
    return __awaiter(this, void 0, void 0, function () {
        var index, webpack;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = utils_1.src('index.ts', "\n        export default function sum(a: number, b: number) {\n            return a + b;\n        }\n\n        sum(1, '1');\n    ");
                    utils_1.tsconfig();
                    compile_output_1.config(env);
                    webpack = utils_1.execWebpack(['--watch']);
                    webpack.strictOutput();
                    return [4 /*yield*/, webpack.wait(utils_1.stdout('Webpack is watching the files…'), utils_1.stderr('Checking finished with 1 errors'), utils_1.stdout([
                            'ERROR in [at-loader] ./src/index.ts',
                            "TS2345: Argument of type '\"1\"' is not assignable to parameter of type 'number'"
                        ]))];
                case 1:
                    _a.sent();
                    index.update(function () { return "\n        export default function sum(a: number, b: number) {\n            return a + b;\n        }\n\n        sum(1, 1);\n    "; });
                    return [4 /*yield*/, webpack.wait(utils_1.stdout([
                            [true, '[emitted]'], [false, 'ERROR']
                        ]))];
                case 2:
                    _a.sent();
                    webpack.close();
                    done();
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=watch-output.js.map