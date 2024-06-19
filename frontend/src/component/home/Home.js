import React from 'react'
import "./Home.css"



export default function Home() {

    
  return (
    <div>
      <div>
        <html>
        <body className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
         
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <a className="navbar-brand" href="/contact"><span className="fw-bolder text-primary">Contact Us&nbsp;&nbsp;<i class="fas fa-phone"></i></span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><a className="nav-link" href="/add"><i className='fas fa-plus'></i>&nbsp;Add Tasks</a></li>
                            <div style={{marginLeft:"35px"}}>
                             <li className="nav-item"><a className="nav-link" href="/list"><i className='fas fa-file'></i>&nbsp;To Do List</a></li>
                            </div>
                            
                            
                            <div style={{marginLeft:"35px"}}>
                            <li className="nav-item"><a className="nav-link" href="/"><i className='fas fa-sign-out-alt'></i>&nbsp;Logout</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
          
            <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                           
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Add &middot; Upload &middot; Edit</div></div>
                                <div className="fs-3 fw-light text-white">I can help Manage To Your Tasks</div>

                                <h2 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">A simple to do list to manage it all</span></h2>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="/add">
                                    <i className='fas fa-plus'></i>&nbsp;Add Tasks</a>
                                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="/list">
                                    <i className='fas fa-file'></i>&nbsp;To Do Lists</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            
                           
                                   
    {/* Your homepage animation video
    <video className="homepage-video" autoPlay loop muted   style={{ borderRadius: '20px', width:"600px"}}>
        <source src="/images/home1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video> */}
                                    
                                </div>
                            </div>
                        </div>
                   
            </header>

           
            <section   className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                                <p className="lead fw-light mb-4">Welcome to To Do List, simple to do list to manage it all.</p>
                                    <p className="text-muted">
                                    At To Do List, we are dedicated to simplifying your task management through innovative features. With a focus on user experience and efficiency, our platform allows you to seamlessly create, organize, and track your tasks. We aim to enhance your productivity by providing a robust system that ensures secure handling and easy access to your to-do lists. Join us at To Do List and experience a new level of convenience and reliability in managing your tasks. Let's streamline your workflow and achieve excellence together.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; To Do List 2024</div></div>   
                </div>
            </div>
        </footer>
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
       
        <script src="js/scripts.js"></script>
    </body>
        </html>
        
      </div>
    </div>
  )
  }
