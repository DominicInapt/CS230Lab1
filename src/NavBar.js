export default function NavBar(){

    return (
        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid">
                <a style={{color:'white'}} class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a style={{color:'white'}} class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color:'grey'}} class="nav-link" href="#">About</a>
                    </li>
                   
                    <li class="nav-item">
                    <a style={{color:'gray'}} class="nav-link disabled">Contact</a>
                    </li>
                </ul>
                <form class="d-flex" role="search" >
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button  class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}