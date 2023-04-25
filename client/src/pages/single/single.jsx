import './single.css'
import SideBar from "../../components/sideBar/SideBar.jsx"
import SinglePost from '../../components/singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
      {/* {post} */}
      <SinglePost />
      <SideBar />

    </div>
  )
}
