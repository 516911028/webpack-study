import _ from 'lodash';
import './css/index.css';
import Data from './test.csv';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

console.log(Data);
document.body.appendChild(component());