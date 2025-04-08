export function Error({error=false, children}) {
    return ( <p className="modal__form-error" data-error={error}>{children}</p> );
}