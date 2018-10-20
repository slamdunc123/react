const NavItem = props => {
    return (
      <li className="nav-item">
        <a href={props.path} className="nav-link">{props.name}</a>
      </li>
    );
  }