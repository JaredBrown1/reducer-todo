// {
//     item: 'Learn about reducers',
//     completed: false,
//     id: 3892987589
//   }

export const initialState = [
  {
    item: "Master Javascript",
    completed: false,
    id: new Date()
  }
];

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ADD":
      return {
        ...state,
        completed: !state.completed
      };
    case "ADD_TASK":
      return [
        { item: action.payload, completed: false, id: new Date() },
        ...state
      ];
    case "TOGGLE_COMPLETED":
      let completedItem = state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });
      return completedItem;
    default:
      return state;
  }
};
