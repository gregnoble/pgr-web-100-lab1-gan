import './styles.css';
import { addClass, matches, removeClass, roundToTwoPlaces } from './utils';

const tipAmount = document.querySelector('#tipAmount') as HTMLInputElement;
const totalAmount = document.querySelector('#totalAmount') as HTMLInputElement;
const checkAmount = document.getElementById('checkAmount') as HTMLInputElement;
const percent15btn = document.getElementById('15percent');
const percent20btn = document.getElementById('20percent');

function setActiveRadio(event: any) {
    document.querySelectorAll('.percentRadio').forEach((e: any) => {
        removeClass(e.parentElement, 'active');
    });
    addClass(event.currentTarget.parentElement, 'active');
    calculateStuff();
}

document.querySelectorAll('.percentRadio').forEach((e: any) => {
    e.addEventListener('click', setActiveRadio);
});

let calculateStuff = function () {
    if (isNaN(parseFloat(checkAmount.value))) {
        addClass(checkAmount, 'error');
        tipAmount.setAttribute('value', '0');
        totalAmount.setAttribute('value', '0');
    } else {
        let check: number = parseFloat(checkAmount.value);
        removeClass(checkAmount, 'error');

        if (matches(percent15btn, ":checked")) {
            tipAmount.setAttribute('value', roundToTwoPlaces(check * .15));
            totalAmount.setAttribute('value', roundToTwoPlaces(check * 1.15));
        } else if (matches(percent20btn, ":checked")) {
            tipAmount.setAttribute('value', roundToTwoPlaces(check * .20));
            totalAmount.setAttribute('value', roundToTwoPlaces(check * 1.20));
        } else {
            tipAmount.setAttribute('value', roundToTwoPlaces(check * .25));
            totalAmount.setAttribute('value', roundToTwoPlaces(check * 1.25));
        }
    }
}

checkAmount.addEventListener('keyup', calculateStuff);