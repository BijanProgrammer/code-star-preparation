import fetch from 'node-fetch';

const fetchPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
};

const main = async () => {
    const ids = [4, 8, 15, 16, 23, 42];

    console.log('before');

    // ids.forEach(async (id) => {
    //     const data = await fetchPost(id);
    //     console.log(`${id}. ${data.title}`);
    // });

    for (const id of ids) {
        const data = await fetchPost(id);
        console.log(`${id}. ${data.title}`);
    }

    console.log('after');
};

main().then(() => console.log('done!'));
