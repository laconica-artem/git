import React, {useState} from 'react';
import Counter from "./components/Counter";
import "./css/App.css"
import Postitem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
    let test = 0;
    let [posts, setPosts] = useState( [
        {id:1, title: '1. Javascript', descr:'Lorem ipsum dolor si'},
        {id:2, title: '2. Javascript', descr:'Lorem ipsum dolor si'},
        {id:3, title: '3. Javascript', descr:'Lorem ipsum dolor si'}
    ])

    function addBinary(a,b) {
        let value = `${a}` + `${b}`
        return value
    }

    let value = addBinary(1, 2)





    function stopWatch(times) {
        var startTime = times;
        function getDelay() {
            var elapsedTime = startTime;

            return elapsedTime
        }
        return getDelay();
    }
    let timer = stopWatch("1230");

    console.log(timer)




  return (
    <div className="App">
        <form action="">
            <input type="text" placeholder='Name post'/>
            <input type="text" placeholder='Descr text'/>
            <MyButton>Create post</MyButton>
        </form>
        <PostList posts={posts} title={'Product List'} />
    </div>
  );
}


export default App;
