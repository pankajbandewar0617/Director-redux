import { put, takeLatest, all, fork } from 'redux-saga/effects';

function* getAllDirector() {
    const url = 'http://localhost:9000/directors'
    const json = yield fetch(url, {
        method: 'GET'
    }).then(response => {
        return response.json()
    });
    // console.log(json)
    yield put({ type: "DATA_RECEIVED", json });
}

function* actionWatcher1() {
    console.log('get all director')
    yield takeLatest("GET_DATA", getAllDirector)
}


function* deleteDirector(data) {
    console.log(data.id)

    const url = `http://localhost:9000/directors/${data.id}/delete`
    const json = yield fetch(url, {
        method: 'DELETE'
    })

    yield put({ type: "DATA_DELETED" });

}

function* actionWatcher2() {
    console.log('delete director')
    yield takeLatest("DELETE", deleteDirector)
}


function* getOneDirector(data) {

    const url = `http://localhost:9000/directors/${data.id}`
    const json = yield fetch(url, {
        method: 'GET'
    }).then(response => {
        return response.json()
    });
    // console.log(json)
    yield put({ type: "ONE_DATA", json })
}

function* actionWatcher3() {
    console.log('get one director')
    yield takeLatest("GET_ONE", getOneDirector)
}

function* addDirector(data) {
    console.log('add director')
    console.log(data)
    const url = 'http://localhost:9000/directors'
    const json = yield fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => {
        return res.json()
    }
    ).catch(err => {
        console.log(err);
    });

    // yield console.log(json)
    // yield put({ type: "ADD DATA", json })

}

function* actionWatcher4() {
    console.log('add director')
    yield takeLatest("ADD_ONE", addDirector)
}

function* editDirector(data) {
    console.log(data)
    const director = { director: data.name }
    console.log(director)
    console.log('edit director')
    const url = `http://localhost:9000/directors/${data.id}/edit`
    // console.log(url)
    const json = yield fetch(url, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(director)
    }).then(res => {
        return res.json()
    }
    ).catch(err => {
        console.log(err);
    });

    // console.log(json)

    yield put({ type: "EDIT DATA", json })

}

function* actionWatcher5() {
    console.log('edit director')
    yield takeLatest("EDIT_ONE", editDirector)
}

export default function* rootSaga() {
    // console.log(434)
    yield all([
        fork(actionWatcher1),
        fork(actionWatcher2),
        fork(actionWatcher3),
        fork(actionWatcher4),
        fork(actionWatcher5)
    ]);
}