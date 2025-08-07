![App Screenshot](https://i.ibb.co/RGSrhdTp/b2bridge-transparent.png)

# B2B wholesale platform - (B2Bridge)

In this Web App, you can post a product for sale and also buy a product.

## Live Link

- Please Visit [B2Bridge](https://rad-daffodil-39264b.netlify.app/) !


## 🚀 Key Features of B2Bridge

- 🛒 **B2B Wholesale Marketplace**  
  Connects manufacturers, brands, and wholesalers with retailers and bulk buyers in a streamlined online selling platform.

- 🔍 **Smart Product Filtering**  
  Easily filter products by category, brand, rating, price, and more to quickly find exactly what you're looking for.

- 🔐 **JWT Authentication System**  
  All private routes are protected using JSON Web Tokens (JWT), with support for email/password and Google sign-in.

- 👥 **User Role Detection in Navbar**  
  Dynamically shows or hides options in the navigation bar based on whether the user is logged in or not.

- 📦 **View Product Details with Order Modal**  
  See full product specifications and open a modal to place orders with quantity selection and minimum validation.

- 📉 **Real-Time Inventory Update**  
  Product quantities are instantly updated in MongoDB using `$inc` during orders or when products are removed from cart.

- ➕ **Add New Products Easily**  
  Authenticated users can add detailed product listings including image, price, brand, category, and quantity.

- ✏️ **Edit Products (Any User)**  
  Any logged-in user can edit any product, updating fields like category, rating, price, description, and more.

- 🛒 **Cart with Stock Reversal**  
  Items removed from the cart will restore stock to the product in the database using secure MongoDB updates.

- 🔄 **Card/Table View Toggle for Products**  
  Users can toggle between a grid-based card view and a table view to browse all listed products more efficiently.

- 🎯 **Show Products with High MOQ**  
  A special filter shows only products with a minimum selling quantity over 100, ideal for large-scale buyers.

- 📱 **Responsive UI Design**  
  Built with Tailwind CSS and DaisyUI to ensure optimal experience on both mobile and desktop devices.

- 🧠 **Dynamic Page Titles**  
  Each page dynamically updates the browser tab title to reflect the current view, improving navigation and SEO.

- ⚠️ **Custom 404 Error Page**  
  Clean and branded error page when users access undefined routes, with an option to return to the home page.

- 🔔 **SweetAlert & Toast Notifications**  
  Provides user feedback for key actions like login, logout, add/edit product, and form errors using alert/toast libraries.


## npm packages in Server Side


- Use [node.js](https://nodejs.org/) for server-side scripting and building web applications.
- Uses [express](https://expressjs.com/) to build web applications and APIs easily with routing, middleware, and request handling.
- Uses [nodemon](https://nodemon.io/) for automatically restarts a Node.js application when file changes are detected during development.
- Uses [cors](https://expressjs.com/en/resources/middleware/cors.html) for enabling controlled access to resources from different origins in web applications.
- Uses [dotenv](https://dotenvx.com/) environment variables from a .env file into process.env for secure configuration management.
- Uses [MongoDB](https://www.mongodb.com/)  for storing, querying, and managing large volumes of flexible, JSON-like data in web and mobile applications.
- Uses [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) for hosting, managing, and scaling MongoDB databases in the cloud securely.
- Uses [cookie-parser](https://www.npmjs.com/package/cookie-parser) in Express to parse and manage cookies from incoming client requests easily.
- Uses [JWT](https://jwt.io/) to securely transmit user authentication data between client and server in web applications.
- Uses [Vercel](https://vercel.com/) for deploying, hosting, and scaling frontend web applications with speed, simplicity, and automation.


## Technologies Used

- ![Node.js](https://img.shields.io/badge/nodedotjs-v22.12.0-155dfc?logo=nodedotjs&logoColor=%235FA04E)
- ![Express](https://img.shields.io/badge/Express-v5.1.0-155dfc?logo=express&logoColor=%23000000)
- ![Mongodb](https://img.shields.io/badge/mongodb-v6.17.0-155dfc?logo=mongodb&logoColor=%2347A248)
- ![.env](https://img.shields.io/badge/.env-v16.5.0-155dfc?logo=dotenv&logoColor=%23ECD53F)
- ![JWT](https://img.shields.io/badge/jsonwebtokens-v9.0.2-155dfc?logo=jsonwebtokens&logoColor=%23000000)
- ![Vercel](https://img.shields.io/badge/Vercel-ffffff?logo=vercel&logoColor=%23000000)

### Thank you for Reading!