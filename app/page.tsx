import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ------ Components -------------------------------
import { MainContainer } from "@/components";


import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// --------- Icons -----------------------------------

export default function Home() {
  return (
    <div>
      <MainContainer title = "Weblive" srcImage="/poza2.jpg"/>
      <div>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </div>
  );
}
