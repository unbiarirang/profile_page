'use strict'
/*
const
    필요한 모듈 불러오기
*/
function init(app) {
    app.get('/test', (req, res) =>
    res.redirect('./home'));

    app.get('/index', (req, res) =>
    res.render('index', {title: 'ebchoi'})
    );
}

//init 함수 익스포트
exports.init = init;  