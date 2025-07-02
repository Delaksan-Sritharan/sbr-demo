import { useState } from 'react'

const AddStudents = () => {
    const [student, setStudent] = useState({
        firstName: '',
        LastName: '',
        email: '',
        depatment: ''
    })

    const { firstName, LastName, email, depatment } = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    return (
        <div className='col-sm-8 py-2 px-5'>
            <form>
                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='firstName'
                    >First Name</label>
                    <input className='form-control col-sm-6'
                        type='text'
                        name='firstName'
                        id='firstName'
                        required
                        value={firstName} />
                </div>
                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='LastName'
                    >Last Name</label>
                    <input className='form-control col-sm-6'
                        type='text'
                        name='LastName'
                        id='LastName'
                        required
                        value={LastName} />
                </div>
                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='email'
                    >Email</label>
                    <input className='form-control col-sm-6'
                        type='text'
                        name='email'
                        id='email'
                        required
                        value={email} />
                </div>
                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='depatment'
                    >Depatment</label>
                    <input className='form-control col-sm-6'
                        type='text'
                        name='depatment'
                        id='depatment'
                        required
                        value={depatment} />
                </div>


            </form >

        </div >
    )
}

export default AddStudents