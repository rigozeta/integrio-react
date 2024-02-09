import AboutData from '../Data/About';
import '../Styles/About.scss'

function About() {
    return (
        <div id='About' className='ptb-6'>
            <div className='container'>
                <div className='column'>
                    <h1>{AboutData.heading}</h1>
                </div>
            </div>
            <div className='container content'>
                <div className='column'>
                    <img src={AboutData.photo} className='img-responsive' alt='About'/>
                </div>
                <div className='column'>
                    {AboutData.description.map((content, idx) => 
                        <p key={idx} dangerouslySetInnerHTML={{ __html: content}} />
                    )}
                </div>
                <div className='column'>
                    <h1 className='rate-value'>{AboutData.rate.value}</h1>
                    <h3>{AboutData.rate.label}</h3>
                </div>
            </div>
        </div>
    );
}

export default About;