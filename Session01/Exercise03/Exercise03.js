const makeUpperCase = (arr) => {
    return new Promise((resolve, reject) => {
        arr = arr.map(x => {
            if (typeof x !== 'string')
                reject('Error: not all items in the array are strings!');
            else if (x !== '')
                return x[0].toUpperCase() + x.slice(1);
            else
                return x;
        });

        resolve(arr);
    });
}

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        arr.forEach(x => {
            if (typeof x !== 'string')
                reject('Error: not all items in the array are strings!');
        });

        resolve(arr.sort());
    });
}

const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true];

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then(res => console.log(res))
    .catch(err => console.log(err));

makeUpperCase(mixedArray)
    .then(sortWords)
    .then(res => console.log(res))
    .catch(err => console.log(err));