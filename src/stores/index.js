import { createStore } from 'redux'
import rootReducer from '../reducers'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

//key 로컬스토리지에 persist:counter2 생성됨
// storage 웹의 스토리지
// whitelist 여러개중 해당 리듀서만 저장
// blacklist: 해당 리듀서만 제외하고 저장
const persistConfig = {
  key: 'diaryData',
  storage,
  // whitelist: ['test'],
  // blacklist: ['counter'],
}

//persistConfig가 추가된 리듀서 반환
const enhancedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const store = createStore(enhancedReducer)
  //새로고침에도 지속될 스토어 생성
  const persistor = persistStore(store)

  return { store, persistor }
}
