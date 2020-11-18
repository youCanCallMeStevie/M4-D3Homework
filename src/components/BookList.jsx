import React from "react"
import Fantasy from "../data/fantasy.json"
import SingleBook from "./SingleBook.jsx"
import "../style.css"

import { Col, Row, InputGroup, FormControl } from "react-bootstrap"

class BookList extends React.Component {
    state = {
        books: Fantasy,
    };

      handleSearchQuery = (searchQuery) => {
    
        if (searchQuery) {
            console.log(searchQuery)
          let filteredBooks = Fantasy.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          this.setState({ books: filteredBooks.slice(0, 12) });
          console.log(filteredBooks)
        } else {
          this.setState({ books: Fantasy.slice(0, 12) });
        }
      };
    render() {
        return (
            <>
            <InputGroup>
            <FormControl
              placeholder="Search Books by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => {this.handleSearchQuery(e.target.value)
            }} 
            />
          </InputGroup>
            <Row className="mt-4">
            {this.state.books ? (this.state.books.map((item) => { 
                
                    return (
                        <SingleBook title = {item.title} image ={item.img} key={item.asin} price={item.price}/>
                        );
                    })
                  ) : (
                      
                    <div> Nothing here </div>
                  )}
                </Row>
            </>
        )
    }
}
    export default BookList


    /*    Fantasy.map((books) => {
            <SingleBook key={books.asin} title={books.title} price={books.price} image={books.img} />
        })
    
    )
    }
    } */


    