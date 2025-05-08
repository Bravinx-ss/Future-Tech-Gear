// import React from 'react'
// import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Navbarcomp = ({search,setSearch}) => {

//     // const filteredProducts = products.filter(product =>
//     //     product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     //     product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
//     // );
//   return (
//     <section className="row">
//             <div className="col-md-12">
//                 {/* <!-- nav tag will carry all the content of the navbar --> */}
//                  <nav className="navbar navbar-expand-md navbar-light bg-light">
//                     <Link href="#" className="navbar-brand"><b>FTG</b></Link>
//                     <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     {/* <!-- div that will carry all our nav links --> */}
//                      <div className="collapse navbar-collapse" id="navbarcollapse">
//                         <div className="navbar-nav  w-100">
//                             <Link  to="/" className="nav-link active">Home</Link>
//                             <Link to={"/addproduct"} className="nav-link">Add Products</Link>
//                             <Link to={"/signin"} className="nav-link">Sign in</Link>
//                             <Link to={"/signup"} className="nav-link">Sign up</Link>

//                             <div className='ms-auto'>
//                                 <form class="d-flex " role="search">
//                                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
//                                     <button className="btn btn-outline-success" type="submit">Search</button>
                                    
//                                     <i class="bi bi-cart"></i> 
//                                 </form>
//                             </div>
//                             {/* Example of a small cart icon */}
//                             <div className="d-flex justify-content-center mt-4">
//                                 <i className="bi bi-cart fs-1"></i> {/* Bigger Shopping Cart Icon */}
//                             </div>
                            
//                         </div>
//                      </div>

//                  </nav>

//             </div>
//             <div>
//                 <footer>

//                 </footer>
//             </div>

//          </section>
//   )
// }

// export default Navbarcomp