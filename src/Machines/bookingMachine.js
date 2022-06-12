import { createMachine, assign, actions } from 'xstate';
import { fetchCountries } from '../Utils/api';

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, event) => event.data,
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request'
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};
const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  context: {
    passengers: [],
    selectedCountry: '',
    countries: [],
    error: ''
  },
  states: {
    initial: {
      on: {
        START: {
          target: "search",
          // actions: 'imprimirInicio'//accion mientras pasa la trnasicion
        },
      }
    },
    search: {
      // entry: 'imprimirEntrada',// accion en la entrada transicion
      // exit: 'inprimirSalida',// accion en la salida de la transicion
      on: {
        CONTINUE: {
          target: "passengers",
          actions: assign({
            selectedCountry: (context, event) => event.selectedCountry
          })
        },
        CANCEL: {
          target: 'initial',
          actions: 'resetContext'
        }
      },
      ...fillCountries// secrea u hija
    },
    passengers: {
      on: {
        DONE: {
          target: "tickets",
          cond: "moreThanOnePassenger"
        },
        CANCEL: {
          target: 'initial',
          actions: 'resetContext'
        },
        ADD: {
          target: 'passengers',
          actions: assign((context, event) => context.passengers.push(event.newPassenger))
        }
      }
    },
    tickets: {
      after: {// despues de 5s se mueve a estado initial y se ejecuta el resetContext
        5000: {
          target: 'initial',
          actions: 'resetContext'
        }
      },
      on: {
        FINISH: 'initial',
      }
    },
  },
},
  {
    actions: {
      imprimirInicio: () => console.log('Imprimir inicio'),
      imprimirEntrada: () => console.log('Imprimir Entrada a search'),
      inprimirSalida: () => console.log('Imprimir Salida de search'),
      resetContext: assign({
        passengers: [],
        selectedCountry: '',
      })
    },
    guards: {
      moreThanOnePassenger: (context) => {
        return context.passengers.length > 0;
      }
    }
  }
);
export default bookingMachine;