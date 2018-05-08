import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    
                    <h1 className="header-logo">
                        Instalura
                    </h1>

                    <ul className="social">
                        <li>
                            <a href="http://facebook.com/instalura">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/instalura">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="http://plus.google.com/instalura">
                                Google+
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}