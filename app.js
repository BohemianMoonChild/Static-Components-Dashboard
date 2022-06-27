//Header Component1===
const Header = () => {
    return (
    <div className= "header">
        <h1>Commence Dashboard Creation!</h1>
        </div>
    )
}


//Dashboard Side Menu Component2===
const SideMenu = () => {
    return (
    <div className= "menu">
        <ul className= "dropdownList">
            <li><h5>Dashboard</h5></li>
            <li><h5>Widget</h5></li>
            <li><h5>Reviews</h5></li>
            <li><h5>Customers</h5></li>
            <li><h5>Online Analysis</h5></li>
            <li><h5>Settings</h5></li>
        </ul>
    </div>
    )
}

//===Reviews Component3===
const Reviews = () => {
    return <div className= "container1">
        <h3>Reviews</h3>
        <h5>1,281</h5>
    
    </div>
}

//===Average Rating Component4===
const AverageRating = () => {
    return <div className= "container2">
        <h3>Average Rating</h3>
        <h5>4.6</h5>
    </div>
}

//===Sentiment Analysis Component5===
const SentimentAnalysis = () => {
    return <div className= "container3">
        <h3>Sentiment Analysis</h3>
        <ul className= "list2">
            <li><h5>960</h5></li>
            <li><h5>122</h5></li>
            <li><h5>321</h5></li>
        </ul>
    </div>
}

//===Website Visitors Component6===
const WebsiteVisitors = () => {
    return <div className= "container4">
        <h3>Website Visitors</h3>
        <h5>821</h5>
        </div>
}

// //===Graph Component Component7===
// const Graph = () => {
//     return <div className= "graph">
//         <h3>graph image holder</h3>
//     </div>

// }



//===App Component=== (if we have a class, we use render)
class App extends React.Component {
    render() {
        return (
            <section className="container">
                <Header />
                <SideMenu />
                <Reviews />
                <AverageRating />
                <SentimentAnalysis />
                <WebsiteVisitors />
                {/* <Graph /> */}
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))