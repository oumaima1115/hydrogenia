const Example3 = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000/">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true" href="http://localhost:3000/">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Example3;






// Arrow Function (const) + export at the end