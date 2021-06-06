class Template{

    getEmptyMessage(){
        return "검색 결과가 없습니다."
    }

    getList(data = []){
        return `<ul class="result">${data.map(this._getItem).join('')}</ul`
    }

    _getItem({name, imageUrl}){
        return `
            <li>
                <img src="${imageUrl}" />
                <p>${name}</p>
            </li>
        `
    }
}
export default Template;