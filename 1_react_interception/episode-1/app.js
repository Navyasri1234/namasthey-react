{/* <div>
    <div id="root">
        <h1> "huhuh" </h1>
        <h1> "hey hey" </h1>
    </div>
</div> */}

const element = React.createElement('div', {}, 
    React.createElement('div', {id:"root"}, [
        React.createElement('h1', {}, "huhu"),
        React.createElement('h1', {}, "hey hey")
    ])
    );

console.log(element);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);