import logo from '../integrio-logo.png';
import HeaderData from '../Data/HeaderData';
import '../Styles/Header.scss';

import dropArrow from '../Images/icon_dropdown1.png';
import arrow from '../Images/icon_arrow.png';

function Header() {

    return (
        <div id='Header'>
            <div className='container'>
                <div className='column'>
                    <span className='font-grey tel'>US/Canada <img src={dropArrow} alt='' /></span><span className='ml-1'>+ 1 888 338 76 38</span>
                </div>
                
            </div>
            <div className='container'>
                <div className='column'>
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className='column column-right'>
                    <ul className='main-menu'>
                        {HeaderData.menu.map((item, idx)=>
                            <li key={idx}>
                                <a href='#' className={(item.posticon ? 'posticon ': ' ') + item.class}>
                                    {item.preicon && (
                                        <img className='user' src={item.preicon} />
                                    )}
                                    {item.title} 
                                    {item.posticon && (
                                        <img className='dropdown' src={item.posticon} />
                                    )}
                                </a>
                            </li>
                        )}
                    </ul>                    
                </div>
            </div>
            <div className='hero'>
                <div className='container ptb-6'>
                    <div className='column'>
                        <h1 className='b-word'>Our Customers</h1>
                        <p><button className='btn'>View Case Studies <img className='arrow' src={arrow} alt='' /></button></p>
                    </div>
                    <div className='column column-right'>
                        <div className='partners-container'>
                            {HeaderData.partners.map((item, idx)=>
                                <div className='partner-item' key={idx}>
                                    <img src={item} className='partner-logo' />
                                </div>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;