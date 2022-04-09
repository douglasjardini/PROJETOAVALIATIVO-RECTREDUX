/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Card from "./Card"

import { connect } from "react-redux"

function Propriedades(props) {
    const {num} = props
    return (
        <Card title="Qual a sua nota?" yellow>
            <div>
                <span>Douglas Jardini sua nota é: {num}</span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Propriedades)
