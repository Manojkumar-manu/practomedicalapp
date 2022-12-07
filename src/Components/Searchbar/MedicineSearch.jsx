import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './MedicineSearch.css'

const MedicineSearch = () => {
  return (
    <div>
      <div className="MedicineSearch">
        <div className="MedicineSearchInput">
          <input
            type="text"
            placeholder="Search for medicines, health products and more"
          />
        </div>

        <div></div>

        <Link to={"/cart"}>
          <div className="MedicineSearchCart">
            <button>
              <div>
                  <AiOutlineShoppingCart/>
                  <sup>0</sup>
              </div>
              <span>VIEW CART</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MedicineSearch