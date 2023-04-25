import './settings.css'
import SideBar from "../../components/sideBar/SideBar"

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your account</span>
          <span className="settingsDeleteTitle">Delete Your account</span>

        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input id="fileInput" type='file' style={{ display: "none" }} />
          </div>
          <lable>UserName</lable>
          <input type="text" placeholder='Anna...' />
          <lable>Email</lable>
          <input type="email" placeholder='ann_rose@ukr.net' />
          <lable>Password</lable>
          <input type="passsword" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div >
      <SideBar />
    </div >
  )
}
