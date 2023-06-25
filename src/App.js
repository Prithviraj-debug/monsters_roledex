import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// "FUNCTION based component"

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      setMonsters(users);
    })
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }



  return (
    <div className="App">

      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
      onChangeHandler={onSearchChange}
      placeholder="Search Monsters..." 
      classname="search-box" 
      />
    
            <CardList monsters={filteredMonsters} />
          </div>
  )
}

// "CLASS based component"

// class App extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       monsters: [],
//       searchStr: ''
//     };
//     console.log("1")
//   }
  

//   componentDidMount() {
//     console.log("3")
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//     }

//     onSearchChange = (event) => {
//       const searchStr = event.target.value.toLowerCase()
//       this.setState(() => {
//         return { searchStr }
//       })
//     }


//   render() {
//     console.log("2")

//     const { monsters, searchStr } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchStr)
//     })

//     return (
//       <div className="App">

//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox 
//         onChangeHandler={onSearchChange}
//         placeholder="Search Monsters..." 
//         classname="search-box" 
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
