import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { editroom } from '../Redux/roomSlice';
import { Navigate } from 'react-router-dom';

function Edit() {
  const dispatch = useDispatch();
  const params = useParams();

  const [id, setid] = useState('');
  const [Name, setName] = useState('');
  const [Place, setPlace] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Address, setAddress] = useState('');
   
  const navigate = useNavigate();
  const location=useNavigate()


  const data = useSelector((state) => state.addToRoomReducer);

  useEffect(() => {

      const findedData = data.filter((item) => item.id === params.id);
      console.log('Found Data:', findedData);
      if (findedData.length > 0) {
        setid(findedData[0].id );
        setName(findedData[0].name );
        setPlace(findedData[0].place );
        setAddress(findedData[0].address);
        setMobile(findedData[0].mobile);
    } 
  }, [data, params.id]);

  const Edit = () => {
    if (id === '' || Name === '' || Place === '' || Address === '' || Mobile === '') {
      alert('Please fill the form');
      
      
    } else {
      const body = {
        id: id,
        name: Name,
        place: Place,
        address: Address,
        mobile: Mobile,
      };
      dispatch(editroom(body));
      alert('Added successfully');
      setName('');
      setMobile('');
      setPlace('');
      setAddress('');
      location('/')

      

    
    }
    
  };

  return (
    <div className='m-5'>
      <FloatingLabel controlId="floatingPassword" label="ID">
        <Form.Control value={id} onChange={(e) => setid(e.target.value)} className="" type="text" placeholder="ID" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Name">
        <Form.Control value={Name} onChange={(e) => setName(e.target.value)} className="mt-2" type="text" placeholder="Name" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Place">
        <Form.Control value={Place} onChange={(e) => setPlace(e.target.value)} className="mt-2" type="text" placeholder="Place" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Mobile">
        <Form.Control value={Mobile} onChange={(e) => setMobile(e.target.value)} className="mt-2" type="text" placeholder="Mobile" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Address">
        <Form.Control value={Address} onChange={(e) => setAddress(e.target.value)} className="mt-2" type="text" placeholder="Address" />
      </FloatingLabel>

      <div className="text-center">
        <button className="btn btn-primary mt-2 w-25" onClick={Edit} >
          Update
        </button>
      </div>
    </div>
  );
}

export default Edit;
