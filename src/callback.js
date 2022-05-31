import fs from 'fs';
import fsPromises from 'fs/promises';

// const calculator = (a, b, callback) => {
//     console.log('calculating');
//     const result = a + b;
//     callback(result);
// };

const callback = () => {
    fs.readFile('./callback.js', (error, data) => {
        if (error) console.log('error', error);
        else console.log('data', data);
    });
};

const promise = () => {
    const readFilePromise = fsPromises.readFile('./callback.js');
    readFilePromise.then((data) => console.log('data', data));
    readFilePromise.catch((error) => console.log('error', error));
};

const chainedPromise = () => {
    fsPromises
        .readFile('./callback.js')
        .then((data) => console.log('data', data))
        .catch((error) => console.log('error', error));
};

const asyncAwait = async () => {
    try {
        const data = await fsPromises.readFile('./callback.js');
        console.log('data', data);
    } catch (error) {
        console.log('error', error);
    }
};

const main = () => {
    console.log('before');

    callback();
    promise();
    chainedPromise();
    asyncAwait();

    console.log('after');
};

main();
