function MyNavbar(){
    return (
        <nav>
    <a href="ironhack.com">Ironhack</a>
    <br/>
    <a href="reactjs.org">React</a>
    </nav>
    )
}
function MyFooter(){
    return(
        <p><span>First paragraph with REACT</span></p>
    )
}
function App(){
    return (
        <div>
            <MyNavbar />
            <MyFooter />
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"))