import axios from 'axios'; 
import React  from 'react'; 
import './App.css';

function Post() {
  const [data, setData] = React.useState([]); 

  React.useEffect(() => {
    axios.get('https://localhost:7235/post/getAllPost', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ paddingTop:"25px"}}>Posts</h1>
        </header>
        <div className="card-container"></div>
        {data.length > 0 ? (
          data.map(item => (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <img src={item.url} alt={"image not found"} className="card-image" />
              <p style={{overflow: "hidden"}}>{item.content}</p>
              <h5>{item.publishedDate}</h5>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
    </div>
  );
}

export default Post;