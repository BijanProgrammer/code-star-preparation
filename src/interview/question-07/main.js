// mocked method
const first = () => {
    return new Promise((resolve) => setTimeout(() => resolve(1), 100));
};

// mocked method
const second = () => {
    return new Promise((resolve) => setTimeout(() => resolve(2), 200));
};

// mocked method
const third = () => {
    return new Promise((resolve) => setTimeout(() => resolve(3), 300));
};

const main = async () => {
    const a = await first();
    const b = await second();
    const c = await third();

    const result = a + b + c;

    console.log(`result: ${result}`);
};

main().then(() => console.log('Done!'));
