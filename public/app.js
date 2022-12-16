import { router } from './router/router.js';
import Utils from './func/Utils.js';

let CURRENT_PRODUCT = 'SS-ATH'; // 현재 제품 메뉴 저장 변수 선언

// 실제 페이지 이동하는 함수
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

// 뒤로, 앞으로 가기 이벤트 설정
window.addEventListener('popstate', router);

// 페이지 로딩 완료 후 실행 이벤트
document.addEventListener('DOMContentLoaded', () => {
    // 클릭 이벤트 발생
    document.body.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href'); // 현재 라우팅 경로 추출

        // 라우팅이 지정된 (data-link 속성 포함된) 요소 클릭 시 ----------------
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            // 상단 제품메뉴 클릭 ---- (부모 중에 .product_menu 클래스를 갖는 nav 요소라면...)
            if (
                e.target.closest('nav') &&
                e.target.closest('nav').classList.contains('product_menu')
            ) {
                const menu_name = e.target.textContent.toLowerCase(); // 메뉴명을 소문자로 변경
                const class_name = menu_name.replace('-', '_'); // 메뉴명을 클래스명 처럼 '_' 넣어 변경

                CURRENT_PRODUCT = e.target.textContent.trim(); // 제품명 저장

                Utils.activeSidePanel(class_name); // 선택된 사이드 패널 활성화하기
                Utils.activeSideMenu(e.target, href); // 현재 선택한 메뉴를 활성화
            }
            // 사이드 메뉴 클릭 ---- (부모 중에 .side_menu 클래스를 갖는 nav 요소라면..)
            else if (
                e.target.closest('nav') &&
                e.target.closest('nav').classList.contains('side_menu')
            ) {
                if (href) {
                    Utils.activeSideMenu(e.target, href); // 현재 선택한 메뉴를 활성화
                }
            }
            // 기타 라우팅 메뉴 클릭 시
            navigateTo(e.target.href); // 포함된 경로로 이동한다.
        }
    });
    CURRENT_PRODUCT = Utils.activeSidePanelnMenu(); // 현재 라우팅된 사이드 패널 및 메뉴 활성화
    Utils.activeProdouctMenu(CURRENT_PRODUCT); // 현재 제품 메뉴 활성화
    router(); // 최초 페이지 접속시 홈으로 이동
});
