import { Tab } from "./views/TabView.js";

class Controller{
    constructor(store, { formView, resultView, tabView, keywordView, historyView}){
        this.store = store;
        this.formView = formView;
        this.resultView = resultView;
        this.tabView = tabView;
        this.keywordView = keywordView;
        this.historyView = historyView;

        this.subscribeViewEvents()
        
    }
    // Store와 View는 서로 알지 못한다. Controller만 알뿐.

    subscribeViewEvents(){
        this.formView
            .on('@submit', event => this.search(event.detail.value))
            .on('@reset', _ => this.reset());

        this.tabView
            .on('@change', event => this.changeTab(event.detail.value));

        this.keywordView
            .on('@click', event => this.search(event.detail.value));

        this.historyView
            .on('@click', event => this.search(event.detail.value))
            .on('@remove', event => this.removeHistory(event.detail.value));
    }

    removeHistory(keyword){
        this.store.removeHistory(keyword);
        this.render();
    }

    changeTab(tab){
        this.store.selectedTab = tab;
        this.render();
    }

    search(keyword){
        this.store.search(keyword);
        this.render();
    }

    reset(){
        this.store.searchResult = []
        this.store.searchKeyword = '';
        this.render();
    }
    renderSearchResult() {
        this.formView.show(this.store.searchKeyword);
        this.tabView.hide();
        this.keywordView.hide();
        this.historyView.hide();
    
        this.resultView.show(this.store.searchResult);
    }
    render(){

        if(this.store.searchKeyword.length > 0){
            return this.renderSearchResult();
        }
        this.resultView.hide();
        this.tabView.show(this.store.selectedTab);

        console.log('render => ', this.store.selectedTab);
        if(this.store.selectedTab === Tab.KEYWORD){
            this.keywordView.show(this.store.getKeywordList());
            this.historyView.hide();
        }else if(this.store.selectedTab === Tab.HISTORY){
            this.keywordView.hide();
            this.historyView.show(this.store.getHistoryList());
        }else{
            throw '사용할 수 없는 탭';
        }
    }
}
export default Controller;