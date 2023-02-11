export const Reducer = (BudgetState, action) => {
  switch (action.type) {
    case "set_Budget":
      return action.payload.budget;
    case "creat_BudgetList":
      return [
        ...BudgetState,
        {
          name: action.payload.name,
          cost: action.payload.cost,
          id: Math.floor(Math.random() * 10000),
        },
      ];

      case "Edite_BudgetItem":
        return

      case "Delete_BudgetItem":
            return
      
      case "Search" :
        return
        
    default:
      break;
  }
};
