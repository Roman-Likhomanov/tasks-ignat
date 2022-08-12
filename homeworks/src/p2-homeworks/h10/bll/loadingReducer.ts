import {AppStoreType} from './store';

export type ActionLoadingTypes = ReturnType<typeof loadingAC>

const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING'

const initState = {
isLoading: false
}

export const loadingReducer = (state = initState, action: ActionLoadingTypes): {isLoading: boolean} => { // fix any
    switch (action.type) {
        case TOGGLE_IS_LOADING: {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({ type: TOGGLE_IS_LOADING, isLoading}) as const
 // fix any

