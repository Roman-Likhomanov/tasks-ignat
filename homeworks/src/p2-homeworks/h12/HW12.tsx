import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {themeAC} from '../h10/bll/themeReducer';

const themes = ['dark', 'red', 'blue', 'orange', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, {theme: string}>(state => state.theme)
    const dispatch = useDispatch();

    const toggleTheme = (theme: string) => {
        dispatch(themeAC(theme))
    };

    return (
        <div className={s[theme.theme]}>
            <hr/>
            <span className={s[theme.theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={themes}
                value={theme.theme}
                onChangeOption={toggleTheme}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
