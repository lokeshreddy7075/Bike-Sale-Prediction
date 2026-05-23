import { Link } from "react-router-dom";

function BikeCard({ bike }) {

  return (

    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      {/* IMAGE */}

      <img

        src={bike.image}

        alt={bike.title}

        className="w-full h-52 object-cover"

      />

      <div className="p-5">

        {/* TITLE */}

        <h2 className="text-2xl font-bold mb-2 text-white">

          {bike.title}

        </h2>

        {/* PRICE */}

        <p className="text-yellow-400 text-2xl font-semibold mb-3">

          ₹ {bike.price}

        </p>

        {/* DETAILS */}

        <div className="flex justify-between text-gray-400 mb-4">

          <span>

            {bike.year}

          </span>

          <span>

            {bike.fuel}

          </span>

        </div>

        {/* BUTTON */}

        <Link to={`/bike/${bike._id}`}>

          <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300">

            View Details

          </button>

        </Link>

      </div>

    </div>
  );
}

export default BikeCard;