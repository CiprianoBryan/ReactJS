import React from 'react';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div>
                    <img src={confLogo} alt="Avatar"/>
                    <h1>
                        Bryan <br/> Cipriano</h1>
                </div>
                <div>
                    <p>Backend Engineer</p>
                    <p>@ciprianobryan</p>
                </div>
                <div>
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;