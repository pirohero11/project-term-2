import supertest from 'supertest';
import app from '../backend/server';
import { resizeImage } from '../backend/utils/imageProcessor';
// import { uploadImage, addImageToContainer, selectImage, resizeImage2 } from '../../src/frontend/script.js';

const request = supertest(app);

describe('Test endpoint response', () => {
  it('Gets the / endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});

describe('imageProcessor function', () => {
  it('Runs as expected', async () => {
    expect(resizeImage).toBeTruthy();
  });
});

// describe('frontend javascript', () => {
//   it('Tests uploadImage function', async () => {
//     const response = await request.get('http://localhost:3000/api/images/upload');
//     expect(response.status).toBe(200);
//   });
//   // it('adds the Images to their container', async () => {
//   //   const response = await addImageToContainer(__filename);
//   //   expect(response.status).toEqual(__filename);
//   // })
// });
