import "./search-box.styles.css"

const SearchBox = (props) => (
            <input 
          className={props.classname} 
          type="search" 
          placeholder={props.placeholder}
            onChange={props.onChangeHandler}
          />
)

export default SearchBox;