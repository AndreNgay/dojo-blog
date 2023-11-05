import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            id: '1',
            title: 'Introduction to React.js',
            body: 'React.js is a popular JavaScript library for building user interfaces.',
            author: 'Alice Johnson',
        },
        {
            id: '2',
            title: 'Getting Started with Node.js',
            body: 'Node.js is a runtime environment that allows you to run JavaScript on the server-side.',
            author: 'Bob Smith',
        },
        {
            id: '3',
            title: 'The Benefits of Responsive Web Design',
            body: 'Responsive web design ensures that websites look good on all devices.',
            author: 'Charlie Brown',
        },
        {
            id: '4',
            title: 'Tips for Effective Time Management',
            body: 'Learn how to manage your time more efficiently and be productive.',
            author: 'David Lee',
        },
        {
            id: '5',
            title: 'Exploring the Wonders of Space',
            body: 'Discover the mysteries of the universe and the latest space explorations.',
            author: 'Ella Davis',
        },
        {
            id: '6',
            title: 'Delicious Chocolate Cake Recipe',
            body: 'Follow this recipe to make a mouthwatering chocolate cake at home.',
            author: 'Fiona Wilson',
        },
        {
            id: '7',
            title: 'Traveling in Japan: A Cultural Adventure',
            body: 'Explore the rich culture and traditions of Japan through this travel diary.',
            author: 'George Mitchell',
        },
        {
            id: '8',
            title: 'The Science of Climate Change',
            body: 'Learn about the causes and effects of climate change and what we can do to address it.',
            author: 'Ivy Adams',
        },
        {
            id: '9',
            title: 'Mastering the Art of Photography',
            body: 'Capture stunning moments and perfect your photography skills.',
            author: 'Ivy Adams',
        },
    ]);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList blogs={blogs} title={'All Blogs'} handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;