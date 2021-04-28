import React from 'react'
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/contenidoInicio';
import HabitacionPreview from '../components/habitacionPreview';
import useHabitaciones from '../hooks/use-habitaciones';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const IndexPage = () => {
  const habitaciones = useHabitaciones();
  // console.log(habitaciones)
  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestras Habitaciones</h2>

      <ul>
        {habitaciones.map(habitacion => (
          <HabitacionPreview 
          
          />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
