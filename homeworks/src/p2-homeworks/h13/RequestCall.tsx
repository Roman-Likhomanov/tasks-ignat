import React, {useEffect, useState} from 'react';
import {RequestsAPI} from './api';

type PropsType = {
    checked: boolean
}

const RequestCall = (props: PropsType) => {
    const [state, setState] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        RequestsAPI.createRequest({success: props.checked})
            .then((res) => {
                setState(JSON.stringify(res.data))
            })
            .catch((error) => {
                setError((error.response ? error.response.data.errorText : error.message))
            })
    })

    return <div>
        {state && <div>
            <div>Response success</div>
            <div>{state}</div>
        </div>
        }
        {error && <div>
            <div>Response error</div>
            <div>{error}</div>
        </div>
        }
    </div>
}

export default RequestCall