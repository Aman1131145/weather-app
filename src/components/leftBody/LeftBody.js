import React from 'react'
import './LeftBody.scss'
import TodayWidget from '../widget/todayWidget/TodayWidget'
import SavedCitiesWidget from '../widget/savedCitiesWidget/SavedCitiesWidget'

function LeftBody() {
  return (
    <div className="LeftBody">
      <TodayWidget />
      <SavedCitiesWidget/>
    </div>
  )
}

export default LeftBody