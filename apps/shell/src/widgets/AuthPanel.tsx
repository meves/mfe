import { useUnit } from 'effector-react'

import { $username, login, logout } from "@mfe/shared"

export const AuthPanel = () => {
  const username = useUnit($username)

  return (
    <div>
      {username ? (
        <>
          <p>Привет, ${username}</p>
          <button onClick={() => logout()}>Выйти</button>
        </>
      ) : (
        <button onClick={() => login('Admin')}>Войти</button>
      )}
    </div>
  )
}