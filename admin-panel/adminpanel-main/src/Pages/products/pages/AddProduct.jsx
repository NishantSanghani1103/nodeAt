import React, { useEffect, useRef, useState } from 'react'
import Dropify from '../../../Common/Dropify';
import ProductForm from '../components/ProductForm';
import { toast } from 'react-toastify';
import { getCategoryApi } from '../../category/services/categoryApi';
export default function AddProduct() {
    const [categoryData, setcategoryData] = useState([])
    const [subCategoryData, setsubCategoryData] = useState([])

    const categoryView = async () => {
        try {
            const res = await getCategoryApi()
            setcategoryData(res?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        categoryView()
    }, [])
    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' id='addProduct'>
                {/* <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div> */}
                <div>

                    <ProductForm categoryData={categoryData} setsubCategoryData={setsubCategoryData} subCategoryData={subCategoryData} />
                </div>
            </section>
        </>
    )
}
