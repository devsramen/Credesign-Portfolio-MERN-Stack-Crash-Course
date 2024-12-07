import {Fragment} from 'react';

const ToastMessageComponent = ({show, setShow, message}) => {
    return (
        <Fragment>
            <div id="toast" className={`${show?"toast active":"toast"}`}>
                <span className="icon">✔</span>
                <span className="message">{message}</span>
                <span onClick={()=>setShow(false)} className="close">&times;</span>
            </div>
        </Fragment>
    );
};

export default ToastMessageComponent;