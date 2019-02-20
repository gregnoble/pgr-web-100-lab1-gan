import * as $ from "jquery";
import './styles.css';
import { roundToTwoPlaces } from './utils';

const tipAmount = $('#tipAmount');
const totalAmount = $('#totalAmount');
const checkAmount = document.getElementById('checkAmount') as HTMLInputElement; // this is how we did it in class
const percent15btn = $("#15percent");
const percent20btn = $("#20percent");

$('.percentRadio').on('click', (e)=>{
    $('.percentRadio').prop('checked', false).parent().removeClass('active');
    $(e.currentTarget).prop('checked', true).parent().addClass('active');
    calculateStuff();
});

let calculateStuff = function(){
    // get the amount from the check
    
    if(!$.isNumeric(checkAmount.value)){
        $('#checkAmount').addClass('error');
        tipAmount.val(0);
        totalAmount.val(0);
    } else {
        let check:number = parseFloat(checkAmount.value);
        $('#checkAmount').removeClass('error');
        if (percent15btn.is(":checked")){
            tipAmount.val(roundToTwoPlaces(check * .15));
            totalAmount.val(roundToTwoPlaces(check * 1.15));
        } else if (percent20btn.is(":checked")) {
            tipAmount.val(roundToTwoPlaces(check * .20));
            totalAmount.val(roundToTwoPlaces(check * 1.20));
        } else {
            tipAmount.val(roundToTwoPlaces(check * .25));
            totalAmount.val(roundToTwoPlaces(check * 1.25));
        }
    }
}

checkAmount.addEventListener('keyup', calculateStuff);