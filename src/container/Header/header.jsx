import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <Image src="/what-2-cook_logo.png" width={133} height={100} alt="logo" />
      <form action="">
        <div className="search_bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="button" id="button" />
          <input
            type="text"
            placeholder="Insert ingredient (tomato, camembert,...)"
            id="gifToSearch"
          />
        </div>
        <div className="counter">
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p>recipe(s)</p>
        </div>
      </form>
    </header>
  );
};

export default Header;
