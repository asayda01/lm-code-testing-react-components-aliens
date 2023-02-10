export interface interfaceErrorMessageProps {
    
    errorMessage: string | undefined;

};

const ErrorMessage : React.FC<interfaceErrorMessageProps> = ({ errorMessage }) => {

    return (

        <p className="errorMessage">{errorMessage}</p>

    );
};

export default ErrorMessage;