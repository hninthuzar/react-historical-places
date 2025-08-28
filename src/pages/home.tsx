import PlaceItem from '../components/place-item/place-item';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { StateType } from '../redux/reducer';
import { VisitData } from '../redux/action';

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const places = useSelector((state: { data: StateType }) => state.data.places);

    const goSuggestionPage = () => {
        navigate(`${import.meta.env.BASE_URL}suggestion`);
    };

    const toggleVisit = (id: string) => {
        dispatch(VisitData(id));
    };

    return (
        <>
            <h1 className="heading1 text-center">Historical Places</h1>
            <div className="text-right mb-5">
                <button
                    type="button"
                    onClick={goSuggestionPage}
                    className="button button-info"
                >
                    Suggestion
                </button>
            </div>
            <div>
                {places.map((place) => (
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

export default Home;
