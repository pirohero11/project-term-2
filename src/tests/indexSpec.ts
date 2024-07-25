import supertest from 'supertest';
import app from '../backend/server';
import { resizeImage } from '../backend/utils/imageProcessor';
import path from 'path';
import { File } from 'buffer';

const request = supertest(app);

describe('Test endpoint response', () => {
  it('Gets the / endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});

describe('imageProcessor function', () => {
  it('Runs as expected', async () => {
    const image: { src: string } = { src: '' };
    image.src = '../../src/frontend/images/icelandwaterfall.jpg'
    expect(resizeImage(image.src.slice(26, 46), 200, 200)).toBeTruthy();
  });
});

