/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import Card from "./Card"

import { connect } from "react-redux"

function propriedades(props) {
    const {num} = props
    return (
        <Card title="Sorteio dos números de 0 a N" purple>
            <div>
                <span>
                    <span>Douglas Jardini sua nota é: {num}</span>                    
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

export default connect(mapStateToProps)(propriedades)