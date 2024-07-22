import sharp from 'sharp';
import path from 'path';
import fs from 'fs';


export async function resizeImage(filename: string, width: number, height: number): Promise<string>{
    const inputImagePath = path.join(__dirname, '../../../uploads', filename);
    const outputImagePath = path.join(__dirname, '../../../processed', `${width}x${height}-${filename}`);

    if (!fs.existsSync(inputImagePath)){
        throw new Error('Image does not exist')
    }

    if (fs.existsSync(outputImagePath)){
        return outputImagePath
    }

    await sharp(inputImagePath).resize(width, height).toFile(outputImagePath);

    return outputImagePath;
 
}