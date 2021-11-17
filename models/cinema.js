const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function (films){
    const filmTitles = []
     films.forEach(
       (film) => {
         filmTitles.push(film.title)
       })
    return filmTitles;    
  };

Cinema.prototype.findFilmByTitle = function (title){
  
  
    const result = this.films.filter(
      (film)=>{
        return film.title === title
      });
    return result;
  }
  //  for (const film of this.films){
  //    if(film.title === title){
  //      return film
  //    }
  //  }
  Cinema.prototype.findFilmByGenre = function (genre){
      // const genreList = []
  
    const result = this.films.filter(
      (film)=>{
        return film.genre === genre
      });
    return result;
  };
  Cinema.prototype.isFilmFromYear = function(year){
    for (const film of this.films){
         if(film.year === year){
           return true
         }
        else {
          return false
        }
       };
    


    
    // const result = this.films.filter(
    //   (film)=>{
    //     if (film.year === year){
    //       return true
    //     }
    //   });
    // return result;
  };
  Cinema.prototype.areFilmLongerThan = function(length){
    for (const film of this.films){
         if(film.length >= length){
           return true
         }
        else {
          return false
        }
       };
  };   
  
  Cinema.prototype.totalRunningTime = function (length){
    

    const totalLength=length.reduce(
      (runningTotal,time)=>{
        return runningTotal + time
      },0);return totalLength
    // let totalLength = 0
    // for (film of this.films){
    //   totalLength += film.length
    // };
    // return totalLength;
  };
module.exports = Cinema;
