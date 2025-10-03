import React from "react"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        {/* Loader shown before Gatsby hydrates */}
        <div id="___loader">
          <div className="spinner"></div>
          <style>
            {`
              #___loader {
                position: fixed;
                inset: 0;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
              }

              .spinner {
                border: 6px solid #f3f3f3;
                border-top: 6px solid #3498db;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                animation: spin 1s linear infinite;
              }

              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>

        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />

        {props.postBodyComponents}
      </body>
    </html>
  )
}
