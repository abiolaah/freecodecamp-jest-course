const fetchData = (callback) => {
    setTimeout(() => {
        callback('peanut butter');
    }, 1000);
}

const fetchPromise = (shouldReject = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(new Error('Error'));
            } else {
                resolve('peanut butter');
            }
        }, 1000);
    });
};

module.exports = {fetchData, fetchPromise}