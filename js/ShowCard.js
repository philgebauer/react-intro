import React from 'react'

const ShowCard = react.createClass({
  render () {
    const { poster, title, year, description } = this.props.show
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${show.poster}`} />
        <div>
          <h3> {show.tile} </h3>
          <h4> ({show.year}) </h4>
          <p> {show.description} </p>
        </div>
      </div>
    )
  }
})

export default ShowCard
