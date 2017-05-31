import React, { Component, PropTypes } from 'react';
import styles from './Pagination.css';
import { times } from 'lodash';

class Pagination extends Component {
  render () {
    const { totalPages, onHandlerPrevious, onHandlerNext, onHandlePageNumber } = this.props;

    return (
      <div className={styles.Pagination}>
        <ul className="pagination">
          <li>
            <a href="#" className="btn btn-default" onClick={onHandlerPrevious}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {
            times(totalPages, (i) => (
              <li>
                <a href="#" className="btn btn-default" onClick={onHandlePageNumber.bind(null, i)} key={i} >
                  {i}
                </a>
              </li>
            ))
          }
          <li>
            <a href="#" className="btn btn-default" onClick={onHandlerNext}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

const { number, func } = PropTypes

Pagination.propTypes = {
  totalPages: number.isRequired,
  onHandlerPrevious: func.isRequired,
  onHandlerNext: func.isRequired,
  onHandlePageNumber: func.isRequired
}

export default Pagination
