import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import React, {useEffect, useState} from 'react';
import {RequestsAPI} from './api';
import RequestCall from './RequestCall';

const Request = () => {
    const [checked, setChecked] = useState(false)
    const [request, setRequest] = useState(false)

    const handleRequest = () => {
        setRequest(!request)
    }

    return <div>
        <SuperButton onClick={handleRequest}>Start request</SuperButton>
        <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
        {request && <RequestCall checked={checked}/>}
        <hr/>
    </div>
}

export default Request