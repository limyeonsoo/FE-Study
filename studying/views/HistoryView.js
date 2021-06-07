import {qs, delegate} from '../helper.js';
import KeywordView from './KeywordView.js';

export default class HistoryView extends KeywordView {
    constructor() {
        super(qs("#history-view"), new Template()) // 1
    }

    bindEvents(){
        delegate(this.element, 'click', 'button.btn-remove', event => this.handleClickRemoveButton(event));
        super.bindEvents();
    }

    handleClickRemoveButton(event){
        const {keyword} = event.target.parentElement.dataset
        this.emit('@remove', {value: keyword});
    }
}

class Template {
    getEmptyMessage() {
        return `검색 이력이 없습니다`
    }
  
    getList(data = []) {
        return `<ul class="list">${data.map(this._getItem).join("")}</ul>`
    }
  
    // 1
    _getItem({ keyword, date }) {
        const formattedDate = date.toLocaleString("ko-KR", {
            hour12: false,
            dateStyle: "short",
            timeStyle: "medium",
        })
        return `
            <li data-keyword="${keyword}">
                ${keyword}
                <span class="date">${formattedDate}</span>
                <button class="btn-remove"></button>
            </li>
        `
    }
}