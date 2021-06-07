import View from './View.js';
import {qs, qsAll, delegate} from '../helper.js';
export default class TabView extends View{
    constructor(){
        console.log('tab view Constructor');

        super(qs("#tab-view"))

        this.template = new Template();
        this.bindEvents()
    }

    bindEvents(){
        delegate(this.element, 'click', 'li', event => this.handleClick(event));
    }

    handleClick(event){
        console.log(event.target);
        console.log(event.target.dataset);
        const value = event.target.dataset.tab;
        this.emit('@change', {value});
    }

    show(tab){
        this.element.innerHTML = this.template.getTabList();

        qsAll('li', this.element).forEach(li => {
            li.className = li.dataset.tab === tab ? "active" : ""
        })

        super.show();
    }
}

export const Tab = {
    KEYWORD: "KEYWORD",
    HISTORY: "HISTORY",
}
const TabLabel = {
    [Tab.KEYWORD]: "추천 검색어",
    [Tab.HISTORY]: "최근 검색어",
}

class Template{

    _getTab({key, label}){
        return `<li data-tab=${key}>${label}</li>`
    }
    getTabList(){
        return`
            <ul class='tabs'>
                ${Object.values(Tab)
                    .map(key => ({ key, label: TabLabel[key] }))
                    .map(this._getTab)
                    .join('')
                }
            </ul>
        `;
    }
}