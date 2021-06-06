import View from './View.js';
import {on, qs} from '../helper.js';

class FormView extends View{
    constructor(){
        super(qs("#form-view"))
        this.inputElement = qs('[type=text]', this.element);
        this.resetElement = qs('[type=reset]', this.element);
        this.showResetButton(false);

        this.bindEvents()
    }

    showResetButton(visible = true){
        this.resetElement.style.display = visible ? "block" : "none";
    }

    bindEvents(){
        on(this.inputElement, 'keyup', event => this.handleKeyup(event));
        this.on('submit', event => event.preventDefault());

        on(this.resetElement, 'click', _ => this.handleClickReset());
    }
    
    handleKeyup(event){
        const { value } = this.inputElement;
        this.showResetButton(value.length > 0);

        const ENTER_CODE = 13

        if(value.length === 0){
            this.emit('@resset');
        }
        else if(event.keyCode === ENTER_CODE){
            this.emit('@submit', { value });
        }
    }

    handleClickReset(){
        this.emit('@reset');
    }

}
export default FormView;