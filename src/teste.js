import axios from "axios";

import React from 'react';

const Teste = () => {



    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users')
        .then(function (response) {

            console.log(response);
        })

    return (
        <div>

        </div>
    );
};

export {Teste};




