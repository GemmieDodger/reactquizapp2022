import React from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import Loading from "../components/Loading";
import { useAuth } from "../authProvider";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="App">
        <Header user={user} logout={logout} />
        <Link className="text-decoration-none text-info" to={{ pathname:"/admin", passedProps:{user: user}}}>
              <Card
                  style={{ maxHeight: 100 }}
                  className="bg-secondary d-flex  m-0 p-0 text-light xs={1} md={2}"
                >
                  <Card.Body className="align-items-center d-flex justify-content-center">
               <h3>Create or edit quiz?</h3>
               </Card.Body>
                </Card>
            </Link>
        <Loading />
      </div>
    );
  }

  return (
    <div className="App">
      <Header user={user} logout={logout} />
      <HomeContent user={user} />
    </div>
  );
};

export default Home;
