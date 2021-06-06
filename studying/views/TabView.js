import View from './View.js';
import {qs, qsAll} from '../helper.js';
export default class TabView extends View{
    constructor(){
        console.log('tab view Constructor');

        super(qs("#tab-view"))

        this.template = new Template();
    }

    show(tab){
        this.element.innerHTML = this.template.getTabList();

        qsAll('li', this.element).forEach(li => {
            li.className = li.dataset.tab === tab ? "active" : ""
        })

        super.show();
    }
}

const Tab = {
    KEYWORD: "KEYWORD",
    HISTORY: "HISTORY",
}
const TabLabel = {
    [Tab.KEYWORD]: "추천 검색어",
    [Tab.HISTORY]: "최근 검색어",
}

class Template{

    _getTab({key, label}){
        return `<li data-tab=${key}?>${label}</li>`
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