import QuickLinksData from "../Data/QuickLinks";
import '../Styles/QuickLinks.scss'


function QuickLinks() {
    return (
        <div id='QuickLinks' className='ptb-6'>
            <div className='container'>
                {QuickLinksData.map((content, idx)=>
                    <div key={idx} className='column link-category'>
                        <strong>{content.label}</strong>
                        <hr />
                        <ul className='linkList'>
                            {content.links.map((link, idx)=>
                                <li key={idx}><a href='#'>{link}</a></li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuickLinks;