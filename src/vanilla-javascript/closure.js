// function xyz() {
//     return function (a, b) {
//         return a + b;
//     };
// }
//
// const sum = xyz();
// const result = sum(2, 3);
//
// console.log('result', JSON.parse(JSON.stringify(result)));

const Logger = (function () {
    let prefix;
    let suffix;

    function log(message) {
        console.log(`[${now()}] ${prefix}${message}${suffix}`);
    }

    function now() {
        return new Intl.DateTimeFormat('en-GB', {dateStyle: 'full', timeStyle: 'medium'}).format(Date.now());
    }

    return function (_prefix, _suffix) {
        prefix = _prefix;
        suffix = _suffix;

        return {log};
    };
})();

const main = () => {
    const logger = new Logger('user: ', '.');
    logger.log('logged in');
    logger.log('went to dashboard');
    logger.log('changed name');
};

main();
