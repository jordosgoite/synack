import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import Modal from './parts/Modal';
import fetchData from './redux/actions/SearchActions';

const Search = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [mySearch, setMySearch] = useState({
    searchData: '',
    searchEngine: '',
  });
  const handleChange = (e) => {
    setMySearch({ ...mySearch, [e.target.name]: e.target.value });
  };
  const handleModal = (data) => {
    const value = data;
    setModal(value);
  };
  const validate = () => {
    let isValid = true;
    if (!mySearch.searchData) {
      isValid = false;
    }
    if (!mySearch.searchEngine) {
      isValid = false;
    }
    return isValid;
  };
  const handleSubmit = () => {
    if (validate()) {
      dispatch(fetchData(mySearch));
    } else {
      setModal(true);
    }
  };
  return (
    <div className="search-menu">
      <input
        className="search-input"
        type="text"
        name="searchData"
        placeholder="Search..."
        onChange={handleChange}
      />
      <select className="search-select" name="searchEngine" onChange={handleChange}>
        <option defaultValue="">Choose Search Engine</option>
        <option value="google">Google</option>
        <option value="bing">Bing</option>
        <option value="both">Both</option>
      </select>
      <button className="search-button" type="button" onClick={handleSubmit}>Search</button>
      {modal ? <Modal toggle={handleModal} /> : null}
    </div>
  );
};
export default Search;
