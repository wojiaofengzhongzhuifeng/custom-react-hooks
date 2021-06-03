import {useEffect, useState} from 'react';

const useDebounce = (initState, delay)=>{
  const [state, setState] = useState(initState);
  useEffect(()=>{
    let timeId = setTimeout(()=>{
      setState(initState)
    }, delay || 1000);
    return ()=>{
      clearTimeout(timeId)
    }
  }, [initState, delay])
  return state
}

const UseDebounce = ()=>{
  const [state, setState] = useState('');
  const deboucedState = useDebounce(state);
  const handleChange = (e)=>{
    setState(e.target.value)
  }

  useEffect(()=>{
    console.log('发送请求');
  }, [deboucedState])

  useEffect(()=>{
    console.log('input 的值发生变化');
  }, [state])

  return (
    <div style={{border: '1px solid red'}}>
      useDebounce
      <input type="text" onChange={handleChange} value={state}/>
    </div>
  )
}
export default UseDebounce
