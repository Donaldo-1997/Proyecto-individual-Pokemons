export default function MessagePopUp ({ show }) {

    // console.log('MessagePopup montado');

    return <>
            <div className={`pop_up_container`}>
                <span className={`pop_up ${show.success ? 'success' : 'fail'}`}>{show.message}</span>
            </div>
    </>
}