// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, key, updateStateVal, isActive} = props
  const {tabId, displayText} = tabDetails

  const addTabClass = isActive ? 'add-styles' : ''

  const updateState = () => {
    updateStateVal(tabId)
  }

  return (
    <li className="list-tab-container">
      <button
        onClick={updateState}
        className={`btn ${addTabClass}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
