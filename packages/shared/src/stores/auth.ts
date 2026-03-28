import { createStore, createEvent } from 'effector'

export const login = createEvent<string>()
export const logout = createEvent()

export const $username = createStore<string | null>(null)
  .on(login, (_, name) => name)
  .reset(logout)