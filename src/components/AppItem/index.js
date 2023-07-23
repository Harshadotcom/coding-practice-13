// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails, key} = props
  const {appId, appName, imageUrl, category} = appDetails

  return (
    <li className="list-app-container">
      <img alt={appName} src={imageUrl} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
