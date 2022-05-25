import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div className='blog-section'>
            <div className="first-question">
                <h2 className='font-bold text-3xl'>
                    1.What is the difference between javascript and nodejs?
                </h2>
                <ul className="list-disc marker:text ml-20">
                    <li>Keeping component state local where necessary.</li>
                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>Code-splitting in React using dynamic import</li>
                    <li>Windowing or list virtualization in React.</li>
                    <li>Lazy loading images in React.</li>
                </ul>
            </div> <br /><br />
            <div className="second-question">
                <h2>
                    2.What are the differences between sql and nosql databases?
                </h2>
                <table>
                    <tr>
                        <th>SQL</th>
                        <th>NoSQL</th>
                    </tr>
                    <tr>
                        <td>These databases have fixed or static or predefined schema</td>
                        <td>They have dynamic schema</td>
                    </tr>
                    <tr>
                        <td>These databases are not suited for hierarchical data storage.</td>
                        <td>These databases are best suited for hierarchical data storage.</td>

                    </tr>
                    <tr>
                        <td>These databases are best suited for complex queries</td>
                        <td>These databases are not so good for complex queries</td>

                    </tr>
                    <tr>
                        <td>Vertically Scalable</td>
                        <td>Horizontally scalable</td>

                    </tr>
                </table>
                <br />
            </div>
            <div className="third-question">
                <h2 className='font-bold text-3xl'>
                    3.How does prototypical inheritance work?
                </h2>
                <p>
                    JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.
                </p>
            </div>
            <br />
            <div className="third-question">
                <h2 className='font-bold text-3xl'>
                    4.What is a unit test? Why should write unit tests?
                </h2>
                <p>
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                </p>
                <br />
                <p>
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </p>

            </div>
            <br />
            <div className="third-question">
                <h2 className='font-bold text-3xl'>
                    5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h2>
                <p>
                We use the Array.find() method to find the first element that meets a certain condition. Just like the filter method, it takes a callback as an argument and returns the first element that meets the callback condition.
                </p>
                <br />
                <p>
                The syntax for the array.find().The callback is the function that is executed on each value in the array and takes three arguments. 1.element - the element being iterated on (required) 2.index - the index/position of the current element (optional). 3.array - the array that find was called on (optional).
                </p>

            </div>
        </div>
    );
};

export default Blog;