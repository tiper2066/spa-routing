import Utils from '../func/Utils.js';
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Not Found');
    }
    async getHtml() {
        const contentTag = Utils.getHtmlDocument('/pages/NotFound.html');
        return contentTag;
    }
    async afterGetHtml() {
        // console.log('컨텐츠 로딩 완료!'); // 페이지 로딩 후 수행될 코드는 여기에...
        return;
    }
}
