import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PlaceDetail from "../components/place-detail/place-detail";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { places, suggestions } = useSelector((state: any) => state.data);

  const place = [...places, ...suggestions].find((p) => p.id.toString() === id);

  const goBack = () => {
    navigate(-1);
  };

  if (!place) {
    return <p>Place not found</p>;
  }

  return (
    <>
      <button type="button" onClick={goBack} className="button mb-5">
        &lt;
      </button>
      <div>
        <PlaceDetail place={place} />
      </div>
    </>
  );
}

export default Details;
