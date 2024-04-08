function Heading({plus}){
    return<>
     
     <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Event Requiest</a>
    <div class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" onClick={plus}>+</button>
    </div>
  </div>
</nav>
    </>
}
export default Heading