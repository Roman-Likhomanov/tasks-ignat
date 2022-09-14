import {AppStoreType} from '../../h10/bll/store';

export type ActionThemeTypes = ReturnType<typeof themeAC>

const TOGGLE_IS_THEME = 'TOGGLE-IS-THEME'

const initState = {
theme: ''
}

export const themeReducer = (state = initState, action: ActionThemeTypes): {theme: string} => { // fix any
    switch (action.type) {
        case TOGGLE_IS_THEME: {
            return {
                ...state, theme: action.theme
            }
        }
        default: return state
    }
}

export const themeAC = (theme: string) => ({ type: TOGGLE_IS_THEME, theme}) as const
 // fix any

