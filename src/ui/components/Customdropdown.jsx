import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DropdownComponent = () => {
    return (
        <li className="nav-item">
          <Dropdown>
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
              Mas juegos...
            </Dropdown.Toggle>
    
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="valve">Valve Games</Dropdown.Item>
              <Dropdown.Item as={Link} to="/action-2">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/action-3">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      );
};
