import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

export const query = graphql`
query($slug: String!){
	allDatoCmsHabitacion(filter:{slug:{eq: $slug}}) {
        nodes{
                titulo
                contenido
            imagen{
                gatsbyImageData
            }
        }
	}
}
`;
const HabitacionTemplate = ({data}) => {
    console.log(data)
    return ( 
        <p>habitacion.jsx</p>
     );
}
 
export default HabitacionTemplate;