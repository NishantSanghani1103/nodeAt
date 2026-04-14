import React from 'react'
import Form from '../components/Form'
import Table from '../components/Table'

export default function UserForm() {
    return (
        <div className="container mt-5">
            <div className="row">

                {/* LEFT SIDE - FORM */}
                <div className="col-md-5">
                    <Form />
                </div>

                {/* RIGHT SIDE - TABLE */}
                <div className="col-md-7">
                    <Table />
                </div>

            </div>
        </div>
    )
}
