import React from 'react'
import '../styles/unsupported.scss'

const Unsupported = (props) => (
  <div className="unsupported">
    {props.unsupportedComponent ? (
      <props.unsupportedComponent {...props} />
    ) : (
      <p>
        <b>{`${props.fileType}`}</b> is not supported.
      </p>
    )}
  </div>
)

export default Unsupported
