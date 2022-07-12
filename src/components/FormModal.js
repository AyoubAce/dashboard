import React from 'react'

const FormModal = ({btnName, renderForm}) => {
  return (
    <div className='modal-container'>
    <button>
    {btnName}
    </button>
    <div className='modal'>
    <form>
        {renderForm && renderForm}
    </form>
    </div>

    </div>
  )
}

export default FormModal