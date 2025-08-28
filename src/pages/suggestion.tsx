import PlaceItem from '../components/place-item/place-item';
import { useDispatch, useSelector } from 'react-redux';
import { SuggestionVisitData } from '../redux/action';
import type { StateType } from '../redux/reducer';
import { useNavigate } from 'react-router-dom';

function Suggestion() {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const suggestions = useSelector((state: { data: StateType }) => state.data.suggestions);

    const toggleVisit = (id: string) => {
        dispatch(SuggestionVisitData(id));
    };

    const goBack = () => {
        navigate(`${import.meta.env.BASE_URL}`);
    };

    return (
        <>
        <button type="button" onClick={goBack} className="button mb-5">
            &lt;
        </button>
            <h1 className="heading1 text-center">Historical Places Suggestions</h1>
            <div>
                {suggestions.map((place) => (
                    <PlaceItem
                        key={place.id}
                        place={place}
                        onToggleVisit={() => toggleVisit(place.id)}
                    />
                ))}
            </div>
        </>
    );
}

export default Suggestion;
