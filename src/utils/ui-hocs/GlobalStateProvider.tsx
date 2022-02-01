import React, { createContext, useReducer } from "react";

// By page
export const GlobalStateContext = createContext<{
  state: State;
  dispatch: (payload: any) => any;
  actions: typeof actions | null;
}>({
  state: {
    page1: {
      data: [],
      totalCount: 0,
      page: 0,
    },
    page2: {
      data: [],
      totalCount: 0,
      page: 0,
      isLoading: false,
      isError: false,
    },
  },
  dispatch: (payload: any) => {},
  actions: null,
});
type State = {
  page1: {
    data: { id: string; task: string; complete: boolean }[];
    totalCount: number;
    page: number;
  };
  page2: {
    data: string[];
    totalCount: number;
    page: number;
    isLoading: boolean;
    isError: boolean;
  };
};
const initialState: State = {
  page1: {
    data: [
      {
        id: "a",
        task: "Clean bathroom",
        complete: false,
      },
      {
        id: "b",
        task: "Make breakfast",
        complete: false,
      },
    ],
    totalCount: 0,
    page: 0,
  },
  page2: {
    data: [],
    totalCount: 0,
    page: 0,
    isLoading: false,
    isError: false,
  },
};
type Action =
  | { type: "TO_DO"; payload: { id: string } }
  | { type: "UNDO_TODO"; payload: { id: string } }
  | {
      type: "UPDATE_MARVEL_CHARACTERS";
      payload: { data: string[]; isLoading: boolean; isError: boolean };
    };
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TO_DO":
      return {
        ...state,
        page1: {
          ...state.page1,
          todoList: state.page1.data.map((task) =>
            task.id === action.payload.id ? { ...task, complete: true } : task
          ),
        },
      };
    case "UNDO_TODO":
      return {
        ...state,
        page1: {
          ...state.page1,
          todoList: state.page1.data.map((task) =>
            task.id === action.payload.id ? { ...task, complete: false } : task
          ),
        },
      };
    case "UPDATE_MARVEL_CHARACTERS":
      return {
        ...state,
        page2: {
          ...state.page2,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

const actions = {
  TO_DO: (payload: { id: string }) => ({ type: "TO_DO", payload }),
  UNDO_TODO: (payload: { id: string }) => ({ type: "UNDO_TODO", payload }),
  UDPATE_MARVEL_CHARACTERS: (payload: {
    data: string[];
    isLoading: boolean;
    isError: boolean;
  }) => ({ type: "UPDATE_MARVEL_CHARACTERS", payload }),
};

const GlobalStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>, State>(
    reducer,
    initialState,
    () => initialState
  );
  return (
    <GlobalStateContext.Provider
      value={{
        state,
        dispatch,
        actions,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
