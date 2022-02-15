#### 1) Set up the redux store and provide to react

- import configureStore
- export store = configureStore with reducer
- render <Provider store={store}>

#### 2) Create a slice of state (department of a store)

- import createSlice
- const initial count
- export counterSlice with the name, initial state, reducers

#### 3) Add reducers to state

- inside the store add counter: counterReducer

#### 4) Use Redux State and Actions in components

- const count = useSelector((state) => state.counter.count)
  - the counter is from the department slice and the count is from the reducer within the department
