import React from 'react';
import {Link} from 'react-router-dom';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';

function PageFooter() {
    return (
        <div className='footer'>
        <Footer size="mini">
        <FooterSection type="left" logo="O&S Landscaping 2019">
        <FooterLinkList>
            
            <a href="tel:972-268-2450">(972) 268-2450 </a>
            <a href="mailto:os_landscaping@yahoo.com">os_landscaping@yahoo.com</a>
            <a href="http://www.masetaherian.com" target='_blank'>Site by Mase T.</a>
            
        </FooterLinkList>
        </FooterSection>
        </Footer>
    </div>    
    )
}

export default PageFooter;