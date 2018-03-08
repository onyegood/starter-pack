function handleItems(state = {all: []}, action) {
  switch (action.type) {
    case 'FIND_ALL_ITEMS_DONE':
        return {
          all: action.result.data
        }
      case 'CREATED_ITEM':
        return {
          all: [action.item, ...state.all]
        }
      case 'UPDATED_ITEM':
        let newData = [];
        for (const item of state.all) {
         if (item.id === action.item.id) {
           newData.push(action.item)
         }else {
           newData.push(item)
         }
        }
        return {
            all: newData
        }

    default:

  }
}
