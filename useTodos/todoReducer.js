export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add":
      return [...initialState, action.payload];
    case "[TODO] remove":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] toggle":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });
    default:
      return initialState;
  }
};
