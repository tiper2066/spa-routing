export default class {
    constructor(params) {
        this.params = params;
    }
    setTitle(title) {
        document.title = 'iSIGN+ 통합 관리도구 | ' + title;
    }
    async getHtml() {
        return '';
    }
    async afterGetHtml() {
        return '';
    }
}
