import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import './index.css'

// The doc prop contains some metadata about the page being rendered that you can use.
// eslint-disable-next-line
const Wrapper = ({ children, doc }) => (
  <React.Fragment>
    <Helmet>
      <script src="https://kit.fontawesome.com/e750972312.js" crossOrigin="anonymous"></script>
    </Helmet>
    {children}
  </React.Fragment>
)
export default Wrapper
