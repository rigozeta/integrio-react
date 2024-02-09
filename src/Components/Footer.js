import '../Styles/Footer.scss';

import tw from '../Images/icon_tw.png';
import fb from '../Images/icon_fb.png';
import linkedin from '../Images/icon_li.png';

function Footer() {
    return (
        <div id='Footer'>
            <div className='container'>
                <div className='column footerSection'>
                    <ul>
                        <li>F: 1-888-DEV-SOFT (338-7638)</li>
                        <li>P: +1 778 881 4161</li>
                        <li>E: info@integrio.net</li>
                    </ul>
                </div>
                <div className='column footerSection'>
                    <span className='font-grey'>&copy; 2021 Integrio Systems. All rights reserved.</span>
                </div>
                <div className='column footerSection'>
                    <ul>
                        <li><a href='#'><img src={tw} alt='twitter' /></a></li>
                        <li><a href='#'><img src={fb} alt='facebook' /></a></li>
                        <li><a href='#'><img src={linkedin} alt='linkedin' /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;