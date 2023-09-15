import CardDetail from "../Components/CardDetail";
import { useParams } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams();

  return (
    <main className="" >
      <h1>Detail</h1>
      <CardDetail id={id} />
    </main>
  )
}



export default Detail;