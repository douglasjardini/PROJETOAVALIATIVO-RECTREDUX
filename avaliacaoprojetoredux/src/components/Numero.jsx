/* eslint-disable import/no-anonymous-default-export */
import "./Numero.css"
import React from "react"
import Card from "./Card"
import { connect } from "react-redux"
import {alterarNumero} from "../store/actions/numeros"

function Numero(props) {
    const {num} = props
    return(
        <Card title="Escolha um número" blue>
            <div className="Numero">
                <span>
                    <strong>Número:</strong>
                    <input type="number" value={num}
                    onChange={e => props.alterarNum(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        alterarNum(novoNumero) {
            const action = alterarNumero(novoNumero)
            dispatch(action)
        }
    }
}

function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Numero)