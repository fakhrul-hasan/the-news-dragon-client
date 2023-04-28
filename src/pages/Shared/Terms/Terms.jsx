import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2>Terms & conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam quas, veritatis suscipit neque enim temporibus deserunt optio quod asperiores qui illo, accusamus laboriosam eaque quis perspiciatis laborum facere maiores dolores nostrum aperiam expedita error? Dicta itaque molestiae blanditiis rerum quis natus odio nemo? Libero ipsum porro possimus cumque illo?</p>
            <h6>Go back to <Link to='/register'>Register</Link></h6>
        </div>
    );
};

export default Terms;