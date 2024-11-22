

import "./index.css"

export default function Card({nome, avaliacao}) {
    return (
        <section className="card">
            <h2> {nome} </h2>
            <p> {avaliacao} </p>
        </section>
    )
}