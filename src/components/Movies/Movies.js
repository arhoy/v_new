import React, { Component } from 'react';
import {getMovies} from '../../resources/fakeMovieService';

class Movies extends Component {
    state = {
        movies: []
    };
    componentDidMount(){
        this.setState({movies:getMovies()})
    }

    buttonEventHandler = (m)=>{
        const movies = this.state.movies.filter(movie=> movie._id !== m._id );
        this.setState({movies});
    }
    render() {
        console.log(this.state.movies);
    
    
        return (
            <div>
                {
                    this.state.movies < 1 ? <h2>There are no movies in the database </h2> : <h2> Number of movies in the database: {this.state.movies.length}</h2>
                }
        
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                     {this.state.movies.map(movie=>(
                         <tr key = {movie._id}>
                             <td>{movie.title}</td>
                             <td>{movie.genre.name}</td>
                             <td>{movie.numberInStock}</td>
                             <td>{movie.dailyRentalRate}</td>
                             <td><button onClick = { () => {this.buttonEventHandler(movie)} } className = "btn btn-danger btn-sm">Delete</button></td>
                         </tr>
                     ))}
                    </tbody>
                    </table>
                
            </div>
        );
    }
}

export default Movies;