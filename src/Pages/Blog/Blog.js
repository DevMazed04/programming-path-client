import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <h2 className="fw-semibold text-black opacity-75 text-center px-4 mt-5 mb-3 mb-sm-3">
        Common React Questions
      </h2>

      <div className="accordion border border-0 mx-auto mt-4 mt-sm-5 my-lg-4 px-4 px-lg-5 rounded nav-width"
        id="accordionExample">
        <div className="accordion-item border border-0 mb-3">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 rounded border"
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
              What is the purpose of React Router?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show rounded-3" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 px-3 text-start">
              <small>
                <b>React Router</b> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                It plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                It is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
              </small>
            </div>
          </div>
        </div>

        <div className="accordion-item border border-0 mb-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 border border-dark border-opacity-10 rounded"
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
              aria-controls="collapseTwo">
              How does Context API works?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 px-3 text-start">
              <small>
                <b>Context API</b> is a new feature added in version 16.3 of React that allows one to share state across the entire app or part of it lightly and with ease. it is a React API that can solve a lot of problems that modern applications face related to state management and how they are passing state to their components. The Context API can be used to share data with multiple components, without having to pass data through props manually.
                React.createContext() is all needed. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. The Context API gives you a dependency injection system based on your component tree. This wasn't possible in React before and it also integrates very well with function components and hooks. As we saw above it was easy to implement encapsulated logic for the translated options with react-intl, which also uses context internally. In situations where you have logic and configuration that needs to be accessed by multiple components but doesn't interact with or depend on external modules, writing your own contexts can be beneficial.
              </small>
            </div>
          </div>
        </div>

        <div className="accordion-item border border-0 mb-5">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 border border-dark border-opacity-10 rounded"
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
              aria-controls="collapseThree">
              Write about useRef in React?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 px-3 text-start">
              <small>
                The <b>useRef</b> Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. This hook accepts one argument, which is the value to initialize the property current in the returned object. In order to use the hook useRef , you will have to import it from the React package first.
                What makes useRef powerful is that it's persisted between renders. It is very similar to useState , but it doesn't cause a component to re-render when changed.
                One of the most common use cases of the hook useRef in React is to reference a DOM element.
                Since every DOM element has a property ref , we can use the hook useRef for setting a ref to that element. The hook useRef is one of the important and useful React hooks that you need to know. It allows you to access DOM elements directly, and persist data between renders without causing a component to re-render infinitely when changes.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;