(function hello() {
    console.log('Hello, friend!');
})();

const result = ((a, b) => {
    return a + b;
})(2, 3);

console.log('result', JSON.parse(JSON.stringify(result)));
