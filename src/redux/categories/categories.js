const SET_CATEGORIES = 'SET_CATEGORIES';

const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export { SET_CATEGORIES, setCategories, categoriesReducer };
