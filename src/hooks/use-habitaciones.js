// import React from 'react'
import {graphql,useStaticQuery} from 'gatsby';

const useHabitaciones = () => {
    const data = useStaticQuery(graphql`
    query{
        allDatoCmsHabitacion {
            nodes{
                titulo
          id
          slug
          contenido
          imagen {
            gatsbyImageData
            }
        }
      }
    }
    `);

    console.log(data);
    // return ( 
    //     <p>Desde Hook</p>
    //  );
}
 
export default useHabitaciones;