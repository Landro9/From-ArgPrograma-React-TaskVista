import './footer.css';

const Footer = () =>{
    return (
        <div className="footer">
        <footer className="fopadding d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">TaskVista</a>
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex social-icons">
            <li className="ms-3">
              <a href="https://www.facebook.com"><i className="fa-brands fa-square-facebook"></i></a>
            </li>
            <li className="ms-3">
              <a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
            </li>
            <li className="ms-3">
              <a href="https://www.twitter.com"><i className="fa-brands fa-x-twitter"></i></a>
            </li>
          </ul>
        </footer>
      </div>
    )
}

export default Footer