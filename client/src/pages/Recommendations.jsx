import { useState } from "react";

import "../styles/Recommendations.css";

function Recommendations() {

  const [budget,setBudget] =
  useState("");

  const [fuel,setFuel] =
  useState("Petrol");

  const [type,setType] =
  useState("Sports");

  const [recommendations,
    setRecommendations] =
  useState([]);

  /* GET RECOMMENDATIONS */

  const handleRecommend = ()=>{

    let bikes = [];

    /* SPORTS */

    if(

      type === "Sports" &&
      budget <= 200000

    ){

      bikes = [

        "Yamaha R15",

        "KTM Duke 200",

        "TVS Apache RTR 310"

      ];

    }

    /* CRUISER */

    else if(

      type === "Cruiser"

    ){

      bikes = [

        "Royal Enfield Classic",

        "Honda Hness",

        "Jawa 42"

      ];

    }

    /* ELECTRIC */

    else if(

      fuel === "Electric"

    ){

      bikes = [

        "Ola S1 Pro",

        "Ather 450X",

        "TVS iQube"

      ];

    }

    /* DEFAULT */

    else{

      bikes = [

        "Honda Shine",

        "Hero Splendor",

        "TVS Raider"

      ];

    }

    setRecommendations(bikes);

  };

  return (

    <div className="recommend-page">

      <div className="recommend-card">

        <h1>

          Smart Bike
          <span>

            Recommendation

          </span>

        </h1>

        {/* BUDGET */}

        <input
          type="number"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e)=>

            setBudget(
              e.target.value
            )

          }
        />

        {/* BIKE TYPE */}

        <select
          value={type}
          onChange={(e)=>

            setType(
              e.target.value
            )

          }
        >

          <option value="Sports">

            Sports

          </option>

          <option value="Cruiser">

            Cruiser

          </option>

          <option value="Mileage">

            Mileage

          </option>

        </select>

        {/* FUEL */}

        <select
          value={fuel}
          onChange={(e)=>

            setFuel(
              e.target.value
            )

          }
        >

          <option value="Petrol">

            Petrol

          </option>

          <option value="Electric">

            Electric

          </option>

        </select>

        {/* BUTTON */}

        <button
          onClick={handleRecommend}
        >

          Get Recommendation

        </button>

        {/* RESULT */}

        {

          recommendations.length > 0 &&

          <div className="recommend-results">

            <h2>

              Recommended Bikes 🚀

            </h2>

            {

              recommendations.map(

                (bike,index)=>(

                  <div
                    key={index}
                    className="bike-box"
                  >

                    {bike}

                  </div>

                )

              )

            }

          </div>

        }

      </div>

    </div>
  );
}

export default Recommendations;