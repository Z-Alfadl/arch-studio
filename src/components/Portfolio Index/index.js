export const PortfolioIndex = ({project, date, src}) => {
    const windowSize = window.innerWidth;
    let viewPort;
    if (windowSize >= 1440) {
        viewPort = 'desktop';
    } else if (windowSize >= 768 && windowSize < 1440) {
        viewPort = 'tablet';
    } else {
        viewPort = 'mobile'
    }

    return (
        <div className="col-12 col-lg-4 p=0 index">
            <div className="portfolio-image position-relative"
            style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.01%), rgba(0, 0, 0, 40.0%) ),url(${process.env.PUBLIC_URL}/assets/portfolio/${viewPort}/${src})`}}
            >
                <div className="portfolio-title">
                    <h3>{project}</h3>
                    <p>{viewPort}</p>
                </div>
            </div>
        </div>
    )
}

