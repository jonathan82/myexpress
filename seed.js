require('dotenv').config();
const userDb = require('./models/user');
const postDb = require('./models/post');
const {randInt} = require('./helpers/utils');
const locs = require('./models/locations').locations;
const db = require('./helpers/db');

const NUM_OF_USERS = 50;
const NUM_OF_POSTS = 200;

async function main() {
    try {
        ///////// Seed the Database with fake users /////////////////
        for (let i = 1; i <= NUM_OF_USERS; i++) {
            const u = {
                username: `test_${i}`,
                email: `test${i}@simba.com`,
                phone: '1234567890',
                password: 'password'
            }

            await userDb.create(u)
        }

        /////////// Seed the Database with fake posts //////////
        for (let i = 0; i < NUM_OF_POSTS; i++) {
            const username = `test_${randInt(1,NUM_OF_USERS+1)}`;
            const area = locs[randInt(0,locs.length)].id;

            await postDb.create(area, area, username, 'this is a test post');    
        }
    } catch (error) {
        console.log(error);
    }
    
}

main();

