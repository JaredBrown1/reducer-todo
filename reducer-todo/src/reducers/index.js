// {
//     item: 'Learn about reducers',
//     completed: false,
//     id: 3892987589
//   }

export const initialState = {
  item: "Task / Chore",
  completed: false,
  id: Date.time
};

export const titleReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
