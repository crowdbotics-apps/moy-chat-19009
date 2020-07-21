import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView1282534Saga from '../features/CalendarView1282534/redux/sagas';
import EmailAuth682524Saga from '../features/EmailAuth682524/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView1282534Saga,
EmailAuth682524Saga,
    
  ]);
}