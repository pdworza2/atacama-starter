import React from 'react';

import { connect } from 'react-redux'
import { deleteBookFromBookList } from '../actions/actionCreators'

import BookListNameForm from './BookListNameForm'

// Material UI imports
//import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';

import MobileTearSheet from './MobileTearSheet'
import ContentClear from 'material-ui/svg-icons/content/clear'
import { red500 } from 'material-ui/styles/colors';


//import Divider from 'material-ui/Divider';
//import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';



const BookList = React.createClass({

  handleClick(bookId, bookListId) {
    this.props.deleteBook(bookId, bookListId)
  },

  render() {

    const bookList = this.props.bookLists[0]

    if (bookList) {
      return (
          <div >
            <MobileTearSheet>
              <List>
                <Subheader>{bookList.name}</Subheader>

                {/* List out the books in the book list  */}
                {bookList.books.map((book,i) =>
                  <ListItem
                    key={i}
                    primaryText={book.title}
                    rightIconButton={ <IconButton>
                      <ContentClear
                        onClick={() => this.handleClick(book.id, bookList.id)}
                        hoverColor={red500} />
                      </IconButton>
                    }
                  />
                )}
              </List>
            </MobileTearSheet>
            {/* <span>
              <TextField hintText="Change Book List Name" />
            </span>
            <span>
              <RaisedButton label="save" primary={true}/>
            </span> */}
            <BookListNameForm bookListId={bookList.id} />

        </div>
      )
    }
    return <div></div>
  }
})



const mapStateToProps = (state) => {
    return {
        hasErrored: state.bookListsDeleteHasErrored,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      deleteBook: (bookId, bookListId) => dispatch(deleteBookFromBookList(bookId, bookListId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
