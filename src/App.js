import React,{useState,useEffect} from 'react';
import fakeData from "./data";
import './App.scss';
import DataItem from "./components/DataItem";
import Loading from "./components/Loading";
import Error from "./components/Error";


const App = () => {

  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false)

  useEffect(() => {
      new Promise((resolve) => {
          setTimeout(() => {
              resolve(fakeData)
          },2000)
      })
          .then(res => setData(res))
          .catch(() => setError(true))
          .finally(() => setLoading(false))

  },[])


  return (
    <div className="app">
        <div className="app__container">
            <div className="app__inner">
                <h1 className="app__title">Course</h1>
                {loading && <Loading label="Loading course..." />}
                {data && (
                    <div className="app__data">
                        {Object
                            .entries(data.rates)
                            .map(rate => (
                                <DataItem
                                    key={rate[0]}
                                    className="app__dataItem"
                                    code={rate[0]}
                                    rate={rate[1]}/>
                            ))
                        }
                    </div>
                )}
                {error && <Error/>}
            </div>
        </div>
    </div>
  );
}

export default App;
