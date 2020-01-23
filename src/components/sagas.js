import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchData() {
    const url = 'http://localhost:9000/directors'
    const json = yield fetch(url, {
        method: 'GET'
    }).then(response => {
        return response.json()
    });

    // console.log(json)
    yield put({ type: "DATA_RECEIVED", json });
}

function* actionWatcher() {
    // console.log(8788)
    yield takeLatest("GET_DATA", fetchData)
}

export default function* rootSaga() {
    // console.log(434)
    yield all([
        actionWatcher(),
    ]);
}