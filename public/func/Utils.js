const Utils = {
    // html 문서 읽어오기
    getHtmlDocument: async (path) => {
        const html = await fetch(path).then((response) => response.text());
        return html;
    },

    // 선택된 사이드 패널 활성화하기 함수
    activeSidePanel: (class_name) => {
        const sidePanels = document.querySelectorAll('.side_menu'); // 모든 사이드 패널 선택

        sidePanels.forEach((sidePanel) => {
            if (sidePanel.classList.contains(class_name)) {
                sidePanel.classList.remove('hide');
            } else {
                sidePanel.classList.add('hide');
            }
        });
    },

    // 선택된 사이드 메뉴 활성화하기 함수
    activeSideMenu: (crr_nav, selectHref) => {
        const nav = crr_nav.closest('nav'); // 현재 활성화된 메뉴 패널 선택
        const links = nav.querySelectorAll('a');

        links.forEach((link) => {
            if (link.getAttribute('href') === selectHref) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    // 현재 주소에서 라우팅 경로만 추출하기
    extractRoutePath: (crr_url) => {
        const pos1 = crr_url.indexOf('/');
        const pos2 = crr_url.indexOf('/', pos1 + 1);
        const pos3 = crr_url.indexOf('/', pos2 + 1);
        const pos4 = crr_url.indexOf('/', pos3 + 1);
        let extractPath; // 라우팅 경로 담을 변수 선언

        if (pos4 === -1) {
            // 만일 :id 값이 없는 라우팅 경로라면..
            extractPath = crr_url.slice(pos3); // 3번째 '/' 위치찾아서.. 추출
        } else {
            // 만일 :id 값이 있는 라우팅 경로라면..
            extractPath = crr_url.slice(pos3, pos4); // 4번째 '/' 위치찾아서.. 3 ~ 4사이의 값을 추출
        }

        if (extractPath.indexOf('#') > -1) {
            extractPath = extractPath.replace('#', ''); // '#' 이 포함되었다면 제거함
        }
        return extractPath;
    },

    // 현재 주소에서 추출된 경로로 사이드 패널 활성화 하는 함수 (새로 고침 시 필요)
    activeSidePanelnMenu: () => {
        const extPath = Utils.extractRoutePath(window.location.href); // 현재 주소에서 라우팅 경로만 추출
        const linkMenus = document.querySelectorAll('.side_menu [data-link]'); // 모든 링크 메뉴 선택
        let product_name; // 제품명을 담을 변수 선언
        // 현재 주소창 링크 경로와 메뉴의 라우팅 경로가 같다면.. 해당 사이드 패널을 표시한다.
        linkMenus.forEach((linkMenu) => {
            if (linkMenu.getAttribute('href') === extPath) {
                linkMenu.closest('nav').classList.remove('hide'); // 사이드 패널 표시
                const ul = linkMenu.parentElement.parentElement; // 현재 사이드 패널의 ul 선택
                const links = ul.querySelectorAll('[data-link]'); // 현재 사이드 패널의 모든 메뉴 선택
                links.forEach((link) => {
                    // 현재 링크 경로와 라우팅 경로가 같은 메뉴라면..
                    if (link.getAttribute('href') === extPath) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                // 현제 활성화된 제품 메뉴에서 메뉴명 추출
                product_name = linkMenu.closest('nav').getAttribute('class'); // 활성 사이드 패널에서 클래스 추출
                product_name = product_name.split(' ')[1]; // 클래스를 배열로 변경
                product_name = product_name.toUpperCase().replace('_', '-');
            }
        });
        return product_name; // 현제 활성화 된 제품명 반환
    },

    activeProdouctMenu: (curr_product_name) => {
        // 모든 제품 메뉴 선택
        const productNames = document.querySelectorAll(
            '.product_menu [data-link]'
        );
        productNames.forEach((productName) => {
            // 현재 활성화 제품명과 같다면...
            if (productName.textContent.trim() === curr_product_name) {
                productName.classList.add('active'); // 제품 메뉴 활성화
            } else {
                productName.classList.remove('active'); // 제품 메뉴 비활성화
            }
        });
    },
};

export default Utils;
