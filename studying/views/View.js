import { emit, on } from '../helper.js'

export default class View{
    constructor(element){
        console.log("[View]", "constructor");

        if(!element) throw 'no element';

        this.element = element;
        this.originalDisplay = this.element.style.display || ""
    }

    hide(){
        this.element.style.display = "none";
        return this;
    }
    show(){
        this.element.style.display = this.originalDisplay;
        return this;
    }
    on(eventName, handler){ // addEventListener()  ->  View가 관리하는 이벤트를 핸들러와 연결.
        console.log("On => ", eventName);
        on(this.element, eventName, handler)
        return this;
    }
    emit(eventName, data){  // dispatchEvent()  ->  View가 관리하는 이벤트를 외부에서 구독.
        emit(this.element, eventName, data);
        return this;
    }
}