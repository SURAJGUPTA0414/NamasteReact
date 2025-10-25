   // let heading = React.createElement('h1', {}, 'Hello, React!');
        const heading = React.createElement('h1', {id:'heading',xyz:'hello'}, 'Hello, React!');

        let root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(heading);