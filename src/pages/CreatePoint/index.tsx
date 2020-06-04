import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import logo from "../../assets/logo.svg"

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta logo" />

                <Link to="/">
                    <FiArrowLeft />Voltar para home
                </Link>
            </header>

            <form action="">
                <h1>Cadastro do <br /> Ponto de Coleta</h1>
            </form>
        </div>
    )
}

export default CreatePoint;