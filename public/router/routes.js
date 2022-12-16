/* ***************** 파일 경로 **************** */

// ------ SS-ATH --------------------------------------
import Dashboard_ATH from '../pages/ss-ath/Dashboard.js';
import Posts_ATH from '../pages/ss-ath/Posts.js';
import PostView_ATH from '../pages/ss-ath/PostView.js';
import Settings_ATH from '../pages/ss-ath/Settings.js';

// ------ SS-IAT --------------------------------------
import Dashboard_IAT from '../pages/ss-iat/Dashboard.js';
import Posts_IAT from '../pages/ss-iat/Posts.js';
import Settings_IAT from '../pages/ss-iat/Settings.js';

// ------ SG-WCA --------------------------------------
import Dashboard_WCA from '../pages/ss-wca/Dashboard.js';
import Posts_WCA from '../pages/ss-wca/Posts.js';
import Settings_WCA from '../pages/ss-wca/Settings.js';

// ------ SA --------------------------------------
import Dashboard_SA from '../pages/sa/Dashboard.js';
import Posts_SA from '../pages/sa/Posts.js';
import Settings_SA from '../pages/sa/Settings.js';

// ------ 기타 --------------------------------------
import NotFound from '../pages/NotFound.js';

/* *****************  페이지 데이터 객체 **************** */
const pages = [
    // ------ SS-ATH --------------------------------------
    { path: '/', view: Dashboard_ATH },
    { path: '/posts', view: Posts_ATH },
    { path: '/posts/:id', view: PostView_ATH },
    { path: '/settings', view: Settings_ATH },

    // ------ SS-IAT --------------------------------------
    { path: '/dashboard_iat', view: Dashboard_IAT },
    { path: '/posts_iat', view: Posts_IAT },
    { path: '/settings_iat', view: Settings_IAT },

    // ------ SG-WCA --------------------------------------
    { path: '/dashboard_wca', view: Dashboard_WCA },
    { path: '/posts_wca', view: Posts_WCA },
    { path: '/settings_wca', view: Settings_WCA },

    // ------ SA --------------------------------------
    { path: '/dashboard_sa', view: Dashboard_SA },
    { path: '/posts_sa', view: Posts_SA },
    { path: '/settings_sa', view: Settings_SA },

    // ------ 기타 --------------------------------------
    { path: '/not_found', view: NotFound }, // 반드시 마지막에 위치애햐 함
];

export { pages };
