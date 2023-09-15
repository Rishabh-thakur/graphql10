import React from 'react'
import AddClientModal from '../components/AddClientModal'
import Client from '../components/Clients';
import Projects from '../components/Projects';
import AddProjectModal from '../components/AddProjectModel';
const Home = () => {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
        <AddClientModal/>
        <AddProjectModal/>
    </div>
      <Projects/>
      <hr />
     <Client/>
    </>
  )
}

export default Home