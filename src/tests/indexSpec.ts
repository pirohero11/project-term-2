import supertest from 'supertest';
import app from '../backend/server';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/');
        console.log(response);
        expect(response.status).toBe(200);
        done();
    }
)});