import CaratImpianti from "./CaratImpianti";
import CaratEsterne from "./CaratEsterne";
import CaratInterne from "./CaratInterne";
import CaratUtenze from "./CaratUtenze";
import CaratPrestigio from "./CaratPrestigio";
import CaratAnnessioni from "./CaratAnnessioni";

export const other_caratArray = [
    {
        name: "Caratteristiche interne",
        content:<CaratInterne/>
      },
      {
        name: "Caratteristiche esterne",
        content:<CaratEsterne/>
      },
      {
        name: "Caratteristiche impianti",
        content:<CaratImpianti/>
      },
      {
        name: "Allacciamento utenze",
        content:<CaratUtenze/>
      },
      {
        name: "Caratteristiche di prestigio",
        content:<CaratPrestigio/>
      },
      {
        name: "Unità abitative annesse",
        content:<CaratAnnessioni/>
      }
]