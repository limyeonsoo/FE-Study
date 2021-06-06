import Controller from './Controller.js';
import Store from './Store.js';
import storage from './storage.js';
import FormView from './views/FormView.js';
import ResultView from './views/ResultView.js';
import TabView from './views/TabView.js';

function main(){
    const store = new Store(storage);
    const views = {
        formView: new FormView(),
        resultView: new ResultView(),
        tabView: new TabView(),
    };
    new Controller(store, views);
}
// 데이터를 담을 Store
// 여러 View를 담을 views
// Store와 View를 담을 Controller

document.addEventListener('DOMContentLoaded', main);
