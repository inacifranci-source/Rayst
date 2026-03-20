import Logo from "../assets/Link.png"

function Footer (){
  return(
  <>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={Logo} alt="" />
          <select>
            <option>English</option>
            <option>Português</option>
          </select>
        </div>

        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li>Rayst for Chrome</li>
            <li>Rayst for Whale</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>By Rayst</h3>
          <ul>
            <li>Crest</li>
            <li>Gradients</li>
            <li>Emojis</li>
            <li>Domains</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Docs</li>
            <li>Pricing</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Rayst
      </div>
    </footer>
  </>
  )
}

export default Footer

