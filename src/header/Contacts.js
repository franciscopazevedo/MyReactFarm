import React from 'react';
import {useState} from 'react';

function Contacts() {

    const initialContactsValue = 'Contacts';
    const numberContactsValue = '800 24 24 24';

        // uso do useState para ter estado e atribuição do estado inicial
    const [insideContacts, setInsideContacts] = useState(initialContactsValue);

        // alterar o valor do estado inicial 
    function ChangeIn(){
        setInsideContacts(numberContactsValue);
    }

        // alterar o valor do estado anterior de volta ao valor do estado inicial
    function ChangeOut(){
        setInsideContacts(initialContactsValue)    
    }

return( 
        // os eventos onMouse Over/Leave sabem quem lida com cada evento
    <h1  onMouseOver={ChangeIn} onMouseLeave={ChangeOut} >
     {insideContacts}
     </h1>
);
}
export default Contacts;