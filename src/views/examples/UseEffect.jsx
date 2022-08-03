/* useEffect() efeitos colaterais dentro de uma function Callback. que tem um array de depedencia. 
    quais são as depedencias que vão disparar aquela Calback. para gerar o efeito colateral
*/

import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

// UseEffect efeito colateral
const UseEffect = (props) => {
    // Ex #01
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        if (fatorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])

    // Ex #02
    const [status, setStatus] = useState("Ìmpar");
    // Par ou Ìmpar
    useEffect(function () {
        setStatus(number % 2 === 0 ? "Par" : "Ìmpar");
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>

            </div>


        </div>
    )
}

export default UseEffect
