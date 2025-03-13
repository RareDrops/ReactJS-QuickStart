import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";


function App() {
  const items = ['New York','San Francisco','Tokyo','London','Paris'];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
    
  // Each component is going to have its own state (selected state on first ListGroup wont be the selected state on second)
  return (
  <div>
  <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello <span> World </span></Alert>}
  <Button color="secondary" onClick={() => setAlertVisibility(true)}>My Button</Button>
  </div>
  );
}


export default App;