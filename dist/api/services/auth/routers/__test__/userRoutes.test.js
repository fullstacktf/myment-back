"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../../../../server");
const supertest_1 = __importDefault(require("supertest"));
describe('UserRouters', () => {
    beforeEach(() => {
    });
    afterEach(() => {
    });
    test('POST /login empty', () => __awaiter(this, void 0, void 0, function* () {
        const userMock = {};
        const res = yield post(`login`, userMock);
        expect(res.header).toBe(200);
    })),
        test('POST /login undefined', () => {
            const userMock = undefined;
        }),
        test('POST /login misspelling', () => {
            const userMock = {};
        }),
        test('POST /login user', () => {
            const userMock = {
                id: 1,
                first_name: 'Armando',
                last_name: 'de canha',
                username: 'ArmandoDeCanha',
                password: '123456',
                email: 'armando@gmail.com'
            };
        });
});
function post(url, body) {
    const httpRequest = supertest_1.default(server_1.server).post(url);
    httpRequest.send(body);
    httpRequest.set('Accept', 'application/json');
    httpRequest.set('Origin', 'http://localhost:3000');
    return httpRequest;
}
exports.post = post;
//# sourceMappingURL=userRoutes.test.js.map