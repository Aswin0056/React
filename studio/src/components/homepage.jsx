import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import Footer from './footer';


const HomePage = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // Fetch people data from Django API
        axios.get('http://127.0.0.1:8000/api/people/')
            .then((response) => {
                setPeople(response.data); // Set the people data from Django API
            })
            .catch((error) => {
                console.error('Error fetching people data:', error);
            });
    }, []);
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
         
          
<header>
      <NavBar />
    </header>
          <h2>Products</h2>
    <div class="row">
      
            <div class="col-md-3 mb-4"> 
            {people.map((person) => (
                    <div key={person.id}>
                         {person.image && (
                <div class="card h-100 custom-card">
                <img
                                src={`http://127.0.0.1:8000${person.image}`}
                                alt={person.name}
                                width="100"
                            />
                    <div class="card-body">
                        <h5 class="card-title">{person.name}</h5>
                        <p class="card-text">₹{person.email}</p>
                        <a href="{% url 'product_details' product.id %}" class="btn btn-primary">View Product</a>
                    </div>
                </div>
                  )}
            </div>
          ))}
    </div>
         
          
            </div>

            

  <footer>
    <Footer />
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}

export default HomePage;