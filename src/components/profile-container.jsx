import ProfileImagePanel from "./profile-image-panel.jsx"
import ProfileInfoPanel from "./profile-info-panel.jsx"

const ProfileContainer = () => {
  return (
    <div className="grid lg:grid-cols-[400px_1fr] grid-cols-1 gap-8 min-h-[600px]">
      <ProfileImagePanel />
      <ProfileInfoPanel />
    </div>
  )
}

export default ProfileContainer
