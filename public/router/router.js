import { pages } from './routes.js';

const routes = pages; // 전달 받은 라우팅 설정 배열객체 할당

// 경로를 전달받아서 레귤러익스프레션 문자열로 변환
const pathToRegEx = (path) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

// 경로에서 파라미터와 값의 쌍으로 추출하는 함수
const getParams = (match) => {
    const values = match.result.slice(1); // path를 제외한 :id의 값을 배열로 저장
    // 경로에서 /:id/:decode 로 설정했다면 'id', 'decode' 를 배열로 저장
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
        (result) => result[1]
    );
    // 경로에서 key 로 사용된 :id 와 값을 배열객체 로 반환 -- [{ id: 2 }, { decode: 3}]
    return Object.fromEntries(
        keys.map((key, i) => {
            return [key, values[i]];
        })
    );
};

// 라우팅 함수
const router = async () => {
    // 전체 routes 경로를 route 와 result 값의 형태로 바꿔서 모두 저장 : {route: Object, result: ["/posts/2", "2"]}
    const potentialMatches = routes.map((route) => {
        return {
            route: route, // 개별 route 객체
            // 라우트경로를 레귤러익스프레션 문자열로 변경한 후에 현재 주소창 경로와 비교해서 path 와 id 를 분리해서 배열로 반환함
            result: location.pathname.match(pathToRegEx(route.path)), // ["/posts/2", "2"]
        };
    });
    // result 가 존재하면 일치하는 객체값만 반환함 :  {route: Object, result: ["/posts/2", "2"]}
    let match = potentialMatches.find(
        (potentialMatch) => potentialMatch.result !== null
    );
    // result 가 일치하는 것이 없으면 홈 또는 Not found 경로로 설정함
    if (!match) {
        match = {
            route: routes[routes.length - 1], // NotFound 경로 설정 , routes[0]는 홈
            result: ['/not_found'], // 홈일 경우 [location.pathname] 로 설정함
        };
    }
    const view = new match.route.view(getParams(match)); // match 는 배열이므로 추출한 파라미터를 전달하여 라우팅 js 문서의 클래스를 가져옴
    document.querySelector('#app').innerHTML = await view.getHtml(); // 컨텐츠영역에 HTML 적용
    await view.afterGetHtml(); // 컨텐츠 로딩 후 수행할 작업 실행
};

export { router };
