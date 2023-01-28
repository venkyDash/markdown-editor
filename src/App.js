import {marked} from 'marked';
import {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  let initialText = `# I am a H1 header\
  
  ## I am a H2 header
  
  [My Projects](https://github.com/venkyDash)

  \`npm install awesomeness\`

  \`\`\`
  const beAwesome = () => {
    console.log('Hello World');
    return '\\m/';
  }
  \`\`\`
  
  
  1. Svelte
  2. React
  3. JavaScript
  4. CSS, HTML



  >Blockquote sample\

  ![pic of a ferrari](https://ca-times.brightspotcdn.com/dims4/default/4fe54b3/2147483647/strip/true/crop/5000x3338+0+0/resize/1200x801!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6c%2Fce%2Feb7ce0174a99bcf7e4fd4cd91a06%2Ffi-hy-ferrari-488-pista-10.jpg)\

  **Preview only below**\
  `
 const [input, setInput] = useState(initialText);

 marked.setOptions({
  gfm: true,
  breaks: true,
 })
 
 useEffect(() => {
  document.getElementById('preview').innerHTML = marked.parse(input);
 }, [input]);

  const parseInput = (ev) => {
     setInput(ev.target.value);
  }
  return (
    <div className="App row row-cols-2" style={{'padding': '5rem 1rem 5rem 1rem'}}>
      <div className="inputArea col">
        <div className="card">
          <div className="card-header">Input</div>
          <div className="card-body">
            <textarea className="form-control" id="editor" name="inputText" rows="7" cols="50" onChange={parseInput} defaultValue={initialText}></textarea>
          </div>
        </div>
      </div>
      {/* <div className="outputArea col">
        <div id="preview" className=""></div>
      </div> */}
      <div className="outputArea col">
        <div className="card">
          <div className="card-header">Markdown</div>
          <div className="card-body">
            <div id="preview" className='card-text'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
