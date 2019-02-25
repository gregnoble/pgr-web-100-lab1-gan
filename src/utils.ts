export function roundToTwoPlaces(amount: number) {
    return amount.toFixed(2);
}

export function matches(el:any, selector:any) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};

export function addClass(el:any,className:string){
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}

export function removeClass(el:any, className:string){
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}