import { Tab } from './views/TabView.js';

class Store{
    constructor(storage){
        this.storage = storage;

        this.searchKeyword = '';
        this.searchResult = [];

        this.selectedTab = Tab.KEYWORD;
    }

    search(keyword){
        this.searchKeyword = keyword;
        this.searchResult = this.storage.productData.filter(p=>p.name.includes(keyword));

        this.addHistory(keyword);
    }

    getKeywordList(){
        return this.storage.keywordData;
    }
    
    getHistoryList(){
        return this.storage.historyData.sort(this._sortHistory);
    }

    removeHistory(keyword){
        this.storage.historyData = this.storage.historyData.filter(
            history => history.keyword !== keyword
        )
    }

    addHistory(keyword = ''){
        keyword = keyword.trim();
        if(!keyword) return
        
        const hasHistory = this.storage.historyData.some(
            history => history.keyword === keyword
        )
        if(hasHistory) this.removeHistory(keyword);

        const date = new Date();
        this.storage.historyData.push({keyword, date});
    }
}
export default Store;