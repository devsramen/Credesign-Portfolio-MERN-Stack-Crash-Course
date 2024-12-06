import {Fragment} from 'react';

const ToastMessage = ({show, message}) => {
    return (
        <Fragment>
            <div id="toast" className={`${show?"toast active":"toast"}`}>
                <span className="icon">✔</span>
                <span className="message">{message}</span>
                <span className="close">&times;</span>
            </div>
        </Fragment>
    );
};

export default ToastMessage;