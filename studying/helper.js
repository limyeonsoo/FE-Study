export function emit(target, eventName, detail){
    const event = new CustomEvent(eventName, { detail });
    target.dispatchEvent(event);
}
export function on(target, eventName, handler){
    target.addEventListener(eventName, handler);
}
export function qs(selector, scope = document) {
    if (!selector) throw "no selector";
  
    return scope.querySelector(selector);
}
export function qsAll(selector, scope = document){
    if(!selector) throw 'no selector';

    return Array.from(scope.querySelectorAll(selector));
}