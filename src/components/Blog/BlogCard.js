import { Link } from 'react-router-dom';

import './BlogCard.css';

const BlogCard = ({ id, title, author, category, description, createdAt, updatedAt, images, numViews, likes, dislikes }) => {

    // console.log('id -> ', id);
    // console.log('title -> ', title);
    // console.log('author -> ', author);
    // console.log('category -> ', category);
    // console.log('description -> ', description);
    // console.log('createdAt -> ', createdAt);
    // console.log('updatedAt -> ', updatedAt);
    // console.log('images -> ', images);
    // console.log('numViews -> ', numViews);
    // console.log('likes -> ', likes);
    // console.log('dislikes -> ', dislikes);

    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img
                    alt='blog'
                    className='img-fluid w-100'
                    src={ images ? images : 'images/blog-1.jpg' }
                />
            </div>

            <div className='blog-content'>
                <p className='date'>{ createdAt }</p>
                <h5 className='title'>{ title }</h5>

                <p
                    className='desc'
                    dangerouslySetInnerHTML={ { __html: description?.substr(0, 70) + ((description?.length > 70) ? "..." : " ") } }
                >
                </p>

                {/* <Link to="/blogs/:id" className="button">Read More</Link> */}
                <Link to={`/blogs/${id}`} className="button">Read More</Link>
            </div>

            {/* <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
            </div>

            <div className='blog-content'>
                <p className='date'>2 Jan, 2024</p>
                <h5 className='title'>A beautiful sunday morning renaissance</h5>
                <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis ex ducimus veritatis quibusdam. Consequatur illum unde voluptatum quidem facere!</p>
                <Link to="/blogs/:id" className="button">Read More</Link>
            </div> */}
        </div>
    )
}

export default BlogCard;