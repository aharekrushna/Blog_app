import useFetch from './useFetch';
import Bloglist from './Bloglist';
const Home = () => {
    const {data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
  // const handleDelete =(id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs)
  // }
 
  // const [nam, setName] = useState('mario');
  // const [age, setAge] = useState(20);
  // const handleClick = (e) =>{
  //   console.log('hello, ninjas', e);
  //   setName('luigi');
  //   setAge(50);
  // }
  // const handleClickAgain = (name,e) =>{
  //   alert("you clicked again");
  //   console.log('hello '+ name, e.getModifierState);
  // }
    return ( 
       <div className="home"> 
       {error && <div>{error}</div> }
        {isPending && <div>Loading...</div> }
       {blogs && <Bloglist blogs={blogs} title="All  blogs !" />}
        {/* <Bloglist blogs={blogs.filter((blog) => blog.auther === 'mario')} title="Mario's blogs" handleDelete={handleDelete}/>
        <button onClick={()=> setName('hk')}>change name</button>
        <p>{namm}</p> */}
       </div> 
     );
}
 
export default Home;