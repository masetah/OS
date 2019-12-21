import React from 'react';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';

function PageFooter() {
    return (
        <div className='footer'>
        <Footer size="mini">
        <FooterSection type="left" logo="O&S Landscaping 2019">
        <FooterLinkList>
            <a href="https://www.masetaherian.com">Site by Mase T.</a>
            <a href="#">Email:</a>
            <a href="#">Phone: </a>
            <a href="#">Facebook </a>
        </FooterLinkList>
        </FooterSection>
        </Footer>
    </div>    
    )
}

export default PageFooter;