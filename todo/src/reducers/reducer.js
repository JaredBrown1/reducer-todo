export const initialState = {
  item: "Learn React",
  completed: false,
  id: new Date(),
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ADD":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    case "ADD_TASK":
      return [
        { item: action.payload, completed: false, id: new Date() },
        ...state,
      ];
    case "TOGGLE_COMPLETED":
      return state.map((item) => {
        if (item.id === action.payload) {
          console.log(item, "item itself");
          return { ...item, completed: !item.completed };
        }
        console.log(item, "else");
        return item;
      });
    default:
      return state;
  }
};
