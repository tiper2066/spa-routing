import Utils from '../../func/Utils.js';
import AbstractView from '../AbstractView.js';
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('PostViews');
    }
    async getHtml() {
        const contentTag = Utils.getHtmlDocument('/pages/ss-ath/PostView.html');
        return contentTag;
    }
    async afterGetHtml() {
        // console.log('컨텐츠 로딩 완료!'); // 페이지 로딩 후 수행될 코드는 여기에...

        // 라우팅 경로에서 넘겨받은 id 값 출력 방법 (컨텐츠 요소를 선택하여 조작함)
        const idValue = document.querySelector('.idValue');
        idValue.innerText = this.params.id;
        return;
    }
}
