module.exports = function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    this.alert('Hmmm, this probably isn\'t a great idea...')
    console.log(this)
    return element;
}

