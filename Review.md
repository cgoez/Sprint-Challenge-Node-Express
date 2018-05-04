# Review Questions

## What is Node.js?
    Node.js is a platform that allows you to execute JavaScript outside of a browser, which we have been using to create servers.

## What is Express?
    Express is a framework that is built on top of Node.js used to create web APIs.

## Mention two parts of Express that you learned about this week.
    Route methods: 
        // GET
        server.get('/', (req, res){

        })

        // POST
        server.get('/', (req, res){

        })

    Using custom middleware:
        const exLogger = function (req, res, next) {
            console.log('This has been logged')
            next()
        }    

## What is Middleware?
    Middleware are functions that take an incoming request, process it, and pass it on to the next function or middleware.

## What is a Resource?
    A resource is data that is managed by the API, identified by a URL.

## What can the API return to help clients know if a request was successful?
    Express can send status codes along with an error/message.

## How can we partition our application into sub-applications?
    We can use router middleware to separate resources into separate files which can be later imported to the main server file.

## What is CORS and why do we need it?
    CORS is cross-origin resource sharing, which allows a web page to request data from a domain other the origin
