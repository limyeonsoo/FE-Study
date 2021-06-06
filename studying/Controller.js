class Controller{
    constructor(store, { formView, resultView }){
        this.store = store;
        this.formView = formView;
        this.resultView = resultView;
        
        this.subscribeViewEvents()
        
    }
    // Store와 View는 서로 알지 못한다. Controller만 알뿐.

    subscribeViewEvents(){
        this.formView
            .on('@submit', event => this.search(event.detail.value))
            .on('@reset', _ => this.reset());
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

    render(){
        if(this.store.searchKeyword.length > 0){
            return this.resultView.show(this.store.searchResult);
        }
        this.resultView.hide();
    }
}
export default Controller;