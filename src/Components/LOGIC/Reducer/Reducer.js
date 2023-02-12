export const Reducer = (ExpensesState, action) => {
  switch (action.type) {
    case "creat_ExpensesList":

      return [
        ...ExpensesState,
        {
          name: action.payload.name,
          cost: action.payload.cost,
          id: Math.floor(Math.random() * 10000),
        },
      ];

    case "edite_BudgetItem":
      return;

    case "delete_ExpenseItem":
      return ExpensesState.filter((item) => item.id !== action.payload);

    case "search":
      
      const queryString = action.payload.query.toLowerCase();
      const filtered = ExpensesState.filter((item) => {
        const name = item.name;
        return name.toLowerCase().indexOf(queryString) !== -1;
      });

      if (filtered.length === "") {
        return ExpensesState
      }else{
        return filtered
      }

    // case "search":
    //   return action.payload
    default:
      return ExpensesState;
  }
};
