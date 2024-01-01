import React from 'react'

const ResItem = ({text1,text2,fSize}) => {
  return (
      <div>
          <div className="flex flex-col items-center">
            <p className={`text-md text-softText `}>{text1}</p>
            <p className= {`text-scoreColor ${fSize} `}>{text2}</p>
          </div>
    </div>
  )
}

export default ResItem