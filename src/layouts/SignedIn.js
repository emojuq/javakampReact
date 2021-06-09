import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'


export default function SignedIn({signOut}) {
    return (
        <div>
        <Menu.Item>
            <Image avatar spaved="right" src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"/>
            <Dropdown pointing="top left" text="Engin">
             <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info" />
                <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
            </Dropdown.Menu>          
            </Dropdown>
        </Menu.Item>
        </div>
    )
    //12. derste npm install react-router-dom yazıldı cmd'ye 
}
