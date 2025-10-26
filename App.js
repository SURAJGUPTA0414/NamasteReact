   import React from 'react';
    import ReactDOM from 'react-dom/client';
   
   // let heading = React.createElement('h1', {}, 'Hello, React!');
        const heading = React.createElement('h1', {id:'heading',xyz:'hello'}, 'Hello, React!');
        console.log(heading);

        const Heading = () => (
         <>
            <h1 id='heading' xyz='hello'>Hello, React from Component!</h1>
            <h2>This is a functional component</h2>
            </>
        )

        const jsxHeading = (<><h1 id='heading' xyz='hello'>Hello, React!</h1>{Heading()}</>)
        console.log(jsxHeading);

        

        let root = ReactDOM.createRoot(document.getElementById('root'));

      //   root.render(heading);
      root.render(jsxHeading);