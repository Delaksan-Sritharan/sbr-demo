import React from 'react'

const AddStudents = () => {
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
                        id='firstName' >
                    </input>

                </div>
            </form>

        </div>
    )
}

//ded
export default AddStudents