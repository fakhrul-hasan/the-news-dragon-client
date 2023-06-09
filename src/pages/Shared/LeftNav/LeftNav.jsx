import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsight from '../../Home/EditorsInsight/EditorsInsight';

const LeftNav = () => {
    const [categories, setCategories] = useState();
    useEffect(()=>{
        fetch('http://the-news-dragon-server-tawny.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            <div className='mt-3 ps-3'>
                {
                    categories?.map(category=> <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>
            <EditorsInsight className='d-flex'></EditorsInsight>
        </div>
    );
};

export default LeftNav;