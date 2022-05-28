const numbers = [4, 8, 15, 16, 23, 42];

const users = [
    {name: 'bijan', age: 21},
    {name: 'sina', age: 22},
    {name: 'ali', age: 18},
    {name: 'reza', age: 27},
];

const separator = (name) => {
    console.log();
    console.log('-'.repeat(10), name, '-'.repeat(10));
    console.log();
};

const forEach = () => {
    numbers.forEach((value, index) => {
        console.log(`${index}. ${value}`);
    });
};

const map = () => {
    const names = users.map((user) => {
        return user.name;
    });

    console.log('names', JSON.parse(JSON.stringify(names)));
};

const filter = () => {
    numbers.filter((x) => {
        if (x % 2 === 0) return false;
        else return true;
    });

    numbers.filter((x) => {
        if (x % 2 === 0) return false;
        return true;
    });

    numbers.filter((x) => {
        return x % 2 === 1;
    });

    const oddNumbers = numbers.filter((x) => x % 2 === 1);

    console.log('oddNumbers', JSON.parse(JSON.stringify(oddNumbers)));
};

const findIndex = () => {
    const index = users.findIndex((user) => user.name === 'sina');
    console.log('index', JSON.parse(JSON.stringify(index)));
};

const find = () => {
    const user = users.find((user) => user.name === 'sina');
    console.log('user', JSON.parse(JSON.stringify(user)));
};

const join = () => {
    console.log(numbers.join(', '));
};

const fill = () => {
    // const chiz = [];
    // for (let i = 0; i < 10; i++) chiz.push(i + 1);

    const initialUsers = Array(5).fill({name: 'not set', age: -1});
    initialUsers.fill(null, 1, 4);

    console.log('initialUsers', JSON.parse(JSON.stringify(initialUsers)));
};

const sort = () => {
    const clonedUsers = JSON.parse(JSON.stringify(users));

    clonedUsers.sort((a, b) => {
        return a.age - b.age;
    });

    console.log('clonedUsers', JSON.parse(JSON.stringify(clonedUsers)));
};

const flat = () => {
    const twoDimensionalArray = [[1, 2], [3], [4, 5, 6]];
    const flattedArray = twoDimensionalArray.flat();

    console.log('flattedArray', JSON.parse(JSON.stringify(flattedArray)));
};

const flatMap = () => {
    const sentences = ["it's Sunny in", '', 'California'];
    const words = sentences.flatMap((x) => x.split(' '));

    console.log('words', JSON.parse(JSON.stringify(words)));
};

const main = () => {
    separator('forEach');
    forEach();

    separator('map');
    map();

    separator('filter');
    filter();

    separator('findIndex');
    findIndex();

    separator('find');
    find();

    separator('join');
    join();

    separator('fill');
    fill();

    separator('sort');
    sort();

    separator('flat');
    flat();

    separator('flatMap');
    flatMap();
};

main();
