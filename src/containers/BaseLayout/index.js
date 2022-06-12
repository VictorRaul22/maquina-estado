import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '@components/Nav';
import { StepsLayout } from '@container/StepsLayout';
import bookingMachine from '../../Machines/bookingMachine';
import './styles.css';

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log('nuestra maquina', state.value, state.context);

  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </div>
  );
}