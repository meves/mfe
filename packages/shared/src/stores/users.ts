import { createStore, createEvent } from 'effector'

export const setUser = createEvent<string>()
export const $user = createStore<string | null>(null).on(setUser, (_, payload) => payload)
