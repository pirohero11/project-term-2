"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../backend/server"));
const imageProcessor_1 = require("../backend/utils/imageProcessor");
// import { uploadImage, addImageToContainer, selectImage, resizeImage2 } from '../../src/frontend/script.js';
const request = (0, supertest_1.default)(server_1.default);
describe('Test endpoint response', () => {
    it('Gets the / endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
    }));
});
describe('imageProcessor function', () => {
    it('Runs as expected', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(imageProcessor_1.resizeImage).toBeTruthy();
    }));
});
describe('frontend javascript', () => {
    it('Tests uploadImage function', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('http://localhost:3000/api/images/upload');
        expect(response.status).toBe(200);
    }));
    // it('adds the Images to their container', async () => {
    //   const response = await addImageToContainer(__filename);
    //   expect(response.status).toEqual(__filename);
    // })
});
