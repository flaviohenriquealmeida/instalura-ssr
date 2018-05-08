import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import reactLogo from '../images/react.png';
import createAppLogo from '../images/create-react-app.png';
import electroidLog from '../images/electroid.jpeg';

import Header from './Header';
import Footer from './Footer';

export default class About extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container about">

                    <h1 className="text-center title highlight-gradient">SOBRE A APLICAÇÃO</h1>

                    <p className="paragraph">
                        O Instalura foi criado por uma equipe competente utilizando o que há de mais moderno em tecnologia, mas sempre primando pela
                        experiência do usuário.
                    </p>

                    <p className="paragraph">As seguintes tecnologias foram utilizadas:</p>

                    <ul className="technology-list">
                        <li className="technology-item">
                            <a href="#react">
                                <img src={reactLogo} alt="Create React App" />
                            </a>
                        </li>
                        <li className="technology-item">
                            <a href="#create-react-app">
                                <img src={createAppLogo} alt="Create React App" />
                            </a>
                        </li>
                        <li className="technology-item">
                            <a href="#electroid">
                                <img src={electroidLog} alt="Create React App" />
                            </a>
                        </li>
                    </ul>

                    <p>Vejamos algumas características dessas tecnologias</p>

                    <table className="technology-info">
                        <thead>
                            <tr>
                                <th className="highlight-gradient round-edge-let">Tecnologia</th>
                                <th className="highlight-gradient">Caratetísticas</th>
                                <th className="highlight-gradient round-edge-right">Site</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="react">
                                <td>REACT</td>
                                <td>Biblioteca para construção de componentes reutilizáveis</td>
                                <td>
                                    <a href="https://reactjs.org/" target="_blank">
                                        Visitar
                            </a>
                                </td>
                            </tr>
                            <tr id="create-react-app">
                                <td>CREATE REACT APP</td>
                                <td>Crie rapidamente projetos com React</td>
                                <td>
                                    <a href="https://github.com/facebook/create-react-app" target="_blank">
                                        Visitar
                            </a>
                                </td>
                            </tr>
                            <tr id="electroid">
                                <td>ELECTROID</td>
                                <td>Plataforma para criar aplicações universais com React/Node.js</td>
                                <td>
                                    <a href="https://www.electrode.io/" target="_blank">
                                        Visitar
                            </a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="highlight-gradient" colSpan="3"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <Footer />
            </div>
        );
    }
}