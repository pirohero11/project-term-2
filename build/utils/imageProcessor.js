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
exports.resizeImage = resizeImage;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function resizeImage(filename, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        const inputImagePath = path_1.default.join(__dirname, '../../../uploads', filename);
        const outputImagePath = path_1.default.join(__dirname, '../../../processed', `${width}x${height}-${filename}`);
        if (!fs_1.default.existsSync(inputImagePath)) {
            throw new Error('Image does not exist');
        }
        if (fs_1.default.existsSync(outputImagePath)) {
            return outputImagePath;
        }
        yield (0, sharp_1.default)(inputImagePath).resize(width, height).toFile(outputImagePath);
        return outputImagePath;
    });
}
