import { qs, delegate } from "../helper.js";
import View from "./View.js";

export default class KeywordView extends View{
    constructor(
        element = qs("#keyword-view"), // 1
        template = new Template() // 2
    ) {
        super(element)
    
        this.template = template
        this.bindEvents()
    }

    show(data = []){
        this.element.innerHTML = data.length > 0 ? this.template.getList(data) : this.template.getEmptyMessage();
        super.show();
    }

    bindEvents(){
        delegate(this.element, 'click', 'li', event => this.handleClick(event));
    }

    handleClick(event){
        const { keyword } = event.target.dataset;
        this.emit('@click', {value: keyword});
    }
}

class Template{
    getEmptyMessage(){
        return '추천 검색어가 없습니다;';
    }
    
    getList(data = []){
        return `<ul class='list'>${data.map(this._getItem).join('')}</ul>`;
    }

    _getItem({id, keyword}){
        return `
            <li data-keyword='${keyword}'>
                <span class="number">${id}</span>
                ${keyword}
            </li>
        `
    }
}