import { Link } from "react-router-dom"
export const LinkButton = ({ to, text, look }) => {
    
    return (
        <Link to={`${to}`} className={`nav-link-button ${look} d-flex align-items-center justify-content-center link-btn`}>
         {text}
         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" className="right-icon ms-4">
           <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2">
             <path d="M15 1l9 9-9 9M0 10h24" stroke="currentColor" />
           </g>
           </svg>
         </Link>
     )
}