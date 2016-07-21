import _ from 'lodash';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
// Since the search_bar is a project file and not a library, we need to specify a file reference in the import statement using a relative file reference
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new component. This component should produce some HTML
const API_KEY = 'AIzaSyBCzvaaXB4iS1H6MurjZ6uc8Lh5edE5xis';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
    //this.onTermChange = this.onTermChange.bind(this);
  }
  render(){
    const searchVideo = _.debounce((term) => {this.videoSearch(term)}, 300);
    //<SearchBar onTermChange={term => this.videoSearch(term)}/>
    return (
      <div>
        <SearchBar onTermChange={searchVideo} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

  videoSearch(term){
      //console.log('inside on term change'); // For Debug
      YTSearch({key: API_KEY, term}, (videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0]});});
          //The above syntax is equal to: "this.setState( { videos: videos})" this is available under ES6 whanever the property name and the parameter that is being passed to it are identical
    }
}

/*const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}*/
// Take this component generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
