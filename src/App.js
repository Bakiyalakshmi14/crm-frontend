import './App.css';
import { Button } from 'react-bootstrap';
import { Entry } from './pages/Entry/Entry.page';
import { DefaultLayout } from './Layout/DefalutLayout';
import { Dashboard } from './pages/Dashboard/Dashboard.page';
import { AddTicket } from './pages/NewTicket/AddTicket.page';
import { TicketList } from './pages/TicketList/TicketList.page';
import { Ticket } from './pages/Ticket/Ticket.page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './Components/privateRoute/PrivateRoute.Comp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Entry />} />
          <Route path="/" element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<DefaultLayout><Dashboard /></DefaultLayout>} />
              <Route path="/add-ticket" element={<DefaultLayout><AddTicket /></DefaultLayout>} />
              <Route path="/tickets" element={<DefaultLayout><TicketList /></DefaultLayout>} />
              <Route path="/ticket/:tid" element={<DefaultLayout><Ticket /></DefaultLayout>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
