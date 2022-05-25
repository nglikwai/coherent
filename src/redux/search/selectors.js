import { RootState } from '../store'

export const searchResultSelector = (state) => state.search.result

export const isFetchingSelector = (state) => state.search.fetching
