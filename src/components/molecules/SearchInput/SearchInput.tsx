import React, { useState, useCallback, useMemo } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import styled from "styled-components";
import useMarvelCharacters from "../../../utils/ui-hooks/useMarvelCharacters";

const Styled = styled.section`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  border: 1px solid var(--line);
  border-radius: 4px;
  box-shadow: 0 4px 12px 0 rgba(var(--gray80), 0.02);
  background: rgb(var(--gray0));
  .content {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
    flex: 1 1 0%;
  }
  input {
    width: 100%;
    border: none;
    background-image: none;
    color: rgb(var(--gray100));
    background-color: transparent;
    box-shadow: none;
    appearance: none;
    font-size: 14px;
  }
  input:focus {
    outline: none;
    caret-color: var(--primary);
  }
  svg {
    margin-right: 16px;
    width: 20px;
    height: 20px;
  }
`;

interface IProps {
  placeholder?: string;
}

const SearchInput: React.FC<IProps> = (props) => {
  const { placeholder = "Search all" } = props;
  const [query, setQuery] = useState("");
  const { data, isLoading, isError } = useMarvelCharacters(query);

  const handleInputChange = useCallback((e: any) => {
    setQuery(e.target.value);
  }, []);

  const listElement = useMemo(
    () => data.map((piece, i) => <li key={i}>{piece}</li>),
    [data]
  );

  return (
    <>
      <Styled>
        <div className="content">
          <SearchIcon />
          <input
            placeholder={placeholder}
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </Styled>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong...please try it again</p>}
      {!isLoading && !isError && <ol>{listElement}</ol>}
    </>
  );
};
export default SearchInput;
