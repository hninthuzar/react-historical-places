
import { Places, Suggestions } from '../mock/historical-places';

export interface StateType {
  places: typeof Places;
  suggestions: typeof Suggestions;
}

export const initialState: StateType = {
  places: Places,
  suggestions: Suggestions,
};


export default function reducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case "VISIT_STATUS":
      return {
        ...state,
        places: state.places.map((place) =>
          place.id === payload ? { ...place, visited: !place.visited } : place
        ),
      };

    case "SUGGEST_VISIT_STATUS":
      return {
        ...state,
        suggestions: state.suggestions.map((place) =>
          place.id === payload ? { ...place, visited: !place.visited } : place
        ),
      };

    default:
      return state;
  }
}

