import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddButton() {
  return (
    <button>
      <FontAwesomeIcon icon={faPlus} /> Add
    </button>
  );
}

export default AddButton;