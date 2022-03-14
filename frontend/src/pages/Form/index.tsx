import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';



function Form() {
    // com esse parametro consigo acessar o número da página.
    const params = useParams();

    return (
       <FormCard movieId={`${params.movieId}`}/>
    );
}
export default Form;