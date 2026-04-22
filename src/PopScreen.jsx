
import './PopScreen.css'

export default function PopScreen(props) {
    
    const msg = 'The Form has submitted successfully';

    return (props.isVisible) ? (
        <div className='pop'>
            <div className='pop_content'>
                <h1 className={props.errorMsg  ? 'errorMsg' : ''}>
                    {props.errorMsg  ? props.errorMsg : msg}
                </h1>
            </div>
        </div>
    ) : <></>;
}

