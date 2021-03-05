import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
  style={{
    background: `black`,
    marginBottom: `1.45rem`,
  }}
>
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0.5rem 0.5rem`,
      color: 'black'
    }}
  >
    { siteTitle }
  </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
