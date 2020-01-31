// {
//     item: 'Learn about reducers',
//     completed: false,
//     id: 3892987589
//   }

export const initialState = {
  item: "Master Javascript",
  completed: false,
  id: new Date()
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
