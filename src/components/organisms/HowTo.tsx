import TouchAppIcon from '@material-ui/icons/TouchApp'
import { howToText, howToText2 } from 'utils/constant'

const HowTo: React.FC = () => {
  return (
    <>
      <h3>{howToText}</h3>
      <h3>
        {howToText2[0]}
        <span>
          <TouchAppIcon color="error" fontSize="large" />
        </span>
        {howToText2[1]}
      </h3>
    </>
  )
}

export default HowTo
