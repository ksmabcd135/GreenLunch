import ReactDOM from 'react-dom';
import Card from '../../UI/Card';

const RegisterDialog = () => {
  return (
    <Card>
      <form>
        <label>test</label>
        <input>test</input>
      </form>
    </Card>
  )
}

const AddReservation = () => {
  return (
    <fragment>
      {ReactDOM.createPortal(<RegisterDialog/>,document.getElementById('register-reservation'))}
    </fragment>
  )
}
export default AddReservation;