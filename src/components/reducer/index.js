const initialState = {
  projects: [
    {
      project_name: "Trip1",
      project_leader: "William",
      project_id: 1,

      project_tasks: [
        {
          task_name: "Food",
          info: "We need to figure the situation out who will be cooking",
        },
        {
          task_name: "Games",
          info: "find someone in charge to make games",
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
