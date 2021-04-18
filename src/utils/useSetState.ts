import { Dispatch, Reducer, useReducer } from 'react';

export function useSetState<State extends object, I>(
  initializerArg: I,
  initializer: (arg: I) => State,
): [State, Dispatch<Partial<State>>];

export function useSetState<State extends object, I>(
  initializerArg: State,
  initializer?: undefined,
): [State, Dispatch<Partial<State>>];

export function useSetState<State extends object, I>(
  initializerArg: I,
  initializer?: (arg: I) => State,
) {
  return useReducer<Reducer<State, Partial<State>>>(
    (state, nextState) => ({ ...state, ...nextState }),
    // @ts-ignore
    initializerArg,
    initializer,
  );
}
