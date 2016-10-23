function getTempCallback (location, callback) {
    //success case: we dont handle error argument
    callback(undefined, 78);
    //error case
    callback('City not found');
}

getTempCallback('Philadelphia', function (err, temp) {
    if (err) {
        console.log('error' err);
    } else {
        console.log('success', temp);
    }
});


function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        resolve(79);
        reject('City not found');
    });
}
