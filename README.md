## Things I used in this project
## Router Components:
BrowserRouter,Routes,Route ,lazy() ,loader()
<Link>,<NavLink>, Best to use CreateBrowserRouter
## Hooks:
useState, useEffect, useContext, useCallback, useMemo, useRef, useParams, useLocaction,custom-hook.
javascript Component:
 Basic components are used in JavaScript.Also used.
Arrow Function, IIFE, Callback function, Async, closures(When I add to card a product but later when increasing or decreasing or deleting again), event ,localstorage, slice(),concat(), Include(), filter(), Slice() , reduce() , window.scrollTo(), js Dom(While doing dark or light mode), etc.

## Route
q. How to build the navigation system in the application
1. <BrowserRouter> :To manage the navigation history of the entire application

2. <Routes>: To render a component for different URL paths
3. <Route>: Which component renders for each URL path

q. Here I used another route in home page? How did I do it? as like hone/about
1. Uses nested routes. I have added other routes (child) in the home page router (parent)
   
q. When going to a page, some data is loading quickly and some data is loading late. I want to show the page data after all the data is loaded together.
solve: lazy()

q. When the user is on the router, The color of that router will be the same, and the color of the rest of the router will be different.

solve: useLocaction()-pathname or It can be used isActively

q.Here the full details of the product are not showing on the jewelers page, if any user wants to see
the full details of the product specifically.

Solve: Here you have to create dynamic route as like /product :id. If you click on the product you want to see full details, an ID will be passed like (product page). Now go to the product page and catch the ID. Get the ID through useparams(). Put the useparams() in a variable and call the function that contains the api and pass this id as an argument.

## hook using:
q.To create dark mode, I had to create states on every page. But if this could be done, creating a global variable and putting the values there would have been more beneficial. Then we could access the values from any file.

Solve. useContext (). Because through the useContext API, we can create a global variable and in this variable we can declare variable object functions.

q. When a page is rendered or the api value changes, get the data of the current api.

Solve. UseEffect is used because UseEffect will be called every time the page is re-rendered and the dependency array changes. As a result new value will be available It would have been more convenient if I had used the loader here. Because my api will be called before the page is rendered. As a result, I will get the data before the page is rendered.


q. We know that the function is called as soon as the page is rendered, but if the value of the state does not change, there is no need to call the function repeatedly. For example, add to cart has 5 data stores. My add to cart function is being called every time I reload the page. If the dependency does not change if the value inside the function does not change. A function should not be called until a value inside the function changes

solve. usecallback() because the first time the usecallback() function will be called then the next time
the function will not be called until the dependency value is changed. No matter how many times I rerender the page. Because the use callback function memorizes the function.Usemomo() could be used here because usemomo() memorizes the value. As long as the dependency value doesn't change because here only I am working with the value



q. In the slider, I want to get the updated or last two data from two api.
Solve. First, using the slice () method, I extracted the last two data. I put two arrays and converted two arrays to an array with concat().Rendered the data by running the map

q. product searching
solve. The value that the user will give to the input and whether the value of the database is checked
through the Include () function, if I match and return that data through filter()

## how to create a pagination:
q.I have done five data from API on fashion page. how did i do
I have assigned the value of how many data to show first. Shared by itemper page with API data.
Then I calculated the current index. I have calculated the end index. I calculated it by showing 5 data
for each page. Slice() method uses

## Add to cart:
The products that I have added to the cart will be a database store. There is no database work here.So localstorage has been used to add to cart localstorage.set items() have been used and used localstorage.get item() to see what has been added

q.How I calculated the total price.

Here I have used the reduce() method because the prices of different products have been combined and summed here. then returned the total sum.


q.If the user is not logged in here, then you will not be able to access Add to Cart. How did I do that

solve. Here I am getting tokens from localstorage and checking if my localstorage has any tokens. If there is a token then give me access to the Add to Cart page. If not, it will be redirected to the login page. I am using useNavigate()
