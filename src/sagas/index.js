//rootSaga.js
// import gameSaga from '../containers/Games/sagas';
import appSaga from '../containers/App/sagas';

/**
 * @param {(generator|generator[])}
 */
function* combine(sagas){
    yield Array.isArray(sagas)
        ? sagas.map(saga=>saga())
        : [sagas()]
}

/**
 * @param {...generators}
 */
function* apply(...sagas){
    yield Array.isArray(sagas)
        ? sagas.map(saga=>combine(saga))
        : [combine(sagas)]
}

/**
 * @param {...generators}
 */
function combineSagas(...sagas){
    return function*(){
        yield apply(...sagas)
    }
}

export default combineSagas(
    appSaga,
    // gameSaga
)