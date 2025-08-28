export const VisitData = (id: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: "VISIT_STATUS",
        payload: id
    });
};

export const SuggestionVisitData = (id: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: "SUGGEST_VISIT_STATUS",
        payload: id
    });
};

// export const SuggestionVisitData = (id: string) => ({
//     type: "VISIT_STATUS",
//     payload: id
// });


