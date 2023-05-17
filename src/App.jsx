import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  

    return (
      <div className='body2'>
          <div className='header1'>
          <h2>Most Trusted Blogs</h2>
          </div>
          <div className='main'>
              <div className='content1'>
          <Blogs title="Classic Movie Blog"/>
          <Blogs content="Do you go to the movies for the popcorn or to analyze the directors' use of cinematography, plot development and musical scores? If you fall into the latter, maybe you're ready to get cast for the role 
          When you begin a film blog, consider choosing a movie genre such as rom-coms, horror movies or classical movies, as Jay's Classic Movie Blog has done. In Jay's blog, you'll notice he followed the best practice of using many images. After all, film lovers are visual people, so keep them engaged with videos and rich photos on these types of blogs."/>
          <Blogs title=" Religion blogs"/>
          <Blogs content="84% of the globe identifies with a religious group. This number explains the mass reach that faith bloggers have when they share their religious beliefs online. Some religious bloggers choose a more specific niche, such as narrowing their spiritual content to focus on marriage, gender, parenting or even business."/>
          <Blogs title="Political blogs"/>
          <Blogs content="There are places where talking about politics is more appropriate than others. A definite safe place to do so is on a political blog. Whether you're a conservative or liberal, writing a political blog can give you the freedom to be as controversial or biased as you wish."/>
          <Blogs title="Personal finance blogs"/>
          <Blogs content="With great power comes great responsibility. As a personal finance blogger, you should inform and educate your readers with the most accurate money saving tips. Making Cents of Finance has proven trustworthy and grown a large following by helping readers answer their pressing questions about investing, credit cards and retirement."/>
          </div>
          <div className='content2'>
              <h3>Hilights</h3>
          <Blogs blogname=" 1. Classic Movie Blog"/>
          <Blogs blogname=" 2. Political blogs"/>
          <Blogs blogname=" 3. Personal finance blogs"/>
          <Blogs blogname=" 4.  Religion blogs"/>
          </div>
      </div>
      </div>
     
    )
  }
  
  const Blogs = ({title, content, blogname}) =>{
       
      return (
          <div>
              <div className='title'>
                   <h2>{title}</h2></div>
              <div className='content'>
                  <p>{content}</p>
              </div>
              <div className='blogname'>
                  <h5>{blogname}</h5>
              </div>
          </div>
      )
  }
  
  export default App