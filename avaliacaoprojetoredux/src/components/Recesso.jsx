/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Card from "./Card"

import { connect } from "react-redux"

function sorteio(props) {
    const {num} = props
    const aleatorio = parseInt(Math.random() * (num-0)) + 0
    return (
        <Card title="Está chegando..." green>
            <div>
                <span>
                    <span>Estarei de recesso em {num} dias!</span>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(sorteio)