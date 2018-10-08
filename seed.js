const userDb = require('./models/user');
const postDb = require('./models/posts');

const NUM_OF_USERS = 50;
const NUM_OF_POSTS = 200;

/////////// Seed the Database with fake users /////////////////
for (let i = 1; i <= NUM_OF_USERS; i++) {
    const u = {
        username: `Test${i}`,
        email: `test${i}@simba.com`,
        phone: '1234567890',
        password: 'password'
    }

    await userDb.create(u)
}

/////////// Seed the Database with fake posts //////////
