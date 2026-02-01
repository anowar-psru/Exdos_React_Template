const CustomBtn = ({text}) => {
    return ( 
        <>
            {/* Primary BTN Here */}
            <a className='primary-btn group'>
                <span className='front-text'>{text}</span>
                <span className='back-text'>{text}</span>
            </a>
        </>
    )
}

export default CustomBtn