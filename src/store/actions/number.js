export default function numberReducer(state, action) {
    switch (action.type) {
        case 'Adicionar_2_Number':
            return { ...state, number: state.number + 2 }
        case 'Adicionar_Multi7':
            return { ...state, number: state.number * 7 }
        case 'Adicionar_Div25':
            return { ...state, number: state.number / 25 }
        case 'Adicionar_Parseint':
            return { ...state, number: parseInt(state.number) }
        case 'Adicionar_AddN':
            return { ...state, number: state.number + action.payload }

        default:
            return state
    }

}