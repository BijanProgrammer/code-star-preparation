import fetch from 'node-fetch';

// const sum = (numbers) => {
//     return numbers.reduce((sum, n) => sum + n);
// };

const sum = (...numbers) => {
    return numbers.reduce((sum, n) => sum + n);
};

const advancedFetch = async (protocol, subdomain, domain, ...pathArgs) => {
    const path = pathArgs.join('/');
    const response = await fetch(`${protocol}://${subdomain}.${domain}/${path}`);
    return await response.text();
};

const push = () => {
    const numbers = [4, 8, 15, 16];
    numbers.push(23, 42);

    console.log('numbers', JSON.parse(JSON.stringify(numbers)));
};

const main = async () => {
    const result = sum(2, 3, 5);
    console.log('result', JSON.parse(JSON.stringify(result)));

    const html = await advancedFetch('https', 'playground', 'bijanprogrammer.com', 'internationalization');
    console.log('html', JSON.parse(JSON.stringify(html)));

    push();
};

main().then(() => console.log('Done!'));
