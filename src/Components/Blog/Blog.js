import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="pt-36 grid lg:grid-cols-2 w-4/5 mx-auto gap-6">
        <div className="shadow-xl rounded-xl p-6">
          <h3 className="text-center mb-3    text-xl lg:text-3xl  font-bold">
            What is cors?
          </h3>
          <p className="text-justify p-6">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
            <br />
            For security reasons, browsers restrict cross-origin HTTP requests
            initiated from scripts.This means that a web application using those
            APIs can only request resources from the same origin the application
            was loaded from unless the response from other origins includes the
            right CORS headers.
            <br />
            The CORS mechanism supports secure cross-origin requests and data
            transfers between browsers and servers. Modern browsers use CORS in
            APIs such as XMLHttpRequest or Fetch to mitigate the risks of
            cross-origin HTTP requests.
          </p>
        </div>
        <div className="shadow-xl rounded-xl p-6">
          <h3 className="text-center mb-3    text-xl lg:text-3xl  font-bold">
            How does the private route work?
          </h3>
          <p className="text-justify p-6">
            Rajia The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
            <br />
            Private Route PrivateRoute component is the blueprint for all
            private routes in the application. If the user is logged in, go on
            and display the component in question; otherwise, redirect the user
            to sign-in page. Additionally, we can define the logic of isLogin
            utility function separately in utils folder.
            <br />
            Public Route On the other hand, PublicRoute component is the model
            for all public and restricted routes. The difference between two
            types is defined if restricted props. restricted = false meaning
            that route is public; or else, it is restricted.
          </p>
        </div>
        <div className="shadow-xl rounded-xl p-6">
          <h3 className="text-center mb-3    text-xl lg:text-3xl  font-bold">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p className="text-justify p-6">
            Firebase is a good choice if you want to deploy a working product on
            the cloud rapidly. Plus, as mentioned, you might want to try it out
            if you need a backend but don't have a backend development
            background
            <br />
            Firebase is a less technical and time-saving alternative to writing
            full-fledged backend code for dynamic apps.You might also want to
            consider leveraging this tool if you eventually wish to host and
            manage your app in the cloud. Being serverless, Firebase removes the
            need to worry about the technicalities of cloud server
            configuration. As a Google Cloud service, it also gives you access
            to other Google products and features, like Google Drive and Sheets.
            For instance, you can import dummy data from Google Sheets and use
            it temporarily to serve your app.With Firebase, it's pretty simple
            to connect and use built-in third-party authentication providers,
            including Google, Facebook, Twitter, among others. And if you want
            to use a pre-built authentication UI, you have it at your disposal
            as well. All of these can save you a significant amount of
            development cost, as you don't need to pay as high as developing
            from scratch. Firebase pricing is equally flexible. Although there
            are pay-as-you-go services, you can start on a free plan and use
            primary features if your app is still at its prime.
            <br />
            <br />
          </p>
          <span className="font-semibold">
            Here are the alternatives of Firebase:
          </span>
          <ol className="list-disc pl-8">
            <li>Parse</li>
            <li>Back4App</li>
            <li>MongoBD etc.</li>
          </ol>
        </div>
        <div className="shadow-xl rounded-xl p-6">
          <h3 className="text-center mb-3    text-xl lg:text-3xl  font-bold">
            What is Node? How does Node work?
          </h3>
          <p className="text-justify p-6">
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
            <br />
            just like other languages node comes with packages and modules.
            These are libraries of functions that we can import from npm (node
            package manager) into our code and utilize.
            <br />
            it is asynchronous and single threaded. The single thread is the
            event loop which is responsible for running all functions and
            requests. The asynchronous behavior is extremely important when
            using node, because it guarantees that the event loop is never
            blocked by a synchronous function.Even though there is only one
            event loop, when a request is made the loop passes the request to an
            asynchronous function which does the work. When this function is
            done and a response is returned, it can then be passed back to the
            event loop to be executed by the callback and sent to the user. If
            the functions were synchronous then the event loop would get locked
            up with one clients request and response, and all other clients
            would have to wait till that client was done. Because of the the
            asynchronous nature of JavaScript, the applications using node can
            handle many requests happening at the same time. This means that
            when programming in Node.js it is important to always keep in mind
            that the functions being written are not synchronous. It is also
            very important to catch errors on the server before it is passed
            back to the client. This prevents any errors from getting to the
            event loop which could crash the program and all clients would
            suffer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
