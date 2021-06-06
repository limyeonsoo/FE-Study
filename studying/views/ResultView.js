import View from './View.js';
import {on, qs} from '../helper.js';
import Template from '../Template.js';

class ResultView extends View{
    constructor(){
        super(qs("#search-result"))

        this.template = new Template();
    }

    show(data = []){
        this.element.innerHTML = data.length > 0 ? this.template.getList(data) : this.template.getEmptyMessage();

        super.show();
    }
}
export default ResultView;