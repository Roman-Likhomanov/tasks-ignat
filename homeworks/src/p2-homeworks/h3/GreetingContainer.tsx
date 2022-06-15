import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
    totalU: number
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback, totalU
}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value || e.currentTarget.value === ' ') {
            setError('name is requaier!')
            setName('')
        } else {
            setName(e.currentTarget.value)
            setError('')
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName('')
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }

    const totalUsers = totalU // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
